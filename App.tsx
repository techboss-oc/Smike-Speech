import React, { useState } from 'react';
import { Sparkles, History, Volume2, MessageSquare, AlertCircle } from 'lucide-react';
import { VOICES, GeneratedAudio } from './types';
import { generateSpeech } from './services/geminiService';
import { base64ToUint8Array, createWavBlob } from './utils/audioUtils';
import { Button } from './components/Button';
import { AudioCard } from './components/AudioCard';

const App = () => {
  const [text, setText] = useState('');
  const [selectedVoice, setSelectedVoice] = useState(VOICES[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<GeneratedAudio[]>([]);

  const handleGenerate = async () => {
    if (!text.trim()) return;
    
    setIsLoading(true);
    setError(null);

    try {
      const base64Audio = await generateSpeech(text.trim(), selectedVoice.name);
      const pcmData = base64ToUint8Array(base64Audio);
      const wavBlob = createWavBlob(pcmData);
      const blobUrl = URL.createObjectURL(wavBlob);

      const newItem: GeneratedAudio = {
        id: crypto.randomUUID(),
        text: text.trim(),
        voice: selectedVoice.name,
        blobUrl,
        timestamp: Date.now()
      };

      setHistory(prev => [newItem, ...prev]);
    } catch (err: any) {
      setError(err.message || "Failed to generate speech. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = (id: string) => {
    setHistory(prev => {
      const item = prev.find(i => i.id === id);
      if (item) {
        URL.revokeObjectURL(item.blobUrl);
      }
      return prev.filter(i => i.id !== id);
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500/30">
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 space-x-3">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Sparkles className="text-white w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              Gemini Vox
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Input and Controls */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Input Card */}
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-xl">
              <div className="flex items-center space-x-2 mb-4 text-slate-400 uppercase text-xs font-semibold tracking-wider">
                <MessageSquare size={14} />
                <span>Input Text</span>
              </div>
              
              <div className="relative">
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Enter text to convert to speech..."
                  className="w-full h-48 bg-slate-950 border border-slate-800 rounded-xl p-4 text-base leading-relaxed text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all resize-none scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent"
                  spellCheck={false}
                />
                <div className="absolute bottom-4 right-4 text-xs text-slate-600 font-mono">
                  {text.length} chars
                </div>
              </div>

              {/* Voice Selection */}
              <div className="mt-6">
                <div className="flex items-center space-x-2 mb-3 text-slate-400 uppercase text-xs font-semibold tracking-wider">
                  <Volume2 size={14} />
                  <span>Select Voice</span>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  {VOICES.map((voice) => (
                    <button
                      key={voice.id}
                      onClick={() => setSelectedVoice(voice)}
                      className={`relative group flex flex-col items-center p-3 rounded-xl border transition-all duration-200 ${
                        selectedVoice.id === voice.id
                          ? 'bg-indigo-600/10 border-indigo-500/50 ring-1 ring-indigo-500/50'
                          : 'bg-slate-950 border-slate-800 hover:border-slate-700 hover:bg-slate-800/50'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 text-xs font-bold transition-colors ${
                        selectedVoice.id === voice.id 
                          ? 'bg-indigo-500 text-white' 
                          : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700'
                      }`}>
                        {voice.name[0]}
                      </div>
                      <span className={`text-sm font-medium ${
                        selectedVoice.id === voice.id ? 'text-indigo-400' : 'text-slate-300'
                      }`}>
                        {voice.name}
                      </span>
                      <span className="text-[10px] text-slate-500 mt-0.5">
                        {voice.gender}
                      </span>
                    </button>
                  ))}
                </div>
                <div className="mt-3 text-xs text-slate-500 px-1">
                   {selectedVoice.description}
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mt-6 p-4 bg-red-900/20 border border-red-900/50 rounded-lg flex items-start space-x-3 text-red-200">
                  <AlertCircle size={20} className="shrink-0 mt-0.5 text-red-400" />
                  <p className="text-sm">{error}</p>
                </div>
              )}

              {/* Action Button */}
              <div className="mt-6 flex justify-end">
                <Button 
                  onClick={handleGenerate} 
                  isLoading={isLoading} 
                  disabled={!text.trim()}
                  className="w-full sm:w-auto min-w-[160px]"
                  icon={<Sparkles size={18} />}
                >
                  Generate Audio
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: History */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-xl h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2 text-slate-400 uppercase text-xs font-semibold tracking-wider">
                  <History size={14} />
                  <span>Generated History</span>
                </div>
                {history.length > 0 && (
                  <button 
                    onClick={() => {
                        history.forEach(h => URL.revokeObjectURL(h.blobUrl));
                        setHistory([]);
                    }}
                    className="text-xs text-slate-500 hover:text-red-400 transition-colors"
                  >
                    Clear All
                  </button>
                )}
              </div>

              <div className="space-y-4 flex-1 overflow-y-auto max-h-[600px] pr-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                {history.length === 0 ? (
                  <div className="h-48 flex flex-col items-center justify-center text-slate-600 border-2 border-dashed border-slate-800 rounded-xl">
                    <Volume2 size={32} className="mb-3 opacity-20" />
                    <p className="text-sm">No audio generated yet</p>
                    <p className="text-xs mt-1">Select a voice and type some text.</p>
                  </div>
                ) : (
                  history.map(item => (
                    <AudioCard key={item.id} item={item} onDelete={handleDelete} />
                  ))
                )}
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;