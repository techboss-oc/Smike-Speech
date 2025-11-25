import React from 'react';
import { Mic2, Github, Twitter, Linkedin } from 'lucide-react';

export const Footer = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-indigo-600 p-1.5 rounded-lg">
                <Mic2 className="text-white w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-slate-100">Smike Speech</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Transforming text into lifelike audio with the power of next-generation AI.
            </p>
          </div>
          
          <div>
            <h3 className="text-slate-100 font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><button onClick={() => onNavigate('generator')} className="hover:text-indigo-400 transition-colors">Text to Speech</button></li>
              <li><button onClick={() => onNavigate('pricing')} className="hover:text-indigo-400 transition-colors">Pricing</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-indigo-400 transition-colors">Voices</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-100 font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><button onClick={() => onNavigate('about')} className="hover:text-indigo-400 transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-indigo-400 transition-colors">Contact Us</button></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-100 font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Smike Speech. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};