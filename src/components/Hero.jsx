import React from 'react'
import Profileimage from "../assets/imgs/Profile.png"

const Hero = () => {
  return (
    <section id="Home">
      <div className="hero-section">
        <div className="hero-left">
          <h1>Hi, I&apos; m Omkar</h1>
          <h1>
            Frontend <br />
            Developer
          </h1>
        </div>

        <div className="hero-visual">
          <div
            className="hero-glow absolute
                  w-[350px] h-[350px]
                  md:w-[500px] md:h-[500px]
                  bg-[#39170c]
                  rounded-full
                  blur-[70px]
                  md:blur-[100px]
                  z-0"
          ></div>
          <img
            className="profileimg relative z-10 mx-auto h-[280px] w-[220px] object-cover object-top md:h-[360px] md:w-[280px] lg:h-[470px] lg:w-[420px] [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
            src={Profileimage} alt="img"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
