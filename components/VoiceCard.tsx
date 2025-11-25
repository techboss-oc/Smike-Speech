import React, { useState, useRef } from 'react';
import { VoiceOption } from '../types';
import { Play, Square, Loader2, Volume2 } from 'lucide-react';
import { generateSpeech } from '../services/geminiService';
import { base64ToUint8Array, createWavBlob } from '../utils/audioUtils';

interface VoiceCardProps {
  voice: VoiceOption;
  isSelected: boolean;
  onSelect: (voice: VoiceOption) => void;
}

export const VoiceCard: React.FC<VoiceCardProps> = ({ voice, isSelected, onSelect }) => {
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [isLoadingPreview, setIsLoadingPreview] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePreview = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent selecting the card when clicking preview

    if (isPreviewing && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPreviewing(false);
      return;
    }

    setIsLoadingPreview(true);

    try {
      const base64Audio = await generateSpeech(voice.previewText, voice.name);
      const pcmData = base64ToUint8Array(base64Audio);
      const wavBlob = createWavBlob(pcmData);
      const blobUrl = URL.createObjectURL(wavBlob);

      if (audioRef.current) {
        audioRef.current.pause();
      }

      const newAudio = new Audio(blobUrl);
      audioRef.current = newAudio;
      
      newAudio.onended = () => {
        setIsPreviewing(false);
        URL.revokeObjectURL(blobUrl);
      };

      await newAudio.play();
      setIsPreviewing(true);
    } catch (error) {
      console.error("Failed to play preview", error);
    } finally {
      setIsLoadingPreview(false);
    }
  };

  return (
    <div
      onClick={() => onSelect(voice)}
      className={`relative group flex flex-col p-4 rounded-xl border transition-all duration-200 cursor-pointer overflow-hidden ${
        isSelected
          ? 'bg-indigo-600/10 border-indigo-500/50 ring-1 ring-indigo-500/50'
          : 'bg-slate-900 border-slate-800 hover:border-slate-700 hover:bg-slate-800/50'
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
          isSelected 
            ? 'bg-indigo-500 text-white' 
            : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700'
        }`}>
          {voice.name[0]}
        </div>
        
        <button
          onClick={handlePreview}
          disabled={isLoadingPreview}
          className={`p-2 rounded-full transition-colors ${
            isSelected ? 'text-indigo-400 hover:bg-indigo-500/20' : 'text-slate-500 hover:bg-slate-800 hover:text-indigo-400'
          }`}
          title="Preview Voice"
        >
          {isLoadingPreview ? (
            <Loader2 size={16} className="animate-spin" />
          ) : isPreviewing ? (
            <Square size={16} fill="currentColor" />
          ) : (
            <Play size={16} fill="currentColor" />
          )}
        </button>
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className={`font-semibold ${isSelected ? 'text-indigo-400' : 'text-slate-200'}`}>
            {voice.name}
          </h3>
          <span className="text-[10px] uppercase tracking-wider font-medium text-slate-500 bg-slate-800 px-1.5 py-0.5 rounded">
            {voice.gender}
          </span>
        </div>
        
        <div className="mt-1 flex flex-wrap gap-1">
          <span className="text-xs text-slate-500">{voice.tone}</span>
        </div>
        
        <p className="mt-2 text-xs text-slate-400 line-clamp-2">
          {voice.description}
        </p>
      </div>

      {isSelected && (
        <div className="absolute inset-0 border-2 border-indigo-500/50 rounded-xl pointer-events-none" />
      )}
    </div>
  );
};
