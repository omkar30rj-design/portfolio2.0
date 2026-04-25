import React, { useState } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import {
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  FolderKanban,
  Link2,
  Mail,
  MapPin,
  MonitorCog,
  Rocket,
  Video,
} from 'lucide-react'

import profileImage from '../assets/imgs/Profile.png'
import backgroundTexture from '../assets/imgs/Background.svg'

const tabs = [
  {
    key: 'developer',
    label: 'Developer',
    icon: Code2,
    title: 'Developer Mode',
    description: 'Building beautiful, functional interfaces',
    tags: ['React', 'Next.js', 'Tailwind'],
    focus: 'Frontend & Full Stack',
  },
  {
    key: 'devops',
    label: 'DevOps',
    icon: MonitorCog,
    title: 'DevOps Mode',
    description: 'Automating, scaling, and securing infrastructure',
    tags: ['Docker', 'AWS'],
    focus: 'Infrastructure & Automation',
  },
  {
    key: 'founder',
    label: 'Founder',
    icon: Rocket,
    title: 'Founder Mode',
    description: 'Turning ideas into scalable products',
    tags: ['Aptive', 'Gurkha-AI'],
    focus: 'Product & Business Development',
  },
  {
    key: 'creator',
    label: 'Creator',
    icon: Video,
    title: 'Creator Mode',
    description: 'Sharing knowledge and building community',
    tags: ['Content Creation', 'Technical Writing'],
    focus: 'Education & Tech Community',
  },
]

const stats = [
  {
    label: 'Projects',
    value: '15+',
    icon: FolderKanban,
  },
  {
    label: 'Clients',
    value: 'Open for Work',
    icon: BriefcaseBusiness,
  },
  {
    label: 'Repos / Contributions',
    value: '20+',
    icon: Code2,
  },
]

const About = () => {
  const [activeTab, setActiveTab] = useState('developer')

  const currentTab = tabs.find((tab) => tab.key === activeTab) ?? tabs[0]

  return (
    <section
      id="About"
      className="relative overflow-hidden bg-[var(--darker-bg)] px-5 py-16 text-[var(--text)] sm:px-6 lg:px-8 lg:py-24" style={{display:'flex', justifyContent:'center',paddingTop:'110px'}}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[90]"
        style={{
          backgroundImage: `url(${backgroundTexture})`,
          backgroundPosition: 'center center',
          backgroundRepeat:'no-repeat',
          backgroundSize: 'cover',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%)',
          maskImage: 'linear-gradient(to bottom, transparent, black 15%)'
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(255,154,60,0.16),transparent_62%)] opacity-0" />
      <div className="pointer-events-none absolute left-1/2 top-40 h-64 w-64 -translate-x-1/2 rounded-full bg-[#39170c] opacity-30 blur-3xl" />

      <div className="relative mx-10 max-w-10xl ">
        <div className="w-100%">
          <div className="mx-auto w-full text-center" style={{ marginBottom: '20px', marginTop: '20px' }}>
          <p
            className="mb-3 text-sm uppercase tracking-[0.35em] text-[var(--accent)]"
            style={{ fontFamily: 'manrope, sans-serif' }}
          >
            Profile System
          </p>
          <h2
            className="text-4xl text-[var(--textmain)] sm:text-5xl"
            style={{ fontFamily: 'macha-regular, sans-serif' }}
          >
            About Me
          </h2>
          <div className="mt-4 rounded-full bg-[#39170c] shadow-[0_0_24px_rgba(255,154,60,0.45)]" />
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2 lg:items-start lg:justify-center lg:justify-items-center xl:gap-8">
          <Motion.article
            initial={{ opacity: 0, y: 18 }}F
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="relative flex  w-full max-w-[480px] overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(10,10,10,0.96),rgba(0,0,0,0.98))] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_24px_80px_rgba(0,0,0,0.45)] sm:p-7 lg:pl-10"
          >
            <div className="pointer-events-none absFolute inset-0 opacity-[0.08]">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage: `url(${backgroundTexture})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              />
            </div>
            <div className="pointer-events-none absolute -right-12 top-8 h-36 w-36 rounded-full bg-[#39170c] blur-3xl" />
            <div className="pointer-events-none absolute -left-10 bottom-8 h-28 w-28 rounded-full bg-[#39170c] opacity-100 blur-3xl" />

            <div className="relative flex w-full flex-col gap-10 h-[340px]">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-5" style={{padding:'10px'}}>
                  <div className="absolute inset-0 scale-110 rounded-full bg-[#39170c] blur-2xl"  />
                  <img
                    src={profileImage}
                    alt="Omkar Jadhav"
                    className="relative h-32 w-32 rounded-full border border-white/10 object-cover object-top shadow-[0_0_30px_rgba(255,154,60,0.2)] sm:h-36 sm:w-36"
                  />
                  <span className="absolute bottom-1 right-1 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--accent)] text-black shadow-[0_0_18px_rgba(255,154,60,0.55)]">
                    <BadgeCheck size={20} />
                  </span>
                </div>

                <h3
                  className="text-2xl text-[var(--textmain)] sm:text-3xl"
                  style={{ fontFamily: 'macha-regular, sans-serif' }}
                >
                  Omkar Jadhav
                </h3>
                <p
                  className="mt-2 text-base leading-6 text-white/70"
                  style={{ fontFamily: 'manrope, sans-serif' }}
                >
                  Frontend Engineer & Full Stack Builder
                </p>
              </div>

              <div
                className="flex flex-col items-center justify-center rounded-2xl border border-white/8 bg-white/[0.03] p-5 sm:p-6"
                style={{ fontFamily: 'manrope, sans-serif' }}
              >
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center gap-x-3 text-sm leading-6 text-white/80 sm:text-base">
                    <MapPin className="text-[var(--accent)] shrink-0" size={18} />
                    <span>Nashik, Maharashtra, India</span>
                  </div>

                  <div className="flex items-center gap-x-3 text-sm leading-6 text-white/80 sm:text-base">
                    <Mail className="text-[var(--accent)] shrink-0" size={18} />
                    <a
                      href="mailto:omkar30rj@gmail.com?subject=Portfolio%20Inquiry&body=Hi%2C%20I%20saw%20your%20portfolio..."
                      target="_blank"
                      className="transition-colors duration-200 hover:text-[var(--textmain)]"
                    >
                      omkar30rj@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center gap-x-3 text-sm leading-6 text-white/80 sm:text-base">
                    <Link2 className="text-[var(--accent)] shrink-0" size={18} />
                    <a
                      href="https://www.linkedin.com/in/omkarjadhav24"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-200 hover:text-[var(--textmain)]"
                    >
                      Connect via LinkedIn
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </Motion.article>

            <div className="flex h-full w-full max-w-[860px]   flex-col gap-7">
            <Motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: 0.05, ease: 'easeOut' }}
              className="w-full rounded-2xl border border-white/10 bg-[rgba(10,10,10,0.94)] px-6 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:px-7 sm:py-7" style={{padding:'13px'}}
            >
              <p
                className="mb-7 pl-2  text-left text-white/60 sm:text-lg" 
                style={{ fontFamily: 'manrope, sans-serif', fontSize:'15px',paddingBottom:'10px' }}
              >
                View my profile as:
              </p>

              <div className="grid grid-cols-4 gap-2 px-1 sm:gap-4 sm:px-6">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  const isActive = tab.key === activeTab

                  return (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setActiveTab(tab.key)}
                      className={`group inline-flex min-h-9 w-full items-center justify-center gap-1.5 rounded-lg border px-1.5 py-2 text-xs font-medium transition-all duration-300 sm:min-h-10 sm:gap-2 sm:px-2 sm:py-2.5 sm:text-sm ${
                        isActive
                          ? 'border-[var(--accent)] bg-[var(--accent)] text-black shadow-[0_0_20px_rgba(255,154,60,0.45)]'
                          : 'border-white/5 bg-white/[0.05] text-white/60 hover:border-white/10 hover:bg-white/[0.08] hover:text-[var(--textmain)]'
                      }`}
                      style={{ fontFamily: 'manrope, sans-serif' }}
                    >
                      <Icon
                        size={18}
                        className={
                          isActive
                            ? 'text-black'
                            : 'text-white/55 transition-colors duration-300 group-hover:text-[var(--accent)]'
                        }
                      />
                      <span>{tab.label}</span>
                    </button>
                  )
                })}
              </div>
            </Motion.div>

            <AnimatePresence mode="wait">
              <Motion.div
                key={currentTab.key}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="rounded-2xl border border-[rgba(255,154,60,0.22)] bg-[rgba(10,10,10,0.95)] px-6 py-6 shadow-[0_0_0_1px_rgba(255,154,60,0.06),0_24px_70px_rgba(0,0,0,0.38)] sm:px-7 sm:py-7"
              >
                <div className="space-y-5 text-center">
                <h3
                  className="text-2xl leading-none text-[var(--accent)] sm:text-[1.85rem]"
                  style={{ fontFamily: 'macha-regular, sans-serif', padding:'10px' }}
                >
                  {currentTab.title}
                </h3>

                <p
                  className="mx-auto max-w-xl text-sm leading-8 text-white/60 sm:text-base sm:leading-9"
                  style={{ fontFamily: 'manrope, sans-serif'}}
                >
                  {currentTab.description}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  {currentTab.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center  rounded-full border border-[rgba(255,154,60,0.18)] bg-[rgba(249,109,0,0.14)]   leading-none text-[var(--textmain)] sm:text-sm shadow-[inset_0_0_0_1px_rgba(255,154,60,0.04)]"
                      style={{ fontFamily: 'manrope, sans-serif',display:'flex', width:'100px', justifyContent:'center',fontSize:'13px', whiteSpace:'nowrap',gap:'20px',padding:'3px 6px 3px 6px'  }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="h-px bg-white/12" />

                <p
                  className=" leading-8 text-white/60 sm:text-base sm:leading-9"
                  style={{ fontFamily: 'manrope, sans-serif',fontSize:'15px' }}
                >
                  Focus:{' '}
                  <span className="font-semibold text-[var(--textmain)]">
                    {currentTab.focus}
                  </span>
                </p>
                </div>
              </Motion.div>
            </AnimatePresence>

            <Motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
              className="px-0.5 text-[1.05rem] leading-8 text-white/55 sm:text-[1.1rem]"
              style={{ fontFamily: 'manrope, sans-serif' }}
            >
              Building systems that feel polished, scale thoughtfully, and ship
              with intent.
            </Motion.p>

            <div className="grid auto-rows-fr gap-5 sm:grid-cols-3">
              {stats.map((stat, index) => {
                const Icon = stat.icon

                return (
                  <Motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.08 + index * 0.06,
                      ease: 'easeOut',
                    }}
                    className="flex h-full min-h-[142px] w-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-[rgba(10,10,10,0.94)] px-6 py-5 text-center shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <Icon className="text-[var(--accent)]" size={18} />
                      <div className="h-2.0 w-3.0 rounded-full bg-[var(--accent)] shadow-[0_0_14px_rgba(255,154,60,0.6)]" />
                    </div>

                    <div
                      className="text-2xl font-semibold text-[var(--accent)] sm:text-[2.1rem]"
                      style={{ fontFamily: 'macha-regular, sans-serif',fontSize:'25px' }}
                    >
                      {stat.value}
                    </div>

                    <div
                      className="mt-1 text-sm leading-6 text-white/55 sm:text-base"
                      style={{ fontFamily: 'manrope, sans-serif' }}
                    >
                      {stat.label}
                    </div>
                  </Motion.div>
                )
              })}
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
