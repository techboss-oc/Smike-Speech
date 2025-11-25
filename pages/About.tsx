import React from 'react';

export const About = () => {
  return (
    <div className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">About Smike Speech</h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            We are on a mission to make digital communication more human, inclusive, and expressive through the power of artificial intelligence.
          </p>
        </div>

        <div className="space-y-12">
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
            <h2 className="text-2xl font-semibold text-white mb-4">Our Story</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Founded in 2024, Smike Speech began as a research project exploring the nuances of human speech. We realized that while text-to-speech technology existed, it often lacked the emotional depth and subtle inflections that make human conversation engaging.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Today, we leverage the latest advancements in Gemini models to provide creators with voices that don't just read text—they perform it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h2 className="text-xl font-semibold text-white mb-4">Our Vision</h2>
              <p className="text-slate-400 leading-relaxed">
                To create a world where every piece of digital text can be experienced as rich, emotive audio, breaking down barriers to accessibility and engagement.
              </p>
            </div>
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h2 className="text-xl font-semibold text-white mb-4">Our Technology</h2>
              <p className="text-slate-400 leading-relaxed">
                Built on Google's Gemini 2.5 architecture, our engine processes context and emotion in real-time to deliver audio that matches the intent of your words.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};