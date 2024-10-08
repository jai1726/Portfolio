// import HeroImage from '../assets/hero-image.png'
import React from 'react';
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/final.jpeg";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});



const Hero = () => {
  return (
    <div className=' text-white text-center  pt-8 pb-5 lg:py-16'>
        <img
        //  initial={{ x: 100, opacity: 0 }}
        //  animate={{ x: 0, opacity: 1 }}
        //  transition={{ duration: 1, delay: 1.2 }}
        src={profilePic} alt="" 
        className=' w-44 h-44 lg:w-60 lg:h-60  mx-auto mb-4 lg:mb-6 rounded-full object-cover transform transition-transform duration-300 hover:scale-110'/>
        <motion.h1
        variants={container(0.5)}
        initial="hidden"
        animate="visible"
        className='text-4xl font-bold'>
             <span className="hidden md:visible" >  I'm {" "}</span>
            <span 
            className='  text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Dende Jagadeesh</span>
            , <span className='text-3xl lg:text-4xl '>Software Developer
                </span>
        </motion.h1>
        <motion.p 
         variants={container(1)}
         initial="hidden"
         animate="visible"
        className='mt-4 text-lg text-gray-300'>
            {HERO_CONTENT}
        </motion.p>
        <motion.div 
        
        variants={container(1.5)}
                         initial="hidden"
                         animate="visible"
        className='mt-8 space-x-4'>
             <a href="#contact">
            <button
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect With Me</button>
            </a>
            <a href="https://drive.google.com/file/d/12sIBYZyhFiIxWNM3-CQQTG1lf1VxBwcg/view?usp=sharing">
            <button
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
                  </a>
        </motion.div>

    </div>
  )
}

export default Hero