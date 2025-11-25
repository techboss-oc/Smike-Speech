import React, { useState } from 'react';
import { Save } from 'lucide-react';
import { Button } from '../../components/Button';

export const AdminSettings = () => {
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Platform Settings</h1>
        <p className="text-slate-400">Configure global application settings.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-8">
        <div>
          <h3 className="text-lg font-medium text-white mb-4">General Configuration</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Application Name</label>
              <input 
                type="text" 
                defaultValue="Smike Speech"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Support Email</label>
              <input 
                type="email" 
                defaultValue="support@smikespeech.com"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <h3 className="text-lg font-medium text-white mb-4">API Configuration</h3>
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Gemini API Key</label>
              <div className="flex space-x-2">
                <input 
                  type="password" 
                  defaultValue="********************************"
                  disabled
                  className="flex-1 bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-2.5 text-slate-400 cursor-not-allowed"
                />
                <Button variant="secondary">Update</Button>
              </div>
              <p className="text-xs text-slate-500">API Key is managed via environment variables.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <h3 className="text-lg font-medium text-white mb-4">Feature Flags</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-200 font-medium">Enable User Registration</p>
                <p className="text-slate-500 text-sm">Allow new users to sign up.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-200 font-medium">Maintenance Mode</p>
                <p className="text-slate-500 text-sm">Disable access for non-admin users.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <Button onClick={handleSave} isLoading={loading} icon={<Save size={18} />}>
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};