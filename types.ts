export interface VoiceOption {
  id: string;
  name: string;
  gender: 'Male' | 'Female';
  description: string;
}

export const VOICES: VoiceOption[] = [
  { id: 'Puck', name: 'Puck', gender: 'Male', description: 'Deep, resonant, and authoritative.' },
  { id: 'Charon', name: 'Charon', gender: 'Male', description: 'Calm, steady, and trustworthy.' },
  { id: 'Kore', name: 'Kore', gender: 'Female', description: 'Warm, engaging, and clear.' },
  { id: 'Fenrir', name: 'Fenrir', gender: 'Male', description: 'Energetic, fast-paced, and intense.' },
  { id: 'Zephyr', name: 'Zephyr', gender: 'Female', description: 'Soft, soothing, and gentle.' },
];

export interface GeneratedAudio {
  id: string;
  text: string;
  voice: string;
  blobUrl: string;
  timestamp: number;
}