import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Location from './components/Location/Location';
import SocialMedia from './components/SocialMedia/SocialMedia';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

function App() {
  const [currentPage, setCurrentPage] = useState('about');
  const [loading, setLoading] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  const renderContent = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'resume':
        return <Resume />;
      case 'portfolio':
        return <Portfolio />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;
      case 'location':
        return <Location />;
      case 'social':
        return <SocialMedia />;
      default:
        return <About />;
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <Sidebar 
        onPageChange={setCurrentPage} 
        currentPage={currentPage}
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <main className={`main-content ${sidebarCollapsed ? 'expanded' : ''}`}>
        {renderContent()}
      </main>
      <ScrollToTop />
    </div>
  );
}

export default App;