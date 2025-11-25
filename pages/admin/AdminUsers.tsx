import React from 'react';
import { Search, MoreHorizontal, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '../../components/Button';

export const AdminUsers = () => {
  const users = [
    { id: 1, name: 'Alex Johnson', email: 'alex@example.com', plan: 'Pro', status: 'Active', date: 'Oct 24, 2024' },
    { id: 2, name: 'Sarah Smith', email: 'sarah@example.com', plan: 'Free', status: 'Active', date: 'Oct 22, 2024' },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', plan: 'Enterprise', status: 'Inactive', date: 'Sep 15, 2024' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', plan: 'Pro', status: 'Active', date: 'Nov 01, 2024' },
    { id: 5, name: 'David Wilson', email: 'david@example.com', plan: 'Free', status: 'Active', date: 'Nov 05, 2024' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">User Management</h1>
          <p className="text-slate-400">Manage user access and billing.</p>
        </div>
        <Button>Add User</Button>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search users..." 
              className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            />
          </div>
          <div className="flex space-x-2">
            <select className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-300 focus:outline-none">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
            <select className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-300 focus:outline-none">
              <option>All Plans</option>
              <option>Free</option>
              <option>Pro</option>
              <option>Enterprise</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-950 text-slate-400 font-medium">
              <tr>
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Plan</th>
                <th className="px-6 py-4">Joined</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold mr-3">
                        {user.name[0]}
                      </div>
                      <div>
                        <div className="font-medium text-slate-200">{user.name}</div>
                        <div className="text-slate-500 text-xs">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      user.status === 'Active' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
                    }`}>
                      {user.status === 'Active' ? <CheckCircle size={12} className="mr-1" /> : <XCircle size={12} className="mr-1" />}
                      {user.status}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-2 py-1 rounded text-xs font-medium border ${
                      user.plan === 'Pro' 
                        ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400' 
                        : user.plan === 'Enterprise'
                        ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                        : 'bg-slate-800 border-slate-700 text-slate-400'
                    }`}>
                      {user.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-400">
                    {user.date}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors">
                      <MoreHorizontal size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-6 py-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Showing 1 to 5 of 50 entries</span>
          <div className="flex space-x-2">
            <button className="px-3 py-1 rounded border border-slate-800 hover:bg-slate-800 disabled:opacity-50">Previous</button>
            <button className="px-3 py-1 rounded border border-slate-800 hover:bg-slate-800">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};