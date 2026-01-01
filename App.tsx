import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import { 
  personalInfo,
  education, 
  researchInterests, 
  researchProjects, 
  publications, 
  skills, 
  professionalExperience,
  extracurricularActivities,
  testScores, 
  references,
  aboutText,
  personalDetails
} from './data';
import { 
  GraduationCap, 
  BookOpen, 
  Microscope, 
  Award, 
  Code, 
  Users, 
  Calendar,
  Mail,
  User,
  Briefcase,
  Music,
  ExternalLink
} from 'lucide-react';

// Padding helper to account for the fixed navbar height which varies on mobile vs desktop
const PageWrapper = ({ children }: { children?: React.ReactNode }) => (
  <div className="pt-24 md:pt-32 min-h-screen animate-in fade-in duration-500 pb-24">
    {children}
  </div>
);

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Hero />;
      
      case 'about':
        return (
          <PageWrapper>
             <Section id="about" className="bg-white rounded-3xl shadow-sm border border-slate-100 p-10">
              <div className="grid xl:grid-cols-4 gap-16">
                  <div className="xl:col-span-1">
                      <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-slate-50 aspect-[3/4] max-w-sm mx-auto xl:max-w-none">
                        {/* PLEASE ENSURE YOU HAVE A FILE NAMED 'profile.jpg' IN YOUR PUBLIC FOLDER */}
                        <img 
                          src="./profile.jpg" 
                          alt="Tanmoy Goswami" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                  </div>
                  <div className="xl:col-span-3">
                      <h2 className="text-3xl font-bold text-slate-900 mb-6">About Me</h2>
                      <div className="h-1.5 w-24 bg-academic-blue mb-10 rounded-full"></div>
                      <div className="text-slate-600 leading-relaxed text-lg mb-12 max-w-6xl space-y-6">
                        {aboutText.split('\n\n').map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>

                      <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm max-w-6xl">
                        <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-3">
                           <User className="text-academic-blue h-6 w-6" />
                           Personal Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
                            <div className="border-b border-slate-100 pb-3">
                                <span className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Passport</span>
                                <span className="text-slate-700 font-medium text-lg">{personalDetails.passport}</span>
                            </div>
                            <div className="border-b border-slate-100 pb-3">
                                <span className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Nationality</span>
                                <span className="text-slate-700 font-medium text-lg">{personalDetails.nationality}</span>
                            </div>
                             <div className="border-b border-slate-100 pb-3">
                                <span className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Date of Birth</span>
                                <span className="text-slate-700 font-medium text-lg">{personalDetails.dob}</span>
                            </div>
                             <div className="border-b border-slate-100 pb-3">
                                <span className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Gender</span>
                                <span className="text-slate-700 font-medium text-lg">{personalDetails.gender}</span>
                            </div>
                             <div className="border-b border-slate-100 pb-3">
                                <span className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Place of Birth</span>
                                <span className="text-slate-700 font-medium text-lg">{personalDetails.birthPlace}</span>
                            </div>
                             <div className="border-b border-slate-100 pb-3">
                                <span className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Phone</span>
                                <span className="text-slate-700 font-medium text-lg">{personalDetails.phone}</span>
                            </div>
                            <div className="md:col-span-2 lg:col-span-3 pt-2">
                                <span className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Address</span>
                                <span className="text-slate-700 font-medium text-lg">{personalDetails.address}</span>
                            </div>
                        </div>
                      </div>
                  </div>
              </div>
            </Section>
          </PageWrapper>
        );

      case 'education':
        return (
           <PageWrapper>
            <Section id="education" title="Education">
              <div className="space-y-10">
                {education.map((edu, idx) => (
                  <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 hover:border-academic-blue/30 hover:shadow-md transition-all">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                      <div className="space-y-3">
                        <h3 className="text-3xl font-bold text-slate-900 leading-tight">{edu.degree}</h3>
                        <p className="text-xl text-academic-blue font-medium">{edu.institution}</p>
                      </div>
                      <div className="mt-6 md:mt-0 flex items-center self-start text-slate-600 bg-slate-100 px-5 py-2 rounded-full text-base font-medium">
                        <Calendar size={18} className="mr-2" />
                        {edu.period}
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <div className="flex items-start gap-5">
                            <div className="bg-white p-3 rounded-xl shadow-sm text-academic-blue">
                                <GraduationCap size={28} />
                            </div>
                            <div>
                                <span className="block text-base font-bold text-slate-900 uppercase tracking-wide mb-1">Thesis Title</span>
                                <p className="text-slate-700 italic text-base leading-relaxed">{edu.thesis}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-5">
                             <div className="bg-white p-3 rounded-xl shadow-sm text-academic-blue">
                                <Users size={28} />
                            </div>
                            <div>
                                <span className="block text-base font-bold text-slate-900 uppercase tracking-wide mb-1">Supervisor</span>
                                <p className="text-slate-700 text-base font-medium">{edu.supervisor}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex gap-8 text-base text-slate-600">
                        <div className="bg-slate-50 px-6 py-3 rounded-xl border border-slate-100">
                            <span className="font-semibold text-slate-900 mr-2">HSC:</span> GPA 5.00 / 5.00
                        </div>
                        <div className="bg-slate-50 px-6 py-3 rounded-xl border border-slate-100">
                            <span className="font-semibold text-slate-900 mr-2">SSC:</span> GPA 5.00 / 5.00
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </PageWrapper>
        );

      case 'research':
        return (
           <PageWrapper>
            <Section id="interests" className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-slate-900">Research Interests</h2>
                <div className="h-1.5 w-32 bg-academic-blue mx-auto mt-5 rounded-full"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-5">
                {researchInterests.map((interest, idx) => (
                  <span key={idx} className="px-6 py-3 bg-white text-academic-blue font-semibold rounded-full shadow-sm border border-slate-200 hover:border-academic-blue hover:shadow hover:-translate-y-0.5 transition-all cursor-default text-base">
                    {interest}
                  </span>
                ))}
              </div>
            </Section>

            <Section id="research" title="Research Projects">
                <div className="flex flex-col gap-12">
                    {researchProjects.map((project, idx) => (
                        <div key={idx} className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                            <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-5">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                                    <p className="text-slate-500 flex items-center font-medium text-base">
                                        <Users size={18} className="mr-2 text-academic-blue"/> 
                                        Supervisor: <span className="text-slate-700 ml-2">{project.supervisor}</span>
                                    </p>
                                </div>
                                <span className="inline-flex items-center px-5 py-2 rounded-full text-base font-bold bg-academic-light text-academic-blue border border-academic-blue/10 whitespace-nowrap shrink-0">
                                    {project.period}
                                </span>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-10 relative flex-grow">
                                {/* Divider line for desktop */}
                                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 -ml-px"></div>

                                <div>
                                    <h4 className="flex items-center text-base font-bold text-slate-900 uppercase tracking-wider mb-5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-red-400 mr-3"></span>
                                        Key Focus
                                    </h4>
                                    <p className="text-slate-700 leading-relaxed text-base">
                                      {project.focus}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="flex items-center text-base font-bold text-slate-900 uppercase tracking-wider mb-5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 mr-3"></span>
                                        Application
                                    </h4>
                                    <p className="text-slate-700 leading-relaxed text-base">
                                      {project.application}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-slate-100">
                                <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                                    <span className="font-bold text-slate-900 text-sm uppercase tracking-wide shrink-0 mt-0.5">Tools & Skills:</span>
                                    <span className="text-slate-600 text-base font-medium leading-relaxed">{project.tools}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
          </PageWrapper>
        );

      case 'publications':
        return (
          <PageWrapper>
            <Section id="publications" title="Publications">
                <div className="space-y-8">
                    {publications.map((pub, idx) => (
                        <div key={idx} className="group bg-white p-10 rounded-2xl border border-slate-200 hover:border-academic-blue/40 hover:shadow-lg transition-all relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-academic-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col sm:flex-row gap-8 justify-between sm:items-start">
                                    <div className="flex-grow">
                                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-academic-blue transition-colors mb-3">
                                            {pub.title}
                                        </h3>
                                        <p className="text-slate-500 italic mb-3 text-base">
                                          {pub.authors}
                                        </p>
                                        <div className="flex items-start gap-2.5 text-slate-600 font-medium mb-6 text-base">
                                           <BookOpen size={20} className="mt-1 shrink-0" />
                                           <span>{pub.venue}</span>
                                        </div>
                                        {pub.description && (
                                            <div className="relative pl-6 border-l-4 border-academic-blue/20">
                                                <p className="text-slate-700 text-base leading-relaxed">
                                                    {pub.description}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <span className={`shrink-0 self-start px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide border ${
                                      pub.status === 'Published' 
                                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                                        : 'bg-amber-50 text-amber-700 border-amber-200'
                                    }`}>
                                        {pub.status}
                                    </span>
                                </div>
                                
                                {pub.link && (
                                  <div className="mt-3">
                                     <a href={pub.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-academic-blue hover:text-academic-dark font-semibold text-base">
                                       View Publication <ExternalLink size={18} className="ml-2" />
                                     </a>
                                  </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
          </PageWrapper>
        );

      case 'skills':
        return (
          <PageWrapper>
            <Section id="skills" title="Technical Skills">
                <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm mb-16">
                     <div className="flex flex-col gap-12">
                        {skills.map((group, idx) => (
                            <div key={idx}>
                                <h3 className="text-xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100 flex items-center gap-3">
                                    <span className="w-2 h-8 rounded-full bg-academic-blue"></span>
                                    {group.category}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {group.items.map((skill, i) => (
                                        <span key={i} className="px-4 py-2 bg-slate-50 hover:bg-white text-slate-700 hover:text-academic-blue text-base rounded-lg font-medium border border-slate-200 hover:border-academic-blue/30 transition-all shadow-sm cursor-default">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                     </div>
                </div>

                {/* Language Skills Subsection */}
                <div className="mt-16">
                   <div className="mb-10 flex items-center gap-5">
                    <h3 className="text-3xl font-bold text-slate-900">Language Skills</h3>
                    <div className="h-1.5 flex-grow bg-gradient-to-r from-academic-blue/50 to-transparent rounded-full"></div>
                  </div>
                  
                  <div className="w-full">
                      {/* IELTS Card */}
                      <div className="bg-gradient-to-br from-academic-dark to-slate-900 text-white p-12 rounded-[2rem] shadow-xl relative overflow-hidden group max-w-5xl">
                          <div className="relative z-10">
                              <div className="flex items-center gap-4 mb-10 opacity-90">
                                  <div className="p-2.5 bg-white/10 rounded-lg backdrop-blur-sm">
                                    <Award className="h-7 w-7" />
                                  </div>
                                  <span className="text-base font-bold tracking-widest uppercase text-blue-200">Standardized Testing</span>
                              </div>
                              
                              <div className="mb-12">
                                <h3 className="text-4xl font-bold mb-3">{testScores.exam}</h3>
                                <p className="text-blue-300 font-medium text-lg">{testScores.date}</p>
                              </div>
                              
                              <div className="flex items-end gap-8 mb-12">
                                  <div className="text-7xl font-bold tracking-tighter">{testScores.overall}</div>
                                  <div className="text-base text-blue-200 font-semibold uppercase tracking-wider mb-2 pb-1 border-b border-blue-500/50">Overall Band Score</div>
                              </div>

                              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                  {testScores.breakdown.map((b, i) => (
                                      <div key={i} className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white/5 px-6 py-4 rounded-xl border border-white/5">
                                          <span className="text-blue-100 text-base">{b.skill}</span>
                                          <span className="font-bold text-xl mt-1 md:mt-0">{b.score}</span>
                                      </div>
                                  ))}
                              </div>
                          </div>
                          {/* Decorative background */}
                          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-600/30 transition-colors duration-1000"></div>
                          <div className="absolute top-10 right-10 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
                      </div>
                  </div>
                </div>
            </Section>
          </PageWrapper>
        );

      case 'experience':
        return (
          <PageWrapper>
            <Section id="experience" title="Experience">
                <div className="flex flex-col gap-20">
                    {/* Professional Experience */}
                    <div className="w-full">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="p-3 bg-academic-blue text-white rounded-xl">
                              <Briefcase size={28}/>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-wide">
                                Professional Experience
                            </h3>
                        </div>
                        
                        <div className="space-y-8 border-l-2 border-slate-200 ml-5 pl-10 relative">
                            {professionalExperience.map((exp, idx) => (
                                <div key={idx} className="relative group">
                                    <div className="absolute -left-[45px] top-2 h-6 w-6 rounded-full bg-white border-[5px] border-academic-blue transition-all group-hover:scale-110"></div>
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1 mb-1">
                                      <h4 className="text-xl font-bold text-slate-900">{exp.role}</h4>
                                      <span className="text-sm text-slate-600 font-bold font-mono bg-slate-100 px-3 py-1 rounded-lg border border-slate-200 shrink-0 whitespace-nowrap">
                                        {exp.period}
                                      </span>
                                    </div>
                                    <p className="text-academic-blue font-medium text-lg">{exp.organization}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Extracurricular Activities */}
                    <div className="w-full">
                         <div className="flex items-center gap-4 mb-10">
                            <div className="p-3 bg-academic-blue text-white rounded-xl">
                              <Music size={28}/>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-wide">
                                Extracurricular Activities
                            </h3>
                        </div>
                         <div className="flex flex-col gap-5">
                            {extracurricularActivities.map((act, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-2">
                                      <h4 className="font-bold text-slate-900 text-xl">{act.role}</h4>
                                      <span className="text-sm font-bold font-mono text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 shrink-0 whitespace-nowrap">{act.period}</span>
                                    </div>
                                    <p className="text-slate-600 font-medium text-base">{act.organization}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
          </PageWrapper>
        );

      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-academic-blue/20 selection:text-academic-dark flex flex-col font-sans">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-grow w-full max-w-[100vw] overflow-x-hidden">
        {renderContent()}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-16 text-center text-sm mt-auto border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-medium text-slate-300 text-base">&copy; {new Date().getFullYear()} {personalInfo.name}</p>
          <p className="mt-3 text-slate-500 text-base">All Academic Rights Reserved.</p>
          <div className="mt-8 flex justify-center gap-3 text-sm text-slate-600">
             <span>Built with React</span>
             <span>•</span>
             <span>TypeScript</span>
             <span>•</span>
             <span>Tailwind CSS</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;