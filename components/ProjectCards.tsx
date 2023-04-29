import { MotionConfig } from 'framer-motion'
import React from 'react'
import {motion} from "framer-motion"
import { ChevronDoubleRightIcon} from "@heroicons/react/24/solid";
// import Image from 'next/image';


type Props = {
  photocards?:  string;
  paragraphs?: string;
  heading?: string;
   
 }

export default function ProjectCards({photocards, heading, paragraphs}: Props) {
  const imagePath = photocards ? `/assets/${photocards}.jpeg` : '';
  // null checkeer photocards ?
  return (
    <div className='pt-10 w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:mt-14 md:p-44 h-screen'>
        <motion.img
         initial={{
            y: -300,
            opacity: 0,
          }}
          transition={{duration:1.2}}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{once:true}}
          src={imagePath}
          className="md:w-[336px] md:h-[304px] w-[190px] h-[190px]"
        />
        <div className='md:space-y-10 space-y-5 px-0 md:px-10 max-w-6xl'>
          <h4 className="text-4xl font-semibold text-center"> 
            <span className="underline decoration-white/50">{heading}</span>
          </h4>
          
          {/* <Image
            src = {imagePath}
            width={200}
            height={200}
          /> */}
          <p className=" text-sm text-center md:text-lg md:text-left">{paragraphs}</p>
          <div className=' flex items-center space-x-5 justify-center'>
            <ChevronDoubleRightIcon className='md:invisible visible text-white h-12 w-12 animate-pulse'/>
          </div>

        </div>
    </div>
  )
}