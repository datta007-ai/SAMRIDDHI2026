
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ChatBot from './components/ChatBot';
import Home from './views/Home';
import Schemes from './views/Schemes';
import Dashboard from './views/Dashboard';
import Healthcare from './views/Healthcare';
import Grievances from './views/Grievances';
import Eligibility from './views/Eligibility';
import Identity from './views/Identity';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('samriddhi_theme') as 'light' | 'dark';
    if (savedTheme) setTheme(savedTheme);
    
    const savedLang = localStorage.getItem('samriddhi_lang') as Language;
    if (savedLang) setLang(savedLang);
  }, []);

  useEffect(() => {
    localStorage.setItem('samriddhi_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('samriddhi_lang', lang);
  }, [lang]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <Router>
      <Layout 
        lang={lang} 
        setLang={setLang} 
        theme={theme} 
        toggleTheme={toggleTheme}
      >
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/schemes" element={<Schemes lang={lang} />} />
          <Route path="/dashboard" element={<Dashboard lang={lang} />} />
          <Route path="/health" element={<Healthcare lang={lang} />} />
          <Route path="/grievances" element={<Grievances lang={lang} />} />
          <Route path="/eligibility" element={<Eligibility lang={lang} />} />
          <Route path="/track" element={<Eligibility lang={lang} />} />
          <Route path="/identity" element={<Identity lang={lang} />} />
          <Route path="/identity/:type" element={<Identity lang={lang} />} />
          <Route path="/services/:category" element={<Schemes lang={lang} />} />
          <Route path="*" element={<Home lang={lang} />} />
        </Routes>
        <ChatBot lang={lang} theme={theme} />
      </Layout>
    </Router>
  );
};

export default App;
