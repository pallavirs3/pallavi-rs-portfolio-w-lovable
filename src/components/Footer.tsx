
import { Mail, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-xl font-heading font-bold text-portfolio-dark mb-2">
              Pallavi<span className="text-portfolio-purple">.</span>
            </h2>
            <p className="text-gray-600 max-w-md">
              Computer Science student passionate about cybersecurity, programming, and fitness.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="mailto:pallavi4740@gmail.com" 
                className="text-gray-500 hover:text-portfolio-purple transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://github.com/pallavirs3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-portfolio-purple transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/pallavi-r-s-7234a820b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-portfolio-purple transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            "Built with curiosity and Love for Dev. Designed by Pallavi – 2025"
          </p>
          <p className="text-center text-gray-400 text-xs mt-2">
            Computer Science Engineering Student | Fitness Enthusiast
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
