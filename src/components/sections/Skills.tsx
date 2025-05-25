import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, Monitor, Server, Palette, Lightbulb } from 'lucide-react';

const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skills = [
    {
      category: 'Programming',
      icon: <Code className="text-purple-500" />,
      items: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 80 }
      ]
    },
    {
      category: 'AI & ML',
      icon: <Brain className="text-purple-500" />,
      items: [
        { name: 'Machine Learning', level: 85 },
        { name: 'NLP', level: 80 },
        { name: 'Computer Vision', level: 75 }
      ]
    },
    {
      category: 'Development',
      icon: <Monitor className="text-purple-500" />,
      items: [
        { name: 'Frontend', level: 90 },
        { name: 'UI/UX Design', level: 85 },
        { name: 'Responsive Design', level: 90 }
      ]
    },
    {
      category: 'Cloud',
      icon: <Server className="text-purple-500" />,
      items: [
        { name: 'AWS', level: 80 },
        { name: 'Docker', level: 75 },
        { name: 'CI/CD', level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-black/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-400">
            Technologies and tools I work with
          </p>
        </div>

        <div 
          ref={ref} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skillGroup, groupIndex) => (
            <div 
              key={groupIndex}
              className={`card transform transition-all duration-500 ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${groupIndex * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-2 bg-purple-500/10 rounded-xl mr-3">
                  {skillGroup.icon}
                </div>
                <h3 className="text-lg font-semibold">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-purple-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-1.5">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: inView ? `${skill.level}%` : '0%',
                          transitionDelay: `${(groupIndex * 100) + (skillIndex * 100)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;