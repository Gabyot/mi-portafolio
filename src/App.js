import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Presentation from './components/Presentation';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [isDarkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isDarkMode]);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  return (
    <div className="app">
      <Navbar toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Sidebar isVisible={isSidebarVisible} />
      <main className={isSidebarVisible ? 'shifted' : ''}>
        <Presentation />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;


