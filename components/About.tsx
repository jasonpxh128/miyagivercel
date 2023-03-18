import React from 'react'
import {motion} from "framer-motion"
import AboutCards2 from "./AboutCards2"
import { StaticImageData } from 'next/image'

import menu1 from "./assets/newmenu1.jpeg"
import menu2 from "./assets/newmenu2.jpeg"
import menu3 from "./assets/newmenu3.jpeg"
import menu4 from "./assets/newmenu4.jpeg"
import menu5 from "./assets/newmenu5.jpeg"
import menu6 from "./assets/newmenu6.jpeg"



type Props = {
  photocards?:  string;
  brandlogos?: StaticImageData;
  paragraphs?: string;
  heading?: string;
   
 }


export default function About({ photocards, brandlogos, heading, paragraphs}: Props) {

  return (
    <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1.2}}
      className="flex relative h-screen md:space-y-10
      max-w-7xl px-5  mx-auto items-center justify-center">
      <h3 className=' ml-10 absolute justify-center top-24 uppercase tracking-[20px] text-gray-500 text-2xl  mx-auto'>Our Menu</h3>
      <div className=" w-full pt-20 flex space-x-2 overflow-x-scroll overflow-y-hidden p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-red-500/100 ">
        <AboutCards2 photocards={menu1.src} />
        <AboutCards2 photocards={menu2.src} />
        <AboutCards2 photocards={menu3.src} />
        <AboutCards2 photocards={menu4.src} />
        <AboutCards2 photocards={menu5.src} />
        <AboutCards2 photocards={menu6.src} />
      </div>
    
    </motion.div>
  )
  
}