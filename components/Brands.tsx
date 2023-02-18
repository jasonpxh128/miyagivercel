import { motion } from 'framer-motion'
import React from 'react'
import Brand from "./Brand"

type Props = {}

function Brands({}: Props) {
  return (
    <motion.div className=' flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className=' md:visible absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl  mx-auto'>  Brands</h3>
        <h3 className=' absolute top-36 uppercase tracking-(3px] text-gray-500 text-sm'> Carefully curated brands that we work with</h3>

        <div>
            <Brand/>
        </div>
    </motion.div>
    
  )
}

export default Brands