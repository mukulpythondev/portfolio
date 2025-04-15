
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code } from 'lucide-react';
import CodeBlock from '../ui/CodeBlock';

const HomePage = () => {
  const codeString = `/**
 * @name Mukul Rana
 * @role Frontend Developer
 */

// Welcome to my portfolio
const welcomeMessage = () => {
  console.log("Hi, I'm Mukul Rana");
  console.log("A passionate frontend developer");
  
  const skills = [
    "JavaScript", 
    "TypeScript",
    "React",
    "Next.js", 
    "Node.js", 
    "TailwindCSS"
  ];
  
  // Education
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science Engineering",
      institution: "IMS Engineering College",
      year: "2023 - 2027",
      location: "Ghaziabad, India",
      gpa: "Current SGPA: 8.8"
    },
    {
      degree: "Higher Secondary",
      institution: "Shri Guru Ram Rai Public School",
      year: "2021 - 2023",
      location: "Ghaziabad, India",
      score: "85%"
    }
  ];
  
  return {
    name: "Mukul Rana",
    title: "Frontend Developer",
    location: "Ghaziabad, India",
    email: "mukulpythondev@gmail.com",
    phone: "+918882894356"
  };
};

// Social links
export const socialLinks = {
  github: "https://github.com/mukulpythondev",
  linkedin: "https://linkedin.com/in/mukul-webdev",
  twitter: "@mukulrana320419",
  leetcode: "https://leetcode.com/mukul_rana_dev"
};

welcomeMessage();`;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-0"
        >
          <div className="text-gray-400">Hi all. I am</div>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mt-2 mb-4">Mukul Rana</h1>
          <div className="text-xl text-vscode-accent-blue">&gt; Frontend Developer</div>
        </motion.div>
        
        <motion.div 
          className="flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="https://github.com/mukulpythondev" target="_blank" rel="noreferrer" className="p-2 bg-vscode-bg-tertiary rounded-full hover:text-vscode-accent-blue transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/mukul-webdev" target="_blank" rel="noreferrer" className="p-2 bg-vscode-bg-tertiary rounded-full hover:text-vscode-accent-blue transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://leetcode.com/mukul_rana_dev" target="_blank" rel="noreferrer" className="p-2 bg-vscode-bg-tertiary rounded-full hover:text-vscode-accent-blue transition-colors">
            <Code size={20} />
          </a>
          <a href="mailto:mukulpythondev@gmail.com" className="p-2 bg-vscode-bg-tertiary rounded-full hover:text-vscode-accent-blue transition-colors">
            <Mail size={20} />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <CodeBlock code={codeString} />
      </motion.div>

      <motion.div 
        className="mt-10 text-vscode-foreground-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="mb-4">
          I build responsive and performant web applications with modern JavaScript frameworks.
        </p>
        <p>
          Navigate through the tabs above to learn more about me, my projects, and skills.
        </p>
      </motion.div>
    </div>
  );
};

export default HomePage;
