
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
  location: "India",
  education: [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science",
      institution: "Delhi Technological University",
      year: "2020"
    }
  ],
  experience: [
    {
      position: "Frontend Developer",
      company: "TechCorp Solutions",
      duration: "2020 - Present",
      responsibilities: [
        "Developing responsive web applications",
        "Building reusable components with React",
        "Collaborating with design teams",
        "Implementing UI/UX improvements"
      ]
    },
    {
      position: "Junior Web Developer",
      company: "WebTech Innovations",
      duration: "2019 - 2020",
      responsibilities: [
        "Assisted in frontend development",
        "Worked on bug fixes and small features",
        "Learned modern JavaScript frameworks"
      ]
    }
  ],
  interests: [
    "Web Technologies",
    "UI/UX Design",
    "Open Source",
    "AI and Machine Learning"
  ]
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
              <span className="text-vscode-keyword">const</span> <span className="text-vscode-variable">location</span> = <span className="text-vscode-string">"India"</span>;
            </p>
            <p className="mb-2 text-vscode-foreground-light">
              <span className="text-vscode-keyword">const</span> <span className="text-vscode-variable">email</span> = <span className="text-vscode-string">"contact@mukulrana.com"</span>;
            </p>
          </div>
          
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-vscode-foreground-muted mb-2">// Professional Strengths</h4>
            <ul className="list-disc list-inside text-vscode-foreground-light space-y-1">
              <li>Problem Solving</li>
              <li>Attention to Detail</li>
              <li>Quick Learner</li>
              <li>Team Collaboration</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-vscode-foreground-muted mb-2">// Interests</h4>
            <ul className="list-disc list-inside text-vscode-foreground-light space-y-1">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Open Source</li>
              <li>Music & Photography</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
