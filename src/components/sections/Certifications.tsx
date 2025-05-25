import React from 'react';
import { useInView } from 'react-intersection-observer';
import CertificationCard from '../ui/CertificationCard';
import { Award, Cloud, Code, Server, Brain } from 'lucide-react';

const Certifications: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const certifications = [
    {
      title: 'ServiceNow Certified System Administrator',
      issuer: 'ServiceNow',
      date: 'April 2024',
      icon: <Server size={24} className="text-blue-600 dark:text-blue-400" />
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'January 2024',
      icon: <Cloud size={24} className="text-blue-600 dark:text-blue-400" />
    },
    {
      title: 'AI in Healthcare Hackathon Finalist',
      issuer: 'National Health Organization',
      date: 'November 2023',
      icon: <Brain size={24} className="text-blue-600 dark:text-blue-400" />
    },
    {
      title: 'Python for Data Science',
      issuer: 'Mohan Babu University',
      date: 'September 2023',
      icon: <Code size={24} className="text-blue-600 dark:text-blue-400" />
    },
    {
      title: 'UI/UX Design Fundamentals',
      issuer: 'Design Academy',
      date: 'August 2023',
      icon: <Award size={24} className="text-blue-600 dark:text-blue-400" />
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            <span className="text-blue-600 dark:text-blue-400">Certifications</span> & Achievements
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300">
            Professional certifications and notable achievements
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              icon={cert.icon}
              delay={index * 100}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;