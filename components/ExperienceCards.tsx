import React from 'react'
import {motion} from "framer-motion"
import tint from "./assets/tint.png"


type Props = {}

export default function ExperienceCards({}: Props) {
  return (
    <div>
      <motion.img 
          initial={{
            x: -200,
          }}
          transition={{duration:1.2}}
          whileInView={{ x:0}}
          viewport={{once:true}}
          src={tint.src}
          className=" flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />
    </div>
  )
}