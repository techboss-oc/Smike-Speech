export type VoiceGender = 'Male' | 'Female';
export type VoiceTone = 'Deep' | 'Calm' | 'Energetic' | 'Warm' | 'Soft';

export interface VoiceOption {
  id: string;
  name: string;
  gender: VoiceGender;
  tone: VoiceTone;
  description: string;
  previewText: string;
}

export const VOICES: VoiceOption[] = [
  { 
    id: 'Puck', 
    name: 'Puck', 
    gender: 'Male', 
    tone: 'Deep',
    description: 'Resonant and authoritative.',
    previewText: 'Hello, I am Puck. I have a deep and resonant voice.'
  },
  { 
    id: 'Charon', 
    name: 'Charon', 
    gender: 'Male', 
    tone: 'Calm',
    description: 'Steady and trustworthy.',
    previewText: 'Hi, I\'m Charon. My voice is calm and steady.'
  },
  { 
    id: 'Kore', 
    name: 'Kore', 
    gender: 'Female', 
    tone: 'Warm',
    description: 'Engaging and clear.',
    previewText: 'Hello there, I am Kore. I speak with a warm and engaging tone.'
  },
  { 
    id: 'Fenrir', 
    name: 'Fenrir', 
    gender: 'Male', 
    tone: 'Energetic',
    description: 'Fast-paced and intense.',
    previewText: 'Hey! I\'m Fenrir. I bring energy and intensity to the conversation.'
  },
  { 
    id: 'Zephyr', 
    name: 'Zephyr', 
    gender: 'Female', 
    tone: 'Soft',
    description: 'Soothing and gentle.',
    previewText: 'Greetings, I am Zephyr. My voice is soft and soothing.'
  },
];

export interface GeneratedAudio {
  id: string;
  text: string;
  voice: string;
  blobUrl: string;
  timestamp: number;
}