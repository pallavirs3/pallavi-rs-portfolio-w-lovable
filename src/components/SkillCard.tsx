
import { ReactNode } from 'react';

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  description: string;
  skills: string[];
  tools: string[];
}

const SkillCard = ({
  title,
  icon,
  description,
  skills,
  tools,
}: SkillCardProps) => {
  return (
    <div className="card-gradient rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start mb-4">
        <div className="w-10 h-10 rounded-full bg-portfolio-purple bg-opacity-10 flex items-center justify-center text-portfolio-purple mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-heading font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="mb-4">
        <h4 className="font-medium text-sm text-gray-900 mb-2">SKILLS</h4>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-portfolio-purple bg-opacity-10 text-portfolio-purple"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="font-medium text-sm text-gray-900 mb-2">TOOLS</h4>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
