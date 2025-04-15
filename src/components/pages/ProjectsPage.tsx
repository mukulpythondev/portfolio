import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import CodeBlock from '../ui/CodeBlock';

interface Project {
  id: number;
  title: string;
  filename: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  live: string;
  code: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    filename: "_ecommerce-dashboard.js",
    description: "A comprehensive dashboard for e-commerce analytics with real-time data visualization and inventory management.",
    technologies: ["React", "Redux", "Chart.js", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    github: "#",
    live: "#",
    code: `/**
 * Project: E-Commerce Dashboard
 * 
 * A comprehensive dashboard for e-commerce analytics
 * with real-time data visualization and inventory management.
 */

import React, { useState, useEffect } from 'react';
import { fetchSalesData, fetchInventory } from '../api';
import { 
  DashboardLayout, 
  SalesChart, 
  InventoryTable 
} from '../components';

const Dashboard = () => {
  const [salesData, setSalesData] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const loadData = async () => {
      try {
        const sales = await fetchSalesData();
        const items = await fetchInventory();
        
        setSalesData(sales);
        setInventory(items);
      } catch (error) {
        console.error("Failed to load data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, []);

  // Rest of the component...
};

export default Dashboard;`
  },
  {
    id: 2,
    title: "Social Media App",
    filename: "_social-app.js",
    description: "A modern social media platform with real-time chat, post sharing, and profile customization.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    github: "#",
    live: "#",
    code: `/**
 * Project: Social Media App
 * 
 * A modern social media platform with real-time chat,
 * post sharing, and profile customization.
 */

import React, { useState, useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import { 
  Login, 
  Register, 
  Feed, 
  Profile, 
  Messages 
} from './pages';
import { Navbar, Sidebar, ThemeToggle } from './components';

const App = () => {
  const { currentUser } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-theme');
  };

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );

  // Rest of the component...
};

export default App;`
  },
  {
    id: 3,
    title: "Task Management System",
    filename: "_task-manager.js",
    description: "A collaborative task management system with team workspaces, task assignment, and progress tracking.",
    technologies: ["React", "Firebase", "Material-UI", "TypeScript"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    github: "#",
    live: "#",
    code: `/**
 * Project: Task Management System
 * 
 * A collaborative task management system with team workspaces,
 * task assignment, and progress tracking.
 */

import React, { useReducer, useEffect } from 'react';
import { taskReducer, initialState } from './reducers';
import { fetchTasks, fetchWorkspaces } from './services/api';
import { 
  Header, 
  Sidebar, 
  TasksList, 
  TaskDetail, 
  CreateTaskModal 
} from './components';

const TaskManager: React.FC = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => {
    const loadInitialData = async () => {
      dispatch({ type: 'FETCH_START' });
      
      try {
        const [tasks, workspaces] = await Promise.all([
          fetchTasks(),
          fetchWorkspaces()
        ]);
        
        dispatch({ 
          type: 'FETCH_SUCCESS', 
          payload: { tasks, workspaces } 
        });
      } catch (error) {
        dispatch({ 
          type: 'FETCH_ERROR', 
          payload: error.message 
        });
      }
    };
    
    loadInitialData();
  }, []);

  // Rest of the component...
};

export default TaskManager;`
  }
];

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <motion.h2 
        className="text-3xl font-semibold text-white mb-8" 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        Projects<span className="text-vscode-accent-blue">.js</span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            className="bg-vscode-bg-secondary rounded overflow-hidden cursor-pointer transform transition-transform hover:scale-102"
            onClick={() => handleProjectClick(project)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center mb-2">
                <div className="h-3 w-3 rounded-full bg-vscode-accent-blue mr-2"></div>
                <h3 className="text-lg font-medium text-white">{project.title}</h3>
              </div>
              <p className="text-vscode-foreground-muted text-sm mb-3">{project.filename}</p>
              <p className="text-vscode-foreground-light text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-vscode-bg-tertiary text-xs rounded text-vscode-foreground-light">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <a href={project.github} className="text-vscode-foreground-muted hover:text-vscode-accent-blue transition-colors">
                  <Github size={18} />
                </a>
                <a href={project.live} className="text-vscode-foreground-muted hover:text-vscode-accent-blue transition-colors">
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-white">
              Project Code: <span className="text-vscode-accent-blue">{selectedProject.filename}</span>
            </h3>
            <div className="flex gap-4">
              <a href={selectedProject.github} className="px-3 py-1 bg-vscode-bg-tertiary text-vscode-foreground-light rounded text-sm hover:bg-vscode-accent-blue/20 transition-colors flex items-center gap-2">
                <Github size={16} />
                <span>Repository</span>
              </a>
              <a href={selectedProject.live} className="px-3 py-1 bg-vscode-bg-tertiary text-vscode-foreground-light rounded text-sm hover:bg-vscode-accent-blue/20 transition-colors flex items-center gap-2">
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
          <CodeBlock code={selectedProject.code} />
        </motion.div>
      )}
    </div>
  );
};

export default ProjectsPage;
