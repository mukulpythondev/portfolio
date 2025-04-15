
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  filename: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "DevLok",
    filename: "_devlok.js",
    description: "Developer matchmaking app with features like match, favorite, dislike, and real-time chat.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Redis", "AWS EC2"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    github: "https://github.com/mukulpythondev/DevLok",
    live: "https://dev-lok.vercel.app/",
  },
  {
    id: 2,
    title: "Eventure",
    filename: "_eventure.js",
    description: "Event management platform with QR code entry, paid events, RSVP, and admin dashboard. Used for college events with 5+ events and 400+ attendees.",
    technologies: ["Next.js", "TypeScript", "Clerk.js", "MongoDB", "Cloudinary", "AWS S3"],
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    github: "https://github.com/mukulpythondev/Eventure",
    live: "https://eventureio.vercel.app/",
  }
];

const ProjectsPage = () => {
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            className="bg-vscode-bg-secondary rounded overflow-hidden cursor-pointer transform transition-transform hover:scale-102"
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
                <a href={project.github} target="_blank" rel="noreferrer" className="px-3 py-1 bg-vscode-bg-tertiary text-vscode-foreground-light rounded text-sm hover:bg-vscode-accent-blue/20 transition-colors flex items-center gap-2">
                  <Github size={16} />
                  <span>Repository</span>
                </a>
                <a href={project.live} target="_blank" rel="noreferrer" className="px-3 py-1 bg-vscode-bg-tertiary text-vscode-foreground-light rounded text-sm hover:bg-vscode-accent-blue/20 transition-colors flex items-center gap-2">
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
