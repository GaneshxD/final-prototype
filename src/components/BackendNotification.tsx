import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle, AlertTriangle } from 'lucide-react';

export default function BackendNotification() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show notification after a short delay
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-white/90 dark:bg-dark-200/90 backdrop-blur-lg rounded-lg shadow-lg border border-neon-blue dark:border-neon-pink p-4 flex items-start space-x-3 max-w-md neon-border dark:neon-pink-border"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex-shrink-0">
              <AlertTriangle className="h-5 w-5 text-neon-pink" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                Backend Not Integrated
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                This is a frontend demo. Backend features are not yet integrated.
              </p>
            </div>
            <button
              onClick={handleClose}
              className="flex-shrink-0 ml-4 text-gray-400 hover:text-neon-pink dark:hover:text-neon-blue focus:outline-none transition-colors"
            >
              <XCircle className="h-5 w-5" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}