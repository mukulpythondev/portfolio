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
    title: "DevLok",
    filename: "_devlok.js",
    description: "Developer matchmaking app with features like match, favorite, dislike, and real-time chat.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Redis", "AWS EC2"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    github: "https://github.com/mukul-rana-dev/devlok",
    live: "#",
    code: `/**
 * Project: DevLok
 * 
 * Developer matchmaking app with features like match, 
 * favorite, dislike, and real-time chat.
 */

import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { fetchDevelopers, matchDeveloper, dislikeDeveloper } from '../api';
import { 
  DevCard, 
  ChatWindow, 
  MatchNotification 
} from '../components';

const DevLok = () => {
  const [developers, setDevelopers] = useState([]);
  const [currentDev, setCurrentDev] = useState(null);
  const [matches, setMatches] = useState([]);
  const [socket, setSocket] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const socketInstance = io(process.env.SOCKET_SERVER_URL);
    setSocket(socketInstance);

    socketInstance.on('new-match', (match) => {
      setMatches(prev => [...prev, match]);
    });

    socketInstance.on('new-message', (message) => {
      // Handle new messages
    });

    return () => socketInstance.disconnect();
  }, []);

  useEffect(() => {
    const loadDevelopers = async () => {
      setIsLoading(true);
      try {
        const data = await fetchDevelopers();
        setDevelopers(data);
        setCurrentDev(data[0]);
      } catch (error) {
        console.error("Failed to load developers:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadDevelopers();
  }, []);

  // Rest of the component...
};

export default DevLok;`
  },
  {
    id: 2,
    title: "Eventure",
    filename: "_eventure.js",
    description: "Event management platform with QR code entry, paid events, RSVP, and admin dashboard. Used for college events with 5+ events and 400+ attendees.",
    technologies: ["Next.js", "TypeScript", "Clerk.js", "MongoDB", "Cloudinary", "AWS S3"],
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    github: "https://github.com/mukul-rana-dev/eventure",
    live: "#",
    code: `/**
 * Project: Eventure
 * 
 * Event management platform with QR code entry,
 * paid events, RSVP, and admin dashboard.
 */

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import { 
  EventCard,
  EventForm,
  AdminDashboard,
  QRScanner
} from '@/components';
import { getAllEvents, getEventById } from '@/lib/actions/event.actions';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  const { user, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      try {
        const eventsData = await getAllEvents({
          query: '',
          category: '',
          limit: 10,
          page: 1,
        });
        
        setEvents(eventsData.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleCreateEvent = () => {
    if (!isSignedIn) {
      return router.push('/sign-in');
    }
    
    router.push('/events/create');
  };

  // Rest of the component...
};

export default EventsPage;`
  },
  {
    id: 3,
    title: "Mental Wellness Platform",
    filename: "_wellness_platform.js",
    description: "A mental wellness platform focused on empowering individuals through expert-led masterclasses, podcasts, learning modules, and e-commerce integration.",
    technologies: ["Next.js", "Node.js", "Socket.io", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1602192509154-0b900ee1f851?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    github: "#",
    live: "#",
    code: `/**
 * Project: Mental Wellness Platform
 * 
 * A mental wellness platform focused on empowering individuals
 * through expert-led masterclasses, podcasts, learning modules,
 * and e-commerce integration.
 */

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import { fetchCourses, fetchPodcasts, fetchProducts } from '@/lib/api';
import { 
  Header, 
  CourseCard, 
  PodcastPlayer, 
  ShopSection,
  ChatModule
} from '@/components';

const Dashboard = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [courses, setCourses] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const loadDashboardData = async () => {
      setIsLoading(true);
      try {
        const [coursesData, podcastsData, productsData] = await Promise.all([
          fetchCourses(),
          fetchPodcasts(),
          fetchProducts()
        ]);
        
        setCourses(coursesData);
        setPodcasts(podcastsData);
        setProducts(productsData);
      } catch (error) {
        console.error('Error loading dashboard data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    if (user) {
      loadDashboardData();
    } else {
      router.push('/login');
    }
  }, [user, router]);

  // Real-time chat implementation with Socket.io
  // Learning modules logic
  // E-commerce shop integration
  
  // Rest of the component...
};

export default Dashboard;`
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
