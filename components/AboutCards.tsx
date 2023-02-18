import React from 'react'
import {motion} from "framer-motion"



export default function AboutCards({photocards, brandlogos, heading, paragraphs  }: Props) {
  return (
    <article className="flex flex-col md:flex-row rounded-lg itemsc-center flex-shrink-0 snap-center bg-[[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img 
        initial={{
          x: -200,
        }}
        transition={{duration:1.2}}
        whileInView={{ x:0}}
        viewport={{once:true}}
        src={photocards}
        className=" invisible md:visible flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg  md:w-[500px] md:h-[600px]"
      />

      <motion.div 
      initial={{
          x: 400,
        }}
        transition={{duration:1.2}}
        whileInView={{ x:0}}
        viewport={{once:true}}
        className=' w-[300px] bg-white py-10 md:px-10 md:w-[500px] xl:h-[600px] text-center'>
          <h4 className='text-4xl font-light'>{heading}</h4>
          <div className='flex flex-row space-x-2 justify-center mt-2'>
            <img className='h-10 w-10 rounded-full'
              src={brandlogos}
            />
            <img className='h-10 w-10 rounded-full'
              src={brandlogos}
            />
          </div>

          <p className=' mt-8 md:text-xl' >{paragraphs}</p>
          <button className='uppercase bg-blue-700 p-4 mt-10 text-white'> Learn More</button>
      </motion.div>
      </article>
  )
}