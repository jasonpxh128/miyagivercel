import React from 'react'
import {motion} from "framer-motion"
import AboutCards2 from "./AboutCards2"
import { StaticImageData } from 'next/image'

import menu1 from "./assets/menu1.jpeg"
import menu2 from "./assets/menu2.jpeg"
import menu3 from "./assets/menu3.jpeg"
import menu4 from "./assets/menu4.jpeg"
import menuomakase from "./assets/menuomakase.jpeg"



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
      max-w-7xl px-10  mx-auto items-center justify-center">
      <h3 className=' ml-10 md:visible absolute justify-center top-24 uppercase tracking-[20px] text-gray-500 text-2xl  mx-auto'>Our Menu</h3>
      <div className=" w-full py-20 flex space-x-3 overflow-x-scroll overflow-y-hidden p-10 snap-x snap-mandatory">
        <AboutCards2 photocards={menu1.src} />
        <AboutCards2 photocards={menu2.src} />
        <AboutCards2 photocards={menu3.src} />
        <AboutCards2 photocards={menu4.src} />
        <AboutCards2 photocards={menuomakase.src} />
        {/* <AboutCards2 photocards={aboutlogo.src} brandlogos ={osrenlogo.src} heading='Ceramic' paragraphs='Simplify your daily maintenance routine like never before with a hydrophobic ceramic coating package from Chicago Auto Pros! Our customers have the luxury of selecting a comprehensive paint protection package, featuring either Modesta or Gtechniq ceramic coatings, among other add-on coating services that further enhance your paintwork’s gloss.'/>
        <AboutCards2 photocards={aboutlogo.src} brandlogos ={osrenlogo.src} heading='Ceramic' paragraphs='Simplify your daily maintenance routine like never before with a hydrophobic ceramic coating package from Chicago Auto Pros! Our customers have the luxury of selecting a comprehensive paint protection package, featuring either Modesta or Gtechniq ceramic coatings, among other add-on coating services that further enhance your paintwork’s gloss.'/>
        <AboutCards2 photocards={aboutlogo.src} brandlogos ={osrenlogo.src} heading='Ceramic' paragraphs='Simplify your daily maintenance routine like never before with a hydrophobic ceramic coating package from Chicago Auto Pros! Our customers have the luxury of selecting a comprehensive paint protection package, featuring either Modesta or Gtechniq ceramic coatings, among other add-on coating services that further enhance your paintwork’s gloss.'/> */}
      </div>
    
    </motion.div>
  )
}