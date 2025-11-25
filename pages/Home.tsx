import React from 'react';
import { Mic2, Zap, Download, Globe, PlayCircle } from 'lucide-react';
import { Button } from '../components/Button';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-slate-900/50 border border-slate-800 rounded-full px-3 py-1 mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
            <span className="text-sm text-slate-300 font-medium">New voices added for 2025</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8">
            Transform Text into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Lifelike Speech
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Generate natural-sounding audio from text with our advanced AI. 
            Perfect for content creators, developers, and businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              className="w-full sm:w-auto px-8 py-4 text-lg"
              onClick={() => onNavigate('generator')}
            >
              Start Generating
            </Button>
            <Button 
              variant="secondary" 
              className="w-full sm:w-auto px-8 py-4 text-lg"
              onClick={() => onNavigate('about')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Everything you need to create amazing audio</h2>
            <p className="text-slate-400">Professional tools for professional results.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mic2 className="w-6 h-6 text-indigo-400" />,
                title: "Natural Voices",
                description: "Choose from our library of high-quality, emotionally resonant AI voices."
              },
              {
                icon: <Zap className="w-6 h-6 text-indigo-400" />,
                title: "Instant Generation",
                description: "Get your audio files in seconds with our lightning-fast processing engine."
              },
              {
                icon: <Download className="w-6 h-6 text-indigo-400" />,
                title: "Easy Export",
                description: "Download your speech as standard WAV files ready for any project."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-colors">
                <div className="bg-slate-900 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};