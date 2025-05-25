import React from 'react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  icon: React.ReactNode;
  delay?: number;
  inView: boolean;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  issuer,
  date,
  icon,
  delay = 0,
  inView
}) => {
  return (
    <div 
      className={`bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 transform transition-all duration-500 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start">
        <div className="p-3 bg-blue-100 dark:bg-slate-800 rounded-md mr-4">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
            {title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
            {issuer}
          </p>
          <p className="text-xs text-blue-600 dark:text-blue-400">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;