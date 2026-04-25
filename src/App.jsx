import React, { Profiler } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

import About from './components/About'
import Projects from './components/Projects'
import Service from './components/Service'



const projectData = [
  {
    title: "NIVRA-Health App",
    image:"./src/assets/imgs/nivra.png",
    description: "Nivra is an AI-powered health intelligence app designed to go beyond traditional fitness tracking.",
    tag: "AI-powered mental health "
  },
  {
    title: "PAY KARO ",
    image:"./src/assets/imgs/Pay_karo.png",
    description: "PAY KARO is a next-generation UPI-powered fintech mobile application designed to simplify digital payments while providing deep financial insights and environmental impact tracking.",
    tag: "Pay Smart. Track Smart. Live Green."
  },
  {
    title: "Portfolio",
    image: "./src/assets/imgs/Portfolio.png",
    description: "This is my personal portfolio website built using HTML, CSS, and JavaScript",
    tag:"Portfolio website"
    
  }
];

const App = () => {
  
  return (

    <div className='parent' >
      <Navbar />
      <Hero />
      <About />
      <div className='cards-section'>
      <Projects projects={projectData} />
    </div>
    <Service />

    </div>
  )
}

export default App
