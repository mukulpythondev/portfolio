
import React from 'react';
import { cn } from '@/components/utils';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

interface NavTabProps {
  label: string;
  tabId: string;
  active: boolean;
  onClick: () => void;
}

const NavTab = ({ label, tabId, active, onClick }: NavTabProps) => {
  return (
    <button
      className={cn(
        "px-4 py-2 text-sm border-b-2 transition-colors",
        active 
          ? "border-vscode-accent-blue bg-vscode-tab-active text-vscode-foreground-light" 
          : "border-transparent bg-vscode-tab-inactive text-vscode-foreground-muted hover:bg-vscode-bg-secondary"
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const Navbar = ({ activeTab, setActiveTab }: NavbarProps) => {
  const getFilePath = () => {
    const filenames: Record<string, string> = {
      'about': 'src/portfolio/AboutMe.js',
      'projects': 'src/portfolio/Projects.js',
      'skills': 'src/portfolio/Skills.js',
      'contact': 'src/portfolio/Contact.js',
    };
    
    return filenames[activeTab] || '';
  };

  return (
    <div className="bg-vscode-bg-primary border-b border-vscode-border-dark">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="px-4 py-2 border-r border-vscode-border-dark text-vscode-foreground-muted">
            mukul-rana
          </div>
          <div className="hidden sm:flex px-4 py-2 text-xs text-vscode-foreground-muted">
            {getFilePath()}
          </div>
        </div>
        
        <div className="flex overflow-x-auto hide-scrollbar">
          <NavTab 
            label="_hello" 
            tabId="hello" 
            active={activeTab === "hello"} 
            onClick={() => setActiveTab("hello")} 
          />
          <NavTab 
            label="_about-me" 
            tabId="about" 
            active={activeTab === "about"} 
            onClick={() => setActiveTab("about")} 
          />
          <NavTab 
            label="_projects" 
            tabId="projects" 
            active={activeTab === "projects"} 
            onClick={() => setActiveTab("projects")} 
          />
          <NavTab 
            label="_skills" 
            tabId="skills" 
            active={activeTab === "skills"} 
            onClick={() => setActiveTab("skills")} 
          />
          <NavTab 
            label="_contact-me" 
            tabId="contact" 
            active={activeTab === "contact"} 
            onClick={() => setActiveTab("contact")} 
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
