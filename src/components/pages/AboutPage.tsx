import React from 'react';
import { motion } from 'framer-motion';
import CodeBlock from '../ui/CodeBlock';

const AboutPage = () => {
  const aboutCode = `/**
 * About Mukul Rana
 * ---------------
 * A passionate Frontend Developer with a
 * strong focus on creating beautiful and
 * functional user interfaces.
 */

const bio = {
  name: "Mukul Rana",
  role: "Frontend Developer",
  location: "Ghaziabad, India",
  phone: "+918882894356",
  email: "mukulpythondev@gmail.com",
  education: [
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
  ],
  experience: [
    {
      position: "Full Stack Developer Intern / Team Lead",
      company: "IABTM",
      duration: "September 2024 - Present",
      location: "Remote",
      responsibilities: [
        "Leading development of a mental wellness platform",
        "Implemented real-time chat with Socket.io",
        "Built responsive architecture with Next.js and Node.js",
        "Oversaw development team and improved code quality"
      ]
    },
    {
      position: "Frontend Developer Intern",
      company: "Descriptive AI",
      duration: "January 2024 - February 2024",
      location: "Remote",
      responsibilities: [
        "Developed vulnerability dashboard with Next.js and Tailwind CSS",
        "Implemented admin dashboard from Figma designs",
        "Fostered strong communication with team members"
      ]
    }
  ],
  skills: {
    languages: ["JavaScript", "TypeScript", "Java", "HTML", "CSS", "SQL"],
    frameworks: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
    tools: ["Git", "GitHub", "Docker", "Redis", "MongoDB", "PostgreSQL", "AWS", "REST APIs"]
  },
  achievements: [
    "Completed Meta Frontend Developer Capstone Course",
    "3x Hackathon Winner and 10+ finalist in National Hackathons",
    "Active Open Source Contributor in GSSOC'24 and Social Summer of Code '24"
  ],
  interests: [
    "Web Technologies",
    "UI/UX Design",
    "Open Source",
    "AI and Machine Learning"
  ],
  socialLinks: {
    github: "https://github.com/mukulpythondev",
    linkedin: "https://linkedin.com/in/mukul-webdev",
    twitter: "@mukulrana320419",
    leetcode: "https://leetcode.com/mukul_rana_dev"
  }
};

export default bio;`;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <motion.h2 
        className="text-3xl font-semibold text-white mb-6" 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        About<span className="text-vscode-accent-blue">.me</span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <motion.div 
          className="lg:col-span-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <CodeBlock code={aboutCode} />
        </motion.div>

        <motion.div 
          className="lg:col-span-2 bg-vscode-bg-secondary p-6 rounded"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Quick Facts</h3>
          
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-vscode-foreground-muted mb-2">// Personal Info</h4>
            <p className="mb-2 text-vscode-foreground-light">
              <span className="text-vscode-keyword">const</span> <span className="text-vscode-variable">name</span> = <span className="text-vscode-string">"Mukul Rana"</span>;
            </p>
            <p className="mb-2 text-vscode-foreground-light">
              <span className="text-vscode-keyword">const</span> <span className="text-vscode-variable">location</span> = <span className="text-vscode-string">"Ghaziabad, India"</span>;
            </p>
            <p className="mb-2 text-vscode-foreground-light">
              <span className="text-vscode-keyword">const</span> <span className="text-vscode-variable">email</span> = <span className="text-vscode-string">"mukulpythondev@gmail.com"</span>;
            </p>
            <p className="mb-2 text-vscode-foreground-light">
              <span className="text-vscode-keyword">const</span> <span className="text-vscode-variable">phone</span> = <span className="text-vscode-string">"+918882894356"</span>;
            </p>
          </div>
          
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-vscode-foreground-muted mb-2">// Technical Skills</h4>
            <ul className="list-disc list-inside text-vscode-foreground-light space-y-1">
              <li>JavaScript / TypeScript</li>
              <li>React / Next.js</li>
              <li>Node.js / Express</li>
              <li>MongoDB / PostgreSQL</li>
              <li>AWS / Docker</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-vscode-foreground-muted mb-2">// Achievements</h4>
            <ul className="list-disc list-inside text-vscode-foreground-light space-y-1">
              <li>3x Hackathon Winner</li>
              <li>Meta Frontend Developer Certificate</li>
              <li>Open Source Contributor</li>
              <li>Current SGPA: 8.8</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
