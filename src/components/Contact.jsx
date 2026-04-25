import React from 'react'
import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id='Contact'>
    <div className='first'>
        <div className='head'>
            <h1>Contact ME</h1>
            <h2>Tell me about your next project</h2>
        </div>
        <div className='btn-contact'>
            <button>copy Email</button>
        </div>
        <div className='second'>
            <div className='email'>
                <h3>omkar30rj@gmail.com</h3>
            </div>

            <div className='socialmedia'>
                <li>
                    <ul>Linkedin <ArrowUpRight /></ul>
                    <ul>Github</ul>
                    <ul>Instagram</ul>
                </li>
            </div>
            <div className='talk'>
                <li>
                    <ul>Linkedin</ul>
                    <ul>Github</ul>
                    <ul>Instagram</ul>
                </li>


            </div>


        </div>



      
    </div>
</section>
  )
}

export default Contact
