
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Terminal from './Terminal';
import { motion } from 'framer-motion';

// Pages
import HomePage from '@/components/pages/HomePage';
import AboutPage from '@/components/pages/AboutPage';
import ProjectsPage from '@/components/pages/ProjectsPage';
import SkillsPage from '@/components/pages/SkillsPage';
import ContactPage from '@/components/pages/ContactPage';

const Layout = () => {
  const [activeTab, setActiveTab] = useState('hello');

  const renderContent = () => {
    switch (activeTab) {
      case 'hello':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'skills':
        return <SkillsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <motion.main
          className="flex-1 overflow-y-auto bg-vscode-bg-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.main>
      </div>
      
      <Terminal />
    </div>
  );
};

export default Layout;
