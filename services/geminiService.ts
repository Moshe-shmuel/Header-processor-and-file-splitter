
import { GoogleGenAI } from "@google/genai";

// Initialize AI with the environment variable directly as required by guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const enhanceHeaders = async (content: string): Promise<string> => {
  try {
    // Calling generateContent directly on ai.models as per the latest SDK requirements
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `
        Analyze the following Hebrew text which contains HTML-like tags (<h1>, <h2>, etc.).
        Suggest improvements for the titles to be more descriptive and suitable for a library project (Otzaria).
        Return ONLY the improved text, preserving all tags and non-tag content.
        
        Text:
        ${content.substring(0, 5000)}
      `,
      config: {
        systemInstruction: "You are an expert in Hebrew literature and bibliographic organization. Your task is to enhance text titles while maintaining the exact structure of the provided content."
      }
    });

    // Accessing .text as a property, not a method, as per guidelines
    return response.text || content;
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};
