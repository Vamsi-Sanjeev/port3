import React from 'react';
import { Code, Users, Brain, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-400">
            A glimpse into who I am and what drives me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6">
                I'm a self-driven and passionate B.Tech student from Mohan Babu University, specializing in AI and modern development practices. My focus lies in creating innovative solutions that combine technical excellence with user-centric design.
              </p>
              <p className="text-gray-300">
                I specialize in blending <span className="text-purple-400">user-centric design with AI-driven applications</span>, focusing on healthcare and mental well-being. Currently exploring <span className="text-purple-400">prompt engineering</span>, <span className="text-purple-400">cloud services (AWS)</span>, and <span className="text-purple-400">creative front-end development</span>.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="card">
                <div className="flex items-center mb-2">
                  <Code size={20} className="text-purple-500 mr-2" />
                  <h3 className="font-semibold">Technical Skills</h3>
                </div>
                <p className="text-sm text-gray-400">
                  Python, React, UI/UX Design, Cloud Computing
                </p>
              </div>
              
              <div className="card">
                <div className="flex items-center mb-2">
                  <Brain size={20} className="text-purple-500 mr-2" />
                  <h3 className="font-semibold">AI Focus</h3>
                </div>
                <p className="text-sm text-gray-400">
                  Machine Learning, NLP, Computer Vision
                </p>
              </div>
              
              <div className="card">
                <div className="flex items-center mb-2">
                  <Users size={20} className="text-purple-500 mr-2" />
                  <h3 className="font-semibold">Leadership</h3>
                </div>
                <p className="text-sm text-gray-400">
                  Team Management, Project Planning
                </p>
              </div>
              
              <div className="card">
                <div className="flex items-center mb-2">
                  <Lightbulb size={20} className="text-purple-500 mr-2" />
                  <h3 className="font-semibold">Innovation</h3>
                </div>
                <p className="text-sm text-gray-400">
                  Problem Solving, Creative Solutions
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-purple-500/30 mx-auto">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 right-1/2 md:right-0 transform translate-x-1/2 md:translate-x-0 bg-white/5 backdrop-blur-md p-4 rounded-2xl">
                <div className="text-purple-500 font-bold">B.Tech Student</div>
                <div className="text-sm text-gray-400">Mohan Babu University</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;