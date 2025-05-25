import React from 'react';
import { ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center pt-16 pb-8 px-4 relative overflow-hidden"
    >
      {/* Animated cosmic elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-pink-500/10 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full border border-purple-500/10 animate-[spin_30s_linear_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-pink-500/10 animate-[spin_20s_linear_infinite_reverse]"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-6 py-2 mb-8 rounded-full bg-white/5 backdrop-blur-sm animate-fade-in border border-white/10">
            <span className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
              Innovating with Code & Design
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up">
            Create <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text animate-glow">Amazing</span>
            <br />
            Experiences
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            B.Tech student passionate about building innovative AI solutions and
            leading tech initiatives that make a difference.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a 
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary group"
            >
              Explore Projects
              <ExternalLink size={20} className="inline-block ml-2 transform transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {['Python', 'AI', 'UI/UX', 'React', 'Cloud'].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-white/5 text-sm backdrop-blur-sm hover:bg-white/10 transition-colors border border-white/10"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;