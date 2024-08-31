import React from 'react'
import  { RiReactjsLine } from "react-icons/ri";
import  { SiMongodb } from "react-icons/si";
import  { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
// import  { RiReactjsLine } from "react-icons/ri";
// import  { RiReactjsLine } from "react-icons/ri";
// import { SiMongodb } from 'react-icons/si';

import { motion } from "framer-motion"

const iconVariants=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        }
    },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24" id="Technologies">
      <motion.h1  
      whileInView={{y:0,opacity:1}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div 
       whileInView={{x:0,opacity:1}}
       initial={{opacity:0,x:-100}}
       transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-6">

        <motion.div 
             variants={iconVariants(2.5)}
             initial="initial"
             animate="animate"
        className="text-center">
       <div className="justify-center rounded-2xl border-4 border-neutral-800 p-4">
    <RiReactjsLine class="text-7xl text-cyan-400"/>
        </div>
        <p className="text-xl">React</p>
        </motion.div>

        <motion.div 
             variants={iconVariants(3.5)}
             initial="initial"
             animate="animate"
        className="text-center">
       <div className="justify-center rounded-2xl border-4 border-neutral-800 p-4">
       <FaNodeJs class="text-7xl text-green-500"/>
        </div>
        <p className="text-xl">NodeJs</p>
        </motion.div>
        
        <motion.div 
             variants={iconVariants(5)}
             initial="initial"
             animate="animate"
        className="text-center">
       <div className="justify-center rounded-2xl border-4 border-neutral-800 p-4">
       <svg width="70" height="70" xmlns="http://www.w3.org/2000/svg">
    
    <circle cx="35" cy="35" r="35" fill="white"/>

    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="20" fill="black" text-anchor="middle" alignment-baseline="central">
        ex
    </text>
</svg>
        </div>
        <p className="text-xl">ExpressJs</p>
        </motion.div>


        <motion.div 
             variants={iconVariants(4)}
             initial="initial"
             animate="animate"
        className="text-center">
       <div className="justify-center rounded-2xl border-4 border-neutral-800 p-4">
       <SiMongodb class="text-7xl text-green-500"/>
        </div>
        <p className="text-xl">Mongodb</p>
        </motion.div>

        <motion.div 
             variants={iconVariants(2.8)}
             initial="initial"
             animate="animate"
        className="text-center">
       <div className="justify-center rounded-2xl border-4 border-neutral-800 p-4">
       <SiJavascript class="text-7xl text-yellow-500" />
        </div>
        <p className="text-xl">JavaScript</p>
        </motion.div>


        <motion.div 
             variants={iconVariants(3.9)}
             initial="initial"
             animate="animate"
        className="text-center">
       <div className="justify-center rounded-2xl border-4 border-neutral-800 p-4">
       <SiTailwindcss  class="text-7xl text-cyan-500" />
        </div>
        <p className="text-xl">Tailwind CSS</p>
        </motion.div>



        <motion.div 
             variants={iconVariants(2.3)}
             initial="initial"
             animate="animate"
        className="text-center">
       <div className="justify-center rounded-2xl border-4 border-neutral-800 p-4">
       <FaHtml5  class="text-7xl text-orange-600" />
        </div>
        <p className="text-xl">HTML</p>
        </motion.div>

        
        <motion.div 
             variants={iconVariants(3.3)}
             initial="initial"
             animate="animate"
        className="text-center">
       <div className="justify-center rounded-2xl border-4 border-neutral-800 p-4 ">
       <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
width="70px" height="70px" viewBox="0 0 306 344.35" enable-background="new 0 0 306 344.35" xml:space="preserve">
    <path fill="#00599C" d="M302.107,258.262c2.401-4.159,3.893-8.845,3.893-13.053V99.14c0-4.208-1.49-8.893-3.892-13.052L153,172.175
    L302.107,258.262z"/>
    <path fill="#004482" d="M166.25,341.193l126.5-73.034c3.644-2.104,6.956-5.737,9.357-9.897L153,172.175L3.893,258.263
    c2.401,4.159,5.714,7.793,9.357,9.896l126.5,73.034C147.037,345.401,158.963,345.401,166.25,341.193z"/>
    <path fill="#659AD2" d="M302.108,86.087c-2.402-4.16-5.715-7.793-9.358-9.897L166.25,3.156c-7.287-4.208-19.213-4.208-26.5,0
    L13.25,76.19C5.962,80.397,0,90.725,0,99.14v146.069c0,4.208,1.491,8.894,3.893,13.053L153,172.175L302.108,86.087z"/>
    <g>
        <path fill="#FFFFFF" d="M153,274.175c-56.243,0-102-45.757-102-102s45.757-102,102-102c36.292,0,70.139,19.53,88.331,50.968
        l-44.143,25.544c-9.105-15.736-26.038-25.512-44.188-25.512c-28.122,0-51,22.878-51,51c0,28.121,22.878,51,51,51
        c18.152,0,35.085-9.776,44.191-25.515l44.143,25.543C223.142,254.644,189.294,274.175,153,274.175z"/>
    </g>
    <g>
        <polygon fill="#FFFFFF" points="255,166.508 243.666,166.508 243.666,155.175 232.334,155.175 232.334,166.508 221,166.508
        221,177.841 232.334,177.841 232.334,189.175 243.666,189.175 243.666,177.841 255,177.841 "/>
    </g>
    <g>
        <polygon fill="#FFFFFF" points="297.5,166.508 286.166,166.508 286.166,155.175 274.834,155.175 274.834,166.508 263.5,166.508
        263.5,177.841 274.834,177.841 274.834,189.175 286.166,189.175 286.166,177.841 297.5,177.841 "/>
    </g>
</svg>

        </div>
        <p className="text-xl">C++</p>
        </motion.div>

        

       
        <motion.div 
             variants={iconVariants(4.9)}
             initial="initial"
             animate="animate"
        className="text-center">
       <div className="justify-center rounded-2xl border-4 border-neutral-800 p-4">
       <SiMysql  class="text-7xl text-cyan-500" />
        </div>
        <p className="text-xl">MySQL</p>
        </motion.div>
        
        <motion.div 
             variants={iconVariants(3.7)}
             initial="initial"
             animate="animate"
        className="text-center">
       <div className="justify-center rounded-2xl border-4 border-neutral-800 p-4">
       <IoLogoCss3   class="text-7xl text-blue-500" />
        </div>
        <p className="text-xl">CSS</p>
        </motion.div>

        <motion.div 
             variants={iconVariants(5)}
             initial="initial"
             animate="animate"
        className="text-center">
       <div className="justify-center rounded-2xl border-4 border-neutral-800 p-4">
       <FaGitAlt   class="text-7xl text-orange-700" />
        </div>
        <p className="text-xl">Git</p>
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Technologies
