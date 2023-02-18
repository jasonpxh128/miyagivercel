import { MotionConfig } from 'framer-motion'
import React from 'react'
import {motion} from "framer-motion"

type Props = {
  photocards?:  string;
  paragraphs?: string;
  heading?: string;
   
 }

export default function ProjectCards({photocards, heading, paragraphs}: Props) {
  return (
    <div className='mt-10 w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
        <motion.img
         initial={{
            y: -300,
            opacity: 0,
          }}
          transition={{duration:1.2}}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{once:true}}
          src={photocards}
          className="md:w-[336px] md:h-[600px]"
        />
        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
          <h4 className="text-4xl font-semibold text-center"> 
            <span className="underline decoration-white/50">{heading}</span>
          </h4>

          <p className=" text-sm text-center md:text-lg md:text-left">{paragraphs}</p>

        </div>
    </div>
  )
}