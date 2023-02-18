import React from 'react'
import {motion} from "framer-motion"



export default function AboutCards({photocards }: Props) {
  return (
    <article className="flex flex-col md:flex-row rounded-lg items-center flex-shrink-0 snap-center bg-[[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
        className="flex-shrink-0 w-[300px] h-[535px] pt-3 rounded-sm  md:rounded-lg md:w-[336px] md:h-[600px]"

      />
      </article>
  )
}