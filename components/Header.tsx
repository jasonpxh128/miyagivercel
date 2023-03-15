import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
 
type Props = {}

export default function  ({}: Props) {
  return (
    <header className="invisible md:visible sticky top-0 flex p-5 items-start justify-between max-w-7xl mx-auto z-20 xl:items-center"> 
      <motion.div 
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x:0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5
        }}
      className='flex flex-row items-center'>

        {/* Social Icons */}
        <SocialIcon className='m-1' url='https://www.instagram.com/miyagi.my/?hl=en'
        fgColor='grey'
        bgColor='transparent'/>

        <SocialIcon className='m-1' url='https://www.facebook.com/miyagi.malaysia/'
        fgColor='grey'
        bgColor='transparent'/>

        <SocialIcon className='m-1' url='https://wa.me/60138627489'
        fgColor='grey'
        bgColor='transparent'/>

      </motion.div>
      
      <motion.div 
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x:0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5
        }}
      className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />
        <p className=" uppercase hidden md:inline-flex text-sm-text-gray-400 m-1"> Get in Touch</p>
      </motion.div>
        

      
      

    </header> 
  );
}