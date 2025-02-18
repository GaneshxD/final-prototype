import React, { useRef, useState } from 'react';
import { Upload, Image, AlertCircle } from 'lucide-react';
import { useUploadStore } from '../../stores/useUploadStore';
import { useAnalyticsStore } from '../../stores/useAnalyticsStore';
import { analyzeTrafficImage } from '../../lib/gemini';

export default function QuickUpload() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { uploadsToday, canUpload, incrementUploads } = useUploadStore();
  const { addAnalysis } = useAnalyticsStore();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      setError('No file selected');
      return;
    }

    if (!canUpload()) {
      setError('Daily upload limit reached (5/5). Try again tomorrow.');
      return;
    }

    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file');
      return;
    }

    const maxSize = 50 * 1024 * 1024; // 50MB
    if (file.size > maxSize) {
      setError('File size exceeds 50MB limit');
      return;
    }

    try {
      setIsAnalyzing(true);
      setError(null);

      // Convert file to base64
      const reader = new FileReader();
      reader.onload = async (e) => {
        const base64 = e.target?.result as string;
        if (!base64) {
          setError('Failed to read image file');
          setIsAnalyzing(false);
          return;
        }

        try {
          const analysis = await analyzeTrafficImage(base64);
          if (analysis) {
            incrementUploads();
            
            // Create a URL for the uploaded image
            const imageUrl = URL.createObjectURL(file);
            
            // Add the analysis to the store
            addAnalysis({
              id: Date.now().toString(),
              thumbnail: imageUrl,
              date: new Date().toLocaleString(),
              congestion: `${analysis.congestionLevel === 'high' ? 75 : analysis.congestionLevel === 'medium' ? 45 : 25}%`,
              vehicleCount: analysis.vehicleCount,
            });
          } else {
            setError('Analysis failed. Please try again.');
          }
        } catch (error) {
          setError('Failed to analyze image. Please try again.');
        } finally {
          setIsAnalyzing(false);
        }
      };

      reader.onerror = () => {
        setError('Failed to read image file');
        setIsAnalyzing(false);
      };

      reader.readAsDataURL(file);
    } catch (error) {
      setError('An error occurred while processing the image');
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Upload</h2>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {uploadsToday}/5 uploads today
        </div>
      </div>
      
      <div 
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          canUpload() 
            ? 'border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-neon-blue'
            : 'border-red-300 dark:border-red-600'
        }`}
      >
        <Upload className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500 mb-4" />
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          {canUpload() 
            ? 'Drag and drop your traffic footage here, or'
            : 'Daily upload limit reached. Try again tomorrow.'}
        </p>
        {canUpload() && (
          <>
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileUpload}
            />
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="bg-blue-600 dark:bg-neon-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-neon-blue/90 transition-colors"
              disabled={isAnalyzing}
            >
              {isAnalyzing ? 'Analyzing...' : 'Upload Image'}
            </button>
          </>
        )}
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
          Supported formats: JPG, PNG (max. 50MB)
        </p>
      </div>

      {error && (
        <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg flex items-center">
          <AlertCircle className="h-5 w-5 mr-2" />
          {error}
        </div>
      )}
    </div>
  );
}