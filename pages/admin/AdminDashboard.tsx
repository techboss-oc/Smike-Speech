import React from 'react';
import { Mic2, LayoutDashboard, Users, Settings, LogOut, ChevronRight } from 'lucide-react';
import { AdminOverview } from './AdminOverview';
import { AdminUsers } from './AdminUsers';
import { AdminSettings } from './AdminSettings';

interface AdminDashboardProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ currentPage, onNavigate }) => {
  const renderContent = () => {
    switch (currentPage) {
      case 'admin-overview':
        return <AdminOverview />;
      case 'admin-users':
        return <AdminUsers />;
      case 'admin-settings':
        return <AdminSettings />;
      default:
        return <AdminOverview />;
    }
  };

  const menuItems = [
    { id: 'admin-overview', label: 'Overview', icon: <LayoutDashboard size={20} /> },
    { id: 'admin-users', label: 'Users', icon: <Users size={20} /> },
    { id: 'admin-settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="min-h-screen flex bg-slate-950">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col fixed inset-y-0 z-50">
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
              <Mic2 className="text-white w-4 h-4" />
            </div>
            <span className="text-lg font-bold text-white">Smike Admin</span>
          </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                currentPage === item.id
                  ? 'bg-indigo-600/10 text-indigo-400'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={() => onNavigate('home')}
            className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors text-sm font-medium"
          >
            <LogOut size={20} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <header className="h-16 bg-slate-900/50 backdrop-blur border-b border-slate-800 sticky top-0 z-40 px-8 flex items-center justify-between">
          <div className="flex items-center text-sm text-slate-500">
            <span>Admin</span>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-slate-200 font-medium">
              {menuItems.find(i => i.id === currentPage)?.label || 'Dashboard'}
            </span>
          </div>
          
          <div className="flex items-center space-x-3">
             <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-bold">
               A
             </div>
             <span className="text-sm font-medium text-slate-300">Admin User</span>
          </div>
        </header>

        <div className="p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};