import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDdx1uCYQo5NgFTnR7FCNVRObWeBKaWpAI");

// Default data structure for when analysis fails
const defaultData = {
  vehicleCount: 0,
  congestionLevel: "low",
  vehicleTypes: {
    cars: 0,
    trucks: 0,
    buses: 0,
    others: 0
  },
  conditions: "No data available",
  recommendations: ["No recommendations available"]
};

export async function analyzeTrafficImage(imageData: string) {
  if (!imageData) {
    console.error('No image data provided');
    return defaultData;
  }

  try {
    // Remove data URL prefix if present
    const base64Data = imageData.includes('base64,') 
      ? imageData.split('base64,')[1] 
      : imageData;

    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
    
    const prompt = `Analyze this traffic image and provide the following information in JSON format. Ensure the response is valid JSON:
    {
      "vehicleCount": number,
      "congestionLevel": "low" | "medium" | "high",
      "vehicleTypes": {
        "cars": number,
        "trucks": number,
        "buses": number,
        "others": number
      },
      "conditions": string,
      "recommendations": string[]
    }`;

    const result = await model.generateContent([
      {
        role: "user",
        parts: [
          { text: prompt },
          {
            inlineData: {
              mimeType: "image/jpeg",
              data: base64Data
            }
          }
        ]
      }
    ]);

    if (!result || !result.response) {
      console.error('No response from Gemini API');
      return defaultData;
    }

    const response = result.response;
    const text = response.text();
    
    if (!text) {
      console.error('Empty response from Gemini API');
      return defaultData;
    }

    try {
      // Find JSON in the response
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        console.error('No JSON found in response');
        return defaultData;
      }

      const parsedData = JSON.parse(jsonMatch[0]);
      
      // Validate and sanitize the parsed data
      return {
        vehicleCount: Number(parsedData.vehicleCount) || 0,
        congestionLevel: ['low', 'medium', 'high'].includes(parsedData.congestionLevel) 
          ? parsedData.congestionLevel 
          : 'low',
        vehicleTypes: {
          cars: Number(parsedData.vehicleTypes?.cars) || 0,
          trucks: Number(parsedData.vehicleTypes?.trucks) || 0,
          buses: Number(parsedData.vehicleTypes?.buses) || 0,
          others: Number(parsedData.vehicleTypes?.others) || 0
        },
        conditions: parsedData.conditions || defaultData.conditions,
        recommendations: Array.isArray(parsedData.recommendations) 
          ? parsedData.recommendations 
          : defaultData.recommendations
      };
    } catch (parseError) {
      console.error('Error parsing Gemini API response:', parseError);
      return defaultData;
    }
  } catch (error) {
    console.error('Error analyzing image:', error);
    return defaultData;
  }
}