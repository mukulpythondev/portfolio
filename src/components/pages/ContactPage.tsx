
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send, Code } from 'lucide-react';
import CodeBlock from '../ui/CodeBlock';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  const contactCode = `/**
 * Contact Information
 * 
 * Feel free to reach out to me through any
 * of these contact methods.
 */

const contact = {
  email: "mukulpythondev@gmail.com",
  phone: "+918882894356",
  location: "Ghaziabad, India",
  
  socials: {
    github: "https://github.com/mukul-rana-dev",
    linkedin: "https://linkedin.com/in/mukul-webdev",
    twitter: "@mukulrana320419",
    leetcode: "https://leetcode.com/mukul_rana_dev"
  },
  
  // Preferred contact method
  preferred: "email",
  
  // Response time
  responseTime: "Within 24 hours"
};

// Function to send me a message
const sendMessage = async (data) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    return await response.json();
  } catch (error) {
    console.error('Error sending message:', error);
    throw new Error('Failed to send message');
  }
};

export { contact, sendMessage };`;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <motion.h2 
        className="text-3xl font-semibold text-white mb-8" 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        Contact<span className="text-vscode-accent-blue">.js</span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CodeBlock code={contactCode} />

          <motion.div 
            className="mt-8 bg-vscode-bg-secondary p-6 rounded"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Connect With Me</h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-vscode-accent-blue mr-4" />
                <a href="mailto:mukulpythondev@gmail.com" className="text-vscode-foreground-light hover:text-vscode-accent-blue transition-colors">
                  mukulpythondev@gmail.com
                </a>
              </div>
              
              <div className="flex items-center">
                <Github className="h-5 w-5 text-vscode-accent-blue mr-4" />
                <a href="https://github.com/mukul-rana-dev" target="_blank" rel="noreferrer" className="text-vscode-foreground-light hover:text-vscode-accent-blue transition-colors">
                  github.com/mukul-rana-dev
                </a>
              </div>
              
              <div className="flex items-center">
                <Linkedin className="h-5 w-5 text-vscode-accent-blue mr-4" />
                <a href="https://linkedin.com/in/mukul-webdev" target="_blank" rel="noreferrer" className="text-vscode-foreground-light hover:text-vscode-accent-blue transition-colors">
                  linkedin.com/in/mukul-webdev
                </a>
              </div>
              
              <div className="flex items-center">
                <Twitter className="h-5 w-5 text-vscode-accent-blue mr-4" />
                <a href="https://twitter.com/mukulrana320419" target="_blank" rel="noreferrer" className="text-vscode-foreground-light hover:text-vscode-accent-blue transition-colors">
                  @mukulrana320419
                </a>
              </div>
              
              <div className="flex items-center">
                <Code className="h-5 w-5 text-vscode-accent-blue mr-4" />
                <a href="https://leetcode.com/mukul_rana_dev" target="_blank" rel="noreferrer" className="text-vscode-foreground-light hover:text-vscode-accent-blue transition-colors">
                  LeetCode/mukul_rana_dev
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-vscode-bg-secondary p-6 rounded"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-xl font-semibold text-white mb-6">Send Me a Message</h3>
          
          {isSubmitted ? (
            <motion.div 
              className="bg-vscode-bg-tertiary p-6 rounded text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-green-400 text-5xl mb-4">✓</div>
              <h4 className="text-lg font-medium text-white mb-2">Message Sent!</h4>
              <p className="text-vscode-foreground-muted mb-4">
                Thanks for reaching out. I'll get back to you as soon as possible!
              </p>
              <button
                className="px-4 py-2 bg-vscode-accent-blue text-white rounded hover:bg-opacity-80 transition-colors"
                onClick={() => setIsSubmitted(false)}
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-vscode-foreground-light mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-vscode-bg-tertiary border border-vscode-border-dark rounded text-vscode-foreground-light focus:outline-none focus:ring-1 focus:ring-vscode-accent-blue"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-vscode-foreground-light mb-2 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-vscode-bg-tertiary border border-vscode-border-dark rounded text-vscode-foreground-light focus:outline-none focus:ring-1 focus:ring-vscode-accent-blue"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-vscode-foreground-light mb-2 text-sm">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-vscode-bg-tertiary border border-vscode-border-dark rounded text-vscode-foreground-light focus:outline-none focus:ring-1 focus:ring-vscode-accent-blue"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-vscode-foreground-light mb-2 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 bg-vscode-bg-tertiary border border-vscode-border-dark rounded text-vscode-foreground-light focus:outline-none focus:ring-1 focus:ring-vscode-accent-blue resize-none"
                ></textarea>
              </div>
              
              {error && (
                <div className="mb-4 p-2 bg-red-500/20 border border-red-500 rounded text-red-400 text-sm">
                  {error}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-2 bg-vscode-accent-blue text-white rounded hover:bg-opacity-80 transition-colors flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </span>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
