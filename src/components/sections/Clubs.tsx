import React from 'react';
import { useInView } from 'react-intersection-observer';
import TimelineItem from '../ui/TimelineItem';
import { Code, Users, Camera, Award, Calendar, Presentation } from 'lucide-react';

const Clubs: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const events = [
    {
      date: 'Aug 2023 - Present',
      title: 'Core Member - Coding Club',
      description: 'Led and participated in technical sessions, hackathons, and workshops for students interested in programming and development.',
      icon: <Code size={20} className="text-white" />
    },
    {
      date: 'Sep 2023 - Present',
      title: 'Coordinator - ISTE Club',
      description: 'Organized events such as the Techie Talent Show, interactive junior-senior sessions, and photography competitions.',
      icon: <Users size={20} className="text-white" />
    },
    {
      date: 'Nov 2023',
      title: 'Photography Competition',
      description: 'Organized a campus-wide photography competition that showcased student creativity and technical skills in digital photography.',
      icon: <Camera size={20} className="text-white" />
    },
    {
      date: 'Jan 2024',
      title: 'Techie Talent Show',
      description: 'Led a talent show that combined technical demonstrations with creative performances, fostering cross-disciplinary collaboration.',
      icon: <Award size={20} className="text-white" />
    },
    {
      date: 'Mar 2024',
      title: 'Junior-Senior Interactive Sessions',
      description: 'Facilitated knowledge-sharing sessions between junior and senior students to help newcomers navigate their academic journey.',
      icon: <Calendar size={20} className="text-white" />
    },
    {
      date: 'May 2024',
      title: 'Technical Workshop Series',
      description: 'Developed and conducted a series of hands-on workshops covering cloud computing, UI/UX design, and prompt engineering.',
      icon: <Presentation size={20} className="text-white" />
    }
  ];

  return (
    <section id="clubs" className="py-20 px-4 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Clubs & <span className="text-blue-600 dark:text-blue-400">Events</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300">
            My journey through clubs, leadership roles, and event organization
          </p>
        </div>

        <div 
          ref={ref}
          className={`max-w-4xl mx-auto transition-opacity duration-1000 ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {events.map((event, index) => (
            <TimelineItem
              key={index}
              date={event.date}
              title={event.title}
              description={event.description}
              isLast={index === events.length - 1}
              isLeft={index % 2 === 0}
              icon={event.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clubs;