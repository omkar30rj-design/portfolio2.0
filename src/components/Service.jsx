import React from 'react';
import { Code2, Server, Database, Cloud, Wrench } from 'lucide-react';

const categories = [
  {
    title: "Frontend",
    skillsCount: 7,
    icon: Code2,
    color: "#00e5ff", // cyan
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML/CSS", level: 95 },
      { name: "Bootstrap", level: 85 },
      { name: "WordPress", level: 92 },
    ]
  },
  {
    title: "Backend",
    skillsCount: 9,
    icon: Server,
    color: "#00e676", // green
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 85 },
      { name: "Java", level: 75 },
      { name: "JavaScript (Core)", level: 90 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 90 },
    ]
  },
  {
    title: "Database",
    skillsCount: 6,
    icon: Database,
    color: "#ffca28", // gold
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 82 },
      { name: "MySQL", level: 88 },
      { name: "Supabase", level: 85 },
      { name: "SQL (General)", level: 88 },
    ]
  },
  {
    title: "DevOps",
    skillsCount: 11,
    icon: Cloud,
    color: "#00e676", // green
    skills: [
      { name: "Docker", level: 90 },
      { name: "AWS", level: 85 },
      { name: "Bash Scripting", level: 85 }

    ]
  },
  {
    title: "Tools",
    skillsCount: 10,
    icon: Wrench,
    color: "#00e5ff", // cyan
    skills: [
      { name: "Git", level: 95 },
      { name: "VS Code", level: 95 },
      { name: "GitHub", level: 95 },
      { name: "Postman", level: 90 },
      { name: "Figma", level: 85 },
      { name: "Canva", level: 88 },
      { name: "CapCut", level: 85 },
      { name: "Filmora", level: 83 },
    ]
  },
  {
    title: "SoftSkills",
    skillsCount: 6,
    icon: Code2,
    color: "#00e676", // green
    skills: [
      { name: "Communication", level: 92 },
      { name: "Problem Solving", level: 95 },
      { name: "Critical Thinking", level: 90 },
      { name: "Time Management", level: 88 },
      { name: "Adaptability", level: 90 },
      { name: "Learning Mindset", level: 95 },
    ]
  },
  {
    title: "Leadership",
    skillsCount: 4,
    icon: Code2,
    color: "#ffca28", // gold
    skills: [
      { name: "Team Leadership", level: 90 },
      { name: "Event Management", level: 92 },
      { name: "Community Building", level: 90 },
      { name: "Decision Making", level: 88 },
    ]
  },
  {
    title: "Creativity",
    skillsCount: 3,
    icon: Code2,
    color: "#00e676", // green
    skills: [
      { name: "Content Creation", level: 95 },
      { name: "Storytelling", level: 90 },
      { name: "Visual Design Sense", level: 88 },
    ]
  },
  {
    title: "Productivity",
    skillsCount: 4,
    icon: Code2,
    color: "#00e5ff", // cyan
    skills: [
      { name: "Discipline", level: 95 },
      { name: "Consistency", level: 94 },
      { name: "Focus", level: 93 },
      { name: "Workflow Optimization", level: 90 },
    ]
  }
];

const Service = () => {
  return (
    <section id="Service" className="w-full bg-[var(--darker-bg)] px-4 py-24 sm:px-6 lg:px-8" style={{display:'flex',justifyContent:'center', lineHeight:'2.3', paddingTop:'100px',paddingBottom:'200px'}}>
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto w-full text-center" style={{ marginBottom: '80px' }}>
          <p
            className="mb-3 flex justify-center align-center text-sm uppercase tracking-[0.35em] text-[var(--accent)]"
            style={{ fontFamily: 'manrope, sans-serif' }}
          >
            My Expertise
          </p>
          <h2
            className="text-4xl flex justify-center align-center text-[var(--textmain)] sm:text-5xl"
            style={{ fontFamily: 'macha-regular, sans-serif' }}
          >
            Skills & Services
          </h2>
        </div>

        <div className="w-full border-white/5 mx-auto justify-center p-[10px]" >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full pb-10" >
                {categories.map((category, idx) => {
                    const Icon = category.icon;
                    return (
                        <div
                        key={idx}
                        className="flex flex-col h-full rounded-3xl bg-[#0a0a0a] p-6 shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:p-8"
                        style={{
                            border: `1px solid ${category.color}25`,
                            boxShadow: `0 10px 40px -10px rgba(0,0,0,0.5), 0 0 20px -10px ${category.color}30`
                        }}
                        >
                        <div className="mb-8 flex items-center gap-0.5" style={{padding:'12px'}}>
                            <div
                            className="flex h-12 w-12 flex-shrink-1 items-center justify-center align-center rounded-2xl"
                            style={{ backgroundColor: `${category.color}15`, display:'flex', margin:'3px', marginBottom:'12px' }}
                            >
                            <Icon color={category.color} size={25} strokeWidth={1.5}/>
                            </div>
                            <div>
                            <h3 className="text-[18px] font-bold text-white tracking-[1.4px] leading-[1px]" style={{ fontFamily: 'manrope, sans-serif', padding:'8px' }}>
                                {category.title}
                            </h3>
                            <p className="text-sm text-gray-400 mt-1 flex justify-left align-center" style={{ fontFamily: 'manrope, sans-serif' , paddingLeft:'10px'}}>
                                {category.skillsCount} skills
                            </p>
                            </div>
                        </div>

                        <div className=" " style={{padding:'20px'}}>
                            {category.skills.map((skill, skillIdx) => (
                            <div key={skillIdx} className="flex flex-col gap-2">
                                <div className="flex justify-between items-center text-[14px]" style={{ fontFamily: 'manrope, sans-serif' }}>
                                    <span className="font-semibold text-white/90 tracking-wide">{skill.name}</span>
                                    <span className="text-white/50 text-sm font-medium">{skill.level}%</span>
                                </div>
                                <div className="h-[4px] w-full overflow-hidden rounded-full bg-[#1a1a1a]">
                                    <div
                                        className="h-full rounded-full transition-all duration-1000 ease-out"
                                        style={{
                                            width: `${skill.level}%`,
                                            backgroundColor: category.color,
                                            boxShadow: `0 0 10px ${category.color}80`
                                        }}
                                    />
                                </div>
                            </div>
                            ))}
                        </div>
                        </div>
                    );
                })}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
