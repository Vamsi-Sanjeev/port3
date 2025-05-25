import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-black border-t border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              © {currentYear} [Your Name]. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:email@example.com"
              className="text-gray-400 hover:text-purple-500 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Built with React, Tailwind CSS, and passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;