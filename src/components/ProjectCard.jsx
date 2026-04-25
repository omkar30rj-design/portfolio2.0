import React from 'react';
import { Folder, ExternalLink, Star } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative flex w-full max-w-sm flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[rgba(10,10,10,0.7)] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_0_20px_rgba(249,109,0,0.15)] sm:p-7">
      
      {/* Background Image Preview */}
      {project.image && (
        <div className="pointer-events-none absolute inset-0 z-0 opacity-5 transition-opacity duration-300 group-hover:opacity-10">
          <div 
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})`, padding:'10px' }}
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/80" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        
        {/* Header */}
        <div className="mb-6 flex items-center justify-between text-[var(--accent)] " style={{padding:'12px'}}>
          <Folder size={34} className="stroke-1" style={{lineHeight:'1.2'}}/>
          <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[var(--accent)]/10">
            <ExternalLink size={22} />
          </a>
        </div>

        {/* Body */}
        <div className="mb-8 flex-1" style={{padding:'10px', paddingTop:'2px'}}>
          <h3 
            className="mb-4 text-2xl font-bold text-[var(--textmain)] transition-colors group-hover:text-[var(--accent)]" 
            style={{ fontFamily: 'macha-regular, sans-serif', lineHeight:'1.5' }}
          >
            {project.title}
          </h3>
          <p 
            className="text-sm leading-6 text-[var(--textmain)] opacity-80" 
            style={{ fontFamily: 'manrope, sans-serif'}}
          >
            {project.description}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-auto h-6">
          <hr className="mb-5 border-white/10 transition-colors group-hover:border-[var(--text)]/30" />
          <div className="flex items-center justify-center gap-3 text-sm text-[var(--textmain)]">
            <span 
              className="rounded-full bg-[#f96d001a]  font-medium text-[var(--accent)]" 
              style={{ fontFamily: 'manrope, sans-serif', fontSize: '12px', padding:'3px' }}
            >
              {project.tag}
            </span>
            <div className="flex items-center gap-1.5 opacity-60 transition-opacity hover:opacity-100">
              <Star size={12} />
              <span style={{ fontFamily: 'manrope, sans-serif', fontSize:'12px' }}>5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
