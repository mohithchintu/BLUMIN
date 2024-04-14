import React from 'react'
import './About.css'
import { useState } from 'react';
import { FaArrowDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import team from '../assets/team.jpeg'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
const About = () => {
  let [s1,setS1]=useState(true)
  let [s2,setS2]=useState(true)
  let [s3,setS3]=useState(true)
  let [s4,setS4]=useState(true)
  let [s5,setS5]=useState(true)
  let function1=()=>{
    setS1(!s1)
  }
  let function2=()=>{
    setS2(!s2)
  }
  let function3=()=>{
    setS3(!s3)
  }
  let function4=()=>{
    setS4(!s4)
  }
  let function5=()=>{
    setS5(!s5)
  }
    return (
        <div>
                <h1 className='text-center mt-2 font-light font-serif tracking-wide f'>ABOUT</h1>
                <div className='n '>
                <div className='m text-center'><h3>BLUMIN — OVERVIEW</h3></div>
                <section className="text-800 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="w lg:w-full mx-auto flex  ">
      <img alt="ecommerce" className="im w-2/5  h-1/2 object-cover object-center rounded" src={team}  />
        <p className="leading-relaxed w-2/5 rl">Connecting academia with industry to drive innovation and create real-world impact.
         Join us to collaborate, innovate, and make a difference.</p>  
    </div>
  </div>
</section>
                </div>
                <div className='g text-center text-2xl md-text-4xl'>
                    OUR PARTNERS
                    <div>
                    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center i" src={logo1}/>
          <h2 className="title-font text-xl lg-text-2xl font-medium text-gray-900 mt-6 mb-3">Incubation Partner</h2>
        </div>
        
        
      </div>
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center i" src={logo2}/>
          <h2 className="title-font text-xl lg-text-2xl font-medium text-gray-900 mt-6 mb-2">Training Partner</h2>
        </div>
        
       
      </div>
    </div>
  </div>
</section>
                    </div>
                </div>
             <div className='fa h-full'>
                <div className='r'>FAQ'S</div>
                
                <div className='c'>
      <hr/>
      <div className='e-container' onClick={function1}>
            {s1 ? (<FaArrowDown className="icon" />) : (<FaArrowRight className="icon" />)}
            <p className='e'>How does BLUMIN facilitate collaboration between industries and academic institutions?</p>
            
          </div>
          {!s1?(<p className='e1'>BLUMIN acts as a bridge, connecting industries with academic institutions to establish mutually beneficial partnerships. We organize workshops, seminars, and joint research projects, 
              providing opportunities for knowledge exchange and innovation.</p>):<></>}



      <hr/>
      <div className='e-container' onClick={function2}>
            {s2 ? (<FaArrowDown className="icon" />) : (<FaArrowRight className="icon" />)}
            <p className='e'>What types of projects does BLUMIN support?</p>
            
          </div>
          {!s2?(<p className='e1'>BLUMIN supports a wide range of projects, including those focused on cutting-edge research, technology development, and market demands. Our goal is to foster innovation and address real-world challenges through 
          collaborative efforts between industries and academic institutions.</p>):<></>}
      <hr />
      <div className='e-container' onClick={function3}>
            {s3 ? (<FaArrowDown className="icon" />) : (<FaArrowRight className="icon" />)}
            <p className='e'>How can students and professionals benefit from partnering with BLUMIN?</p>
            
          </div>
          {!s3?(<p className='e1'>By partnering with BLUMIN, students and professionals gain access to valuable internship opportunities, professional development programs, and industry connections. We offer hands-on experience, mentorship,
           and resources to support their growth and success in the tech industry.</p>):<></>}
      <hr />
      <div className='e-container' onClick={function4}>
            {s4 ? (<FaArrowDown className="icon" />) : (<FaArrowRight className="icon" />)}
            <p className='e'>What sets BLUMIN apart from other collaboration platforms?</p>
            
          </div>
          {!s4?(<p className='e1'>BLUMIN stands out for its commitment to innovation,
           expertise in facilitating successful collaborations, and dedication to making a
            meaningful impact on society. Our comprehensive approach, tailored initiatives, and focus 
            on practical outcomes differentiate us as a trusted partner for industry-academia collaborations.

</p>):<></>}
      <hr />
    </div>
             </div>
        </div>
    )
}

export default About
