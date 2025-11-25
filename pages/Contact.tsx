import React, { useState } from 'react';
import { Mail, MessageSquare, Send, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/Button';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset form after delay or keep success state
      setTimeout(() => setSubmitted(false), 5000);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Get in touch</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Have questions about our API, pricing, or enterprise solutions? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-500/10 p-3 rounded-lg text-indigo-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-slate-300 font-medium">Email</p>
                    <p className="text-slate-500 text-sm">support@smikespeech.com</p>
                    <p className="text-slate-500 text-sm">sales@smikespeech.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-500/10 p-3 rounded-lg text-indigo-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-slate-300 font-medium">Office</p>
                    <p className="text-slate-500 text-sm">123 AI Boulevard, Tech District</p>
                    <p className="text-slate-500 text-sm">San Francisco, CA 94105</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-500/10 p-3 rounded-lg text-indigo-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-slate-300 font-medium">Phone</p>
                    <p className="text-slate-500 text-sm">+1 (555) 123-4567</p>
                    <p className="text-slate-500 text-sm">Mon-Fri from 8am to 5pm PST</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 border border-indigo-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">Enterprise Support?</h3>
              <p className="text-indigo-200 mb-6 leading-relaxed">
                Need a custom SLA, dedicated support, or on-premise deployment? Contact our sales team for enterprise solutions.
              </p>
              <a href="#" className="text-white font-medium underline underline-offset-4 hover:text-indigo-200 transition-colors">
                Learn about Enterprise &rarr;
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-xl">
            <h3 className="text-xl font-semibold text-white mb-6">Send us a message</h3>
            
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-slate-400">Thank you for contacting us. We'll get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-indigo-400 hover:text-indigo-300 text-sm font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                  >
                    <option value="" disabled>Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing & Pricing</option>
                    <option value="enterprise">Enterprise Solutions</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                  isLoading={isSubmitting}
                  icon={<Send size={18} />}
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};