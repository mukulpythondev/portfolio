
import { useState } from 'react';
import { motion } from 'framer-motion';
import { File, FolderClosed, FolderOpen, Code, User, Briefcase, Wrench, Mail } from 'lucide-react';
import { cn } from '@/components/utils';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  active: boolean;
  onClick: () => void;
  fileName: string;
  fileExtension: string;
}

const SidebarItem = ({ icon: Icon, label, active, onClick, fileName, fileExtension }: SidebarItemProps) => {
  return (
    <motion.div 
      className={cn(
        "flex items-center px-4 py-2 cursor-pointer hover:bg-vscode-bg-secondary/50 transition-colors",
        active ? "bg-vscode-bg-secondary border-l-2 border-vscode-accent-blue" : ""
      )}
      onClick={onClick}
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      <Icon className={cn("mr-2 h-5 w-5", active ? "text-vscode-accent-blue" : "text-vscode-foreground-muted")} />
      <span className={cn(
        "text-sm",
        active ? "text-vscode-foreground-light" : "text-vscode-foreground-muted"
      )}>
        {fileName}
        <span className="text-vscode-foreground-muted">{fileExtension}</span>
      </span>
    </motion.div>
  );
};

const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [expandedFolders, setExpandedFolders] = useState<string[]>(['portfolio']);

  const toggleFolder = (folder: string) => {
    if (expandedFolders.includes(folder)) {
      setExpandedFolders(expandedFolders.filter(f => f !== folder));
    } else {
      setExpandedFolders([...expandedFolders, folder]);
    }
  };

  return (
    <motion.div 
      className="h-full bg-vscode-bg-primary border-r border-vscode-border-dark min-w-[50px]"
      initial={{ width: isExpanded ? 250 : 50 }}
      animate={{ width: isExpanded ? 250 : 50 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col h-full">
        {/* Sidebar icons */}
        <div className="flex flex-col items-center py-2 border-b border-vscode-border-dark">
          <button 
            className="p-2 text-vscode-foreground-muted hover:text-vscode-foreground-light transition-colors"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <File className="h-5 w-5" />
          </button>
        </div>

        {/* File explorer */}
        {isExpanded && (
          <div className="flex-1 overflow-y-auto py-2">
            <div className="px-4 py-2 text-xs uppercase text-vscode-foreground-muted">Explorer</div>
            
            {/* Portfolio folder */}
            <div>
              <div 
                className="flex items-center px-4 py-1 cursor-pointer hover:bg-vscode-bg-secondary/50"
                onClick={() => toggleFolder('portfolio')}
              >
                {expandedFolders.includes('portfolio') ? 
                  <FolderOpen className="mr-2 h-4 w-4 text-vscode-foreground-muted" /> : 
                  <FolderClosed className="mr-2 h-4 w-4 text-vscode-foreground-muted" />
                }
                <span className="text-sm text-vscode-foreground-muted">portfolio</span>
              </div>
              
              {expandedFolders.includes('portfolio') && (
                <div className="pl-4">
                  <SidebarItem 
                    icon={Code} 
                    label="About Me" 
                    active={activeTab === 'about'} 
                    onClick={() => setActiveTab('about')}
                    fileName="AboutMe"
                    fileExtension=".js"
                  />
                  <SidebarItem 
                    icon={Code} 
                    label="Projects" 
                    active={activeTab === 'projects'} 
                    onClick={() => setActiveTab('projects')}
                    fileName="Projects"
                    fileExtension=".js"
                  />
                  <SidebarItem 
                    icon={Code} 
                    label="Skills" 
                    active={activeTab === 'skills'} 
                    onClick={() => setActiveTab('skills')}
                    fileName="Skills"
                    fileExtension=".js"
                  />
                  <SidebarItem 
                    icon={Code} 
                    label="Contact" 
                    active={activeTab === 'contact'} 
                    onClick={() => setActiveTab('contact')}
                    fileName="Contact"
                    fileExtension=".js"
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Sidebar;
