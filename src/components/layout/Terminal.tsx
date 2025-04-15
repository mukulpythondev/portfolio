
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Terminal = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([
    "Welcome to Mukul Rana's Portfolio",
    "Type 'help' to see available commands",
  ]);
  const [inputValue, setInputValue] = useState("");
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCommand = (cmd: string) => {
    setTerminalLines([...terminalLines, `> ${cmd}`]);

    const commandLower = cmd.toLowerCase().trim();
    let response = "";

    switch (commandLower) {
      case "help":
        response = "Available commands: about, projects, skills, contact, clear, social";
        break;
      case "about":
        response = "Mukul Rana - Software Developer with expertise in web technologies.";
        break;
      case "projects":
        response = "Check out my projects in the Projects.js tab!";
        break;
      case "skills":
        response = "JavaScript, TypeScript, React, Node.js, and more. See Skills.js for details.";
        break;
      case "contact":
        response = "Email: mukul.rana@example.com | LinkedIn: mukulrana";
        break;
      case "social":
        response = "GitHub: github.com/mukulrana | Twitter: @mukulrana";
        break;
      case "clear":
        setTerminalLines([]);
        return;
      case "":
        response = "";
        break;
      default:
        response = `Command not found: ${cmd}. Type 'help' for available commands.`;
    }

    if (response) {
      setTimeout(() => {
        setTerminalLines(prev => [...prev, response]);
      }, 100);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(inputValue);
    setInputValue("");
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalLines]);

  useEffect(() => {
    // Auto-focus input when terminal is opened
    if (!isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isMinimized]);

  return (
    <motion.div 
      className="bg-vscode-terminal-bg border-t border-vscode-border-dark"
      initial={{ height: isMinimized ? 30 : 200 }}
      animate={{ height: isMinimized ? 30 : 200 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between p-1 bg-vscode-bg-tertiary border-b border-vscode-border-dark">
        <div className="text-xs text-vscode-foreground-muted">TERMINAL</div>
        <button 
          className="text-vscode-foreground-muted hover:text-vscode-foreground-light"
          onClick={() => setIsMinimized(!isMinimized)}
        >
          {isMinimized ? '+' : '-'}
        </button>
      </div>

      {!isMinimized && (
        <div className="h-full flex flex-col">
          <div 
            ref={terminalRef} 
            className="flex-1 p-2 overflow-y-auto font-mono text-sm text-vscode-foreground-light"
          >
            {terminalLines.map((line, index) => (
              <div key={index} className="mb-1">
                {line.startsWith('>') ? (
                  <div className="text-green-400">{line}</div>
                ) : (
                  line
                )}
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSubmit} className="p-2 flex items-center border-t border-vscode-border-dark">
            <span className="text-green-400 mr-2">$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-transparent outline-none text-vscode-foreground-light text-sm"
              placeholder="Enter command..."
            />
          </form>
        </div>
      )}
    </motion.div>
  );
};

export default Terminal;
