import React,{ useRef } from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
import { CONTACT } from "../constants";
import { motion } from "framer-motion"

import emailjs from '@emailjs/browser';




const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ikg5mxv', 'template_369d9df', form.current, {
        publicKey: 'JIsS1hej8zXPyzqp9',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          console.log("message sent")
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className=" text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <motion.h2 
          whileInView={{y:0,opacity:1}}
          initial={{opacity:0,y:-100}}
          transition={{duration:0.5}}
        className="text-4xl font-bold text-center mb-12">Contact Me</motion.h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <motion.div 
             whileInView={{x:0,opacity:1}}
             initial={{opacity:0,x:-100}}
             transition={{duration:1}}
          className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development prjects or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                <a href="mailto:youremail@example.com" className='hover:underline'>
                   jagadeeshdende@gmail.com
                </a>
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                <span>+91-9390386257</span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                <span>Nalgonda,Telangana</span>
            </div>
          </motion.div>
          <motion.div 
             whileInView={{x:0,opacity:1}}
             initial={{opacity:0,x:100}}
             transition={{duration:1}}
          className='flex-1 w-full'>

<form ref={form} onSubmit={sendEmail} className='space-y-4'>
    <div>
        <label htmlFor="name" className='block mb-2'>Your Name</label>
        <input type="text" 
        id="name" 
        name="user_name" 
        className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
        placeholder='Enter Your Name' 
        required/>
    </div>
    <div>
        <label htmlFor="email" className='block mb-2'>Email</label>
        <input type="email" 
        id="email" 
        name="user_email" 
        className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
        placeholder='Enter Your Email' 
        required/>
    </div>
    <div>
        <label htmlFor="message" className='block mb-2'>Message</label>
        <textarea 
        id="message" 
        name="message" 
        className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
        rows="5"
        placeholder='Enter Your Message' 
        required></textarea>
    </div>
    <input className="bg-gradient-to-r from-green-400 to-blue-500 text-white md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full " type="submit" value="Send" />
</form>

          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact