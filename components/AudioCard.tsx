import React, { useRef, useState, useEffect } from 'react';
import { GeneratedAudio } from '../types';
import { Play, Pause, Download, Trash2, Mic2 } from 'lucide-react';
import { Button } from './Button';

interface AudioCardProps {
  item: GeneratedAudio;
  onDelete: (id: string) => void;
}

export const AudioCard: React.FC<AudioCardProps> = ({ item, onDelete }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const updateDuration = () => {
      setDuration(audio.duration);
    };

    const onEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', onEnded);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 shadow-md transition-all hover:border-slate-600">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
            <Mic2 size={20} />
          </div>
          <div>
            <h3 className="font-medium text-slate-200 text-sm">Voice: {item.voice}</h3>
            <p className="text-xs text-slate-400 mt-1 line-clamp-1" title={item.text}>
              {item.text}
            </p>
          </div>
        </div>
        <button 
          onClick={() => onDelete(item.id)}
          className="text-slate-500 hover:text-red-400 transition-colors p-1"
        >
          <Trash2 size={16} />
        </button>
      </div>

      <audio ref={audioRef} src={item.blobUrl} className="hidden" />

      <div className="space-y-3">
        {/* Progress Bar */}
        <div className="w-full bg-slate-700 rounded-full h-1.5 cursor-pointer overflow-hidden" 
             onClick={(e) => {
               if(audioRef.current) {
                 const rect = e.currentTarget.getBoundingClientRect();
                 const x = e.clientX - rect.left;
                 const percent = x / rect.width;
                 audioRef.current.currentTime = percent * audioRef.current.duration;
               }
             }}>
          <div 
            className="bg-indigo-500 h-1.5 rounded-full transition-all duration-100" 
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono w-10">
            {formatTime(audioRef.current?.currentTime || 0)}
          </span>

          <div className="flex items-center space-x-2">
            <button 
              onClick={togglePlay}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20"
            >
              {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-0.5" />}
            </button>
          </div>

          <div className="flex items-center space-x-2">
             <span className="text-xs text-slate-500 font-mono w-10 text-right">
              {formatTime(duration)}
            </span>
            <a 
              href={item.blobUrl} 
              download={`gemini-speech-${item.id.slice(0, 6)}.wav`}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
              title="Download WAV"
            >
              <Download size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};