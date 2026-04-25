import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({ projects }) => {
  return (
    <section id='Project' className="w-full" style={{paddingBottom:'200px'}}>
       <div className="mx-auto w-full text-center" style={{ marginBottom: '20px', marginTop: '20px', paddingTop:'100px', paddingBottom:'50px'}}>
          <p
            className="mb-3 text-sm uppercase tracking-[0.35em] text-[var(--accent)]"
            style={{ fontFamily: 'manrope, sans-serif' }}
          >
            Featured Works
          </p>
           <h2
            className="text-4xl text-[var(--textmain)] sm:text-5xl"
            style={{ fontFamily: 'macha-regular, sans-serif' }}
          >
            Projects
          </h2>
          </div>
      <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:justify-center lg:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
     <div className=""></div>
      
    </section>
  );
};

export default Projects;
