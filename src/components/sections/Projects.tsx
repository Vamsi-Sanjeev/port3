import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Brain, Activity, Heart } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects = [
    {
      id: 1,
      title: 'AI Healthcare Platform',
      description: 'An AI-powered healthcare platform with symptom analysis and personalized recommendations.',
      image: 'https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg',
      tech: ['Python', 'React', 'TensorFlow', 'AWS'],
      category: 'ai',
      icon: <Activity size={20} className="text-purple-500" />,
      github: 'https://github.com/yourusername/ai-healthcare',
      demo: 'https://ai-healthcare-demo.netlify.app'
    },
    {
      id: 2,
      title: 'Mental Health App',
      description: 'Mental health tracking app with mood analysis and professional support.',
      image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg',
      tech: ['React Native', 'Node.js', 'MongoDB'],
      category: 'health',
      icon: <Heart size={20} className="text-pink-500" />,
      github: 'https://github.com/yourusername/mental-health-app',
      demo: 'https://mental-health-demo.netlify.app'
    },
    {
      id: 3,
      title: 'AI Learning Platform',
      description: 'Interactive platform for learning AI and machine learning concepts.',
      image: 'https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg',
      tech: ['Python', 'Django', 'React', 'Docker'],
      category: 'ai',
      icon: <Brain size={20} className="text-purple-500" />,
      github: 'https://github.com/yourusername/ai-learning',
      demo: 'https://ai-learning-demo.netlify.app'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Explore my latest work and technical projects
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {['all', 'ai', 'health'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                    : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`card group transform transition-all duration-500 ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2">
                    {project.icon}
                    <h3 className="text-lg font-bold">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-500 hover:text-purple-400 text-sm font-medium flex items-center gap-1 group"
                >
                  <ExternalLink size={16} />
                  <span className="group-hover:underline">Live Demo</span>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 text-sm font-medium flex items-center gap-1 group"
                >
                  <Github size={16} />
                  <span className="group-hover:underline">Source</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;