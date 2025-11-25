import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Generator } from './pages/Generator';
import { Pricing } from './pages/Pricing';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { AdminDashboard } from './pages/admin/AdminDashboard';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const isAdminPage = currentPage.startsWith('admin-');
  const isAuthPage = currentPage === 'login' || currentPage === 'signup';

  const renderPage = () => {
    if (isAdminPage) {
      return <AdminDashboard currentPage={currentPage} onNavigate={setCurrentPage} />;
    }

    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'generator':
        return <Generator />;
      case 'pricing':
        return <Pricing />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'login':
        return <Login onNavigate={setCurrentPage} />;
      case 'signup':
        return <Signup onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500/30 flex flex-col">
      {!isAdminPage && (
        <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      )}
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      {!isAdminPage && !isAuthPage && (
        <Footer onNavigate={setCurrentPage} />
      )}
    </div>
  );
};

export default App;