import React from 'react';
import { Mail, Linkedin, FileText, Globe, ExternalLink, BookOpen } from 'lucide-react';
import { personalInfo } from '../data';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-academic-blue/5 rounded-bl-full -z-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-slate-100 rounded-tr-full -z-10 blur-2xl"></div>

      <div className="w-full max-w-[1800px] mx-auto px-8 sm:px-16 md:pl-40 lg:pl-60 pr-8 md:pr-24 py-12 flex flex-col items-start justify-center text-left">
        
        {/* Text Content */}
        <div className="space-y-10 animate-in slide-in-from-bottom-8 duration-700 flex flex-col items-start max-w-6xl">
          <div>
            <span className="block text-3xl md:text-4xl font-medium text-slate-600 mb-3">
              Hi, I'm
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-tight">
              {personalInfo.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-500 font-medium mt-6 mr-auto leading-relaxed">
              {personalInfo.subtitle}
            </h2>
          </div>

          <div className="flex flex-wrap justify-start gap-5">
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="flex items-center gap-3 px-8 py-4 bg-academic-blue text-white rounded-full text-lg font-medium hover:bg-academic-dark transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <Mail size={22} />
              Contact Me
            </a>
            <a 
              href={personalInfo.cvLink} 
              className="flex items-center gap-3 px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full text-lg font-medium hover:border-academic-blue hover:text-academic-blue transition-all hover:shadow-md"
            >
              <FileText size={22} />
              Download CV
            </a>
          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-wrap justify-start gap-8 text-slate-500">
            <a href={personalInfo.linkedin} className="hover:text-academic-blue transition-colors flex items-center gap-2 text-base" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a href={personalInfo.researchgate} className="hover:text-academic-blue transition-colors flex items-center gap-2 text-base" target="_blank" rel="noopener noreferrer">
              <Globe size={24} />
              <span className="hidden sm:inline">ResearchGate</span>
            </a>
             <a href={personalInfo.orcid} className="hover:text-academic-blue transition-colors flex items-center gap-2 text-base" target="_blank" rel="noopener noreferrer">
              <div className="w-6 h-6 flex items-center justify-center font-bold border border-current rounded-full text-[10px]">iD</div>
              <span className="hidden sm:inline">ORCID</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;