
import React from 'react';
import { motion } from 'framer-motion';
import CodeBlock from '../ui/CodeBlock';

const SkillsPage = () => {
  const skillsCode = `/**
 * Skills & Technologies
 * 
 * A comprehensive list of my technical skills,
 * tools and technologies I work with.
 */

const skills = {
  languages: [
    { name: "JavaScript", level: "Expert", years: 4 },
    { name: "TypeScript", level: "Advanced", years: 3 },
    { name: "HTML5", level: "Expert", years: 5 },
    { name: "CSS3", level: "Expert", years: 5 },
    { name: "Python", level: "Intermediate", years: 2 }
  ],
  
  frameworks: [
    { name: "React", level: "Expert", years: 4 },
    { name: "Next.js", level: "Advanced", years: 2 },
    { name: "Vue.js", level: "Intermediate", years: 1 },
    { name: "Angular", level: "Beginner", years: 0.5 },
    { name: "Express.js", level: "Intermediate", years: 2 }
  ],
  
  tools: [
    { name: "Git", level: "Advanced", years: 4 },
    { name: "Webpack", level: "Intermediate", years: 3 },
    { name: "Docker", level: "Beginner", years: 1 },
    { name: "Jest", level: "Intermediate", years: 2 },
    { name: "Cypress", level: "Intermediate", years: 1 }
  ],
  
  design: [
    { name: "Figma", level: "Advanced", years: 3 },
    { name: "Adobe XD", level: "Intermediate", years: 2 },
    { name: "Photoshop", level: "Intermediate", years: 3 }
  ],
  
  databases: [
    { name: "MongoDB", level: "Intermediate", years: 2 },
    { name: "MySQL", level: "Intermediate", years: 2 },
    { name: "Firebase", level: "Advanced", years: 3 }
  ],
  
  other: [
    { name: "RESTful APIs", level: "Advanced", years: 3 },
    { name: "GraphQL", level: "Intermediate", years: 1 },
    { name: "Agile/Scrum", level: "Advanced", years: 3 },
    { name: "CI/CD", level: "Intermediate", years: 2 }
  ]
};

export default skills;`;

  const renderSkillBar = (name: string, level: number) => {
    return (
      <div className="mb-3" key={name}>
        <div className="flex justify-between mb-1">
          <span className="text-sm text-vscode-foreground-light">{name}</span>
          <span className="text-xs text-vscode-foreground-muted">{level}%</span>
        </div>
        <div className="h-2 bg-vscode-bg-tertiary rounded-full">
          <motion.div 
            className="h-full bg-vscode-accent-blue rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
        </div>
      </div>
    );
  };

  const frontendSkills = [
    { name: 'HTML5/CSS3', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React', level: 90 },
    { name: 'TailwindCSS', level: 85 },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 80 },
    { name: 'Express', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'RESTful APIs', level: 85 },
    { name: 'Firebase', level: 80 },
  ];

  const toolsSkills = [
    { name: 'Git/GitHub', level: 90 },
    { name: 'Webpack', level: 75 },
    { name: 'Jest', level: 70 },
    { name: 'VS Code', level: 95 },
    { name: 'Figma', level: 70 },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <motion.h2 
        className="text-3xl font-semibold text-white mb-8" 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        Skills<span className="text-vscode-accent-blue">.js</span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CodeBlock code={skillsCode} />
        </motion.div>

        <div>
          <motion.div
            className="bg-vscode-bg-secondary p-6 rounded mb-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
              Front-end Development
            </h3>
            <div className="pl-5">
              {frontendSkills.map(skill => renderSkillBar(skill.name, skill.level))}
            </div>
          </motion.div>

          <motion.div
            className="bg-vscode-bg-secondary p-6 rounded mb-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
              Back-end Development
            </h3>
            <div className="pl-5">
              {backendSkills.map(skill => renderSkillBar(skill.name, skill.level))}
            </div>
          </motion.div>

          <motion.div
            className="bg-vscode-bg-secondary p-6 rounded"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <div className="h-3 w-3 rounded-full bg-purple-500 mr-2"></div>
              Tools & Other Skills
            </h3>
            <div className="pl-5">
              {toolsSkills.map(skill => renderSkillBar(skill.name, skill.level))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="mt-10 p-6 bg-vscode-bg-secondary rounded"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="text-lg font-semibold text-white mb-4">Currently Learning</h3>
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 bg-vscode-bg-tertiary text-vscode-foreground-light rounded text-sm">
            GraphQL
          </span>
          <span className="px-3 py-1 bg-vscode-bg-tertiary text-vscode-foreground-light rounded text-sm">
            Three.js
          </span>
          <span className="px-3 py-1 bg-vscode-bg-tertiary text-vscode-foreground-light rounded text-sm">
            Docker
          </span>
          <span className="px-3 py-1 bg-vscode-bg-tertiary text-vscode-foreground-light rounded text-sm">
            AWS
          </span>
          <span className="px-3 py-1 bg-vscode-bg-tertiary text-vscode-foreground-light rounded text-sm">
            Next.js
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsPage;
