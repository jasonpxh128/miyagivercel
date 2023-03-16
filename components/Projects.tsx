import React from 'react'
import ProjectCards from './ProjectCards';
import { StaticImageData } from 'next/image'
import {motion} from "framer-motion"


import tint from "./assets/tint.jpeg"
import ppf from "./assets/ppf.webp"


type Props = {
    photocards?:  string;
    paragraphs?: string;
    heading?: string;
     
   }
  
export default function Projects({photocards, heading, paragraphs}: Props) {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>  
        <h3 className='invisible md:visible absolute top-24 uppercase tracking-[20px] @text-gray-500 text-2xl'>Projects</h3>
        
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-red-500/100 '>
            <ProjectCards photocards={tint.src} heading ="Window Tinting" paragraphs="Whether your ride needs interior protection from the sun or added privacy against any burglars peeking in, window tint films can do the trick! Also supplied to Chicago Auto Pros by XPEL, our window tinting services work for even the most unique vehicles as a way to help keep your vehicle’s interior temperature down in direct sunlight while simultaneously working to thwart potential break ins." />
            <ProjectCards photocards={ppf.src} heading ="Paint Protection Film (PPF)" paragraphs="Paint Protection film (PPF), also referred to as clear bra film or clear paint film, is a clear as well as practically invisible film that is applied to a vehicle's painted surface areas to protect the paint from scratches, dings, as well as various other sorts of damages. PPF is made of high-quality polyurethane that is long-lasting and protects your car's paint from things like harsh weather, road debris, and normal wear and tear. " />

        </div>

        <div className="w-full absolute top-[30%] bg-red-500/50 left-0 h-[500px] -skew-y-12"/>
    </div>
  )
}


 