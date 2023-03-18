import React from 'react'
import {motion} from "framer-motion"
import { ChevronDoubleRightIcon} from "@heroicons/react/24/solid";

type Props ={
  photocards?:  string;

}

export default function AboutCards({photocards }: Props) {
  return (
    <article className="flex flex-col md:flex-row space-y-5 rounded-lg items-center flex-shrink-0 snap-center bg-[[#292929] p-10 hover:opacity-100 md:opacity-40 opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img 
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{duration:1.2}}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{once:true}}
        src={photocards}
        // className="flex-shrink-0 w-[300px] h-380px] pt-3 rounded-  md:rounded-lg md:w-[500px] md:h-[660px]"
        className="flex-shrink-0 w-[390px] h-[410px] pt-3 rounded-sm  md:rounded-lg md:w-[506px] md:h-[531px]"

      />
      <div className='flex flex-row'>
        <ChevronDoubleRightIcon className='md:invisible visible text-red-500 rotate-180 h-12 w-12 animate-pulse'/>
        <ChevronDoubleRightIcon className='md:invisible visible text-red-500/100 h-12 w-12 animate-pulse'/>
      </div>

      </article>
  )
}