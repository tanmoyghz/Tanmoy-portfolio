import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, className = "", children }) => {
  return (
    <section id={id} className={`w-full max-w-[1800px] mx-auto px-6 sm:px-12 md:px-20 py-12 ${className}`}>
      {title && (
        <div className="mb-12 flex items-center gap-5">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{title}</h2>
          <div className="h-1.5 flex-grow bg-gradient-to-r from-academic-blue/50 to-transparent rounded-full"></div>
        </div>
      )}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
        {children}
      </div>
    </section>
  );
};

export default Section;