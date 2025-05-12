
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  image?: string;
}

const ProjectCard = ({
  title,
  description,
  link,
  linkText = "View Project",
  image = "/placeholder.svg",
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out"
          style={{ 
            backgroundImage: `url(${image})`,
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-heading font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        {link && (
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-portfolio-purple hover:text-portfolio-darkpurple transition-colors text-sm font-medium"
          >
            {linkText}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
