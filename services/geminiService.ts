import { GoogleGenAI, Modality } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY environment variable is not set");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateSpeech = async (text: string, voiceName: string): Promise<string> => {
  const ai = getClient();
  
  // Using gemini-2.5-flash-preview-tts as requested for TTS
  const model = "gemini-2.5-flash-preview-tts";

  try {
    const response = await ai.models.generateContent({
      model,
      contents: [
        {
          parts: [
            { text }
          ]
        }
      ],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: {
              voiceName: voiceName
            }
          }
        }
      }
    });

    // The response structure for Audio modality
    // We expect inlineData with mimeType and data (base64)
    const candidates = response.candidates;
    if (!candidates || candidates.length === 0) {
      throw new Error("No candidates returned from Gemini API");
    }

    const parts = candidates[0].content?.parts;
    if (!parts || parts.length === 0) {
      throw new Error("No content parts returned");
    }

    const audioPart = parts[0];
    if (!audioPart.inlineData || !audioPart.inlineData.data) {
       // Sometimes it might return text if it refused to generate audio, handle that
       if (audioPart.text) {
         throw new Error(`Model returned text instead of audio: ${audioPart.text}`);
       }
       throw new Error("No audio data found in response");
    }

    return audioPart.inlineData.data;

  } catch (error) {
    console.error("Gemini TTS Error:", error);
    throw error;
  }
};