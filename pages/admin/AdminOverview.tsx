import React from 'react';
import { Users, HardDrive, Zap, TrendingUp, DollarSign } from 'lucide-react';

export const AdminOverview = () => {
  const stats = [
    { label: 'Total Users', value: '12,345', change: '+12%', icon: <Users className="w-6 h-6 text-indigo-400" /> },
    { label: 'Audio Generated', value: '1.2M mins', change: '+24%', icon: <Zap className="w-6 h-6 text-indigo-400" /> },
    { label: 'Storage Used', value: '4.5 TB', change: '+8%', icon: <HardDrive className="w-6 h-6 text-indigo-400" /> },
    { label: 'Revenue', value: '$45,230', change: '+18%', icon: <DollarSign className="w-6 h-6 text-indigo-400" /> },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Dashboard Overview</h1>
        <p className="text-slate-400">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-slate-800 rounded-lg">
                {stat.icon}
              </div>
              <div className="flex items-center text-green-400 text-sm font-medium bg-green-500/10 px-2 py-0.5 rounded">
                <TrendingUp size={14} className="mr-1" />
                {stat.change}
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-slate-500 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-slate-800 last:border-0">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs text-slate-400">
                    U{i}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-200">User {i} generated audio</p>
                    <p className="text-xs text-slate-500">2 minutes ago</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-indigo-400">Success</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Server Usage</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-400">CPU Usage</span>
                <span className="text-white font-medium">45%</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 w-[45%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-400">Memory</span>
                <span className="text-white font-medium">62%</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 w-[62%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-400">API Latency</span>
                <span className="text-white font-medium">120ms</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-[25%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};