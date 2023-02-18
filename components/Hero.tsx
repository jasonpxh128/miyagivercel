import React from 'react'
import { Cursor, useTypewriter } from  "react-simple-typewriter";
{/*import BackgroundCircles from "./BackgroundCircles"*/}
import circlelogo from "./assets/logo.jpg"
import Image from 'next/image'

type Props = {};

export default function hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Devil's in the details here at Miyagi's ", "Wax On, Wax Off"
        ], 
        delaySpeed: 800,
        typeSpeed: 30,
        loop: true,

    });
  return (
    <div className='h-screen flex flex-col items-center justify-center text-center overflow-hidden'> 
        {/*<BackgroundCircles />*/}
            {/* <Image className="relative rounded-full h-40 w-40 mx-auto object-cover p-10" src= {circlelogo}/> */}
            <img className=' relative rounded-full h-40 w-40 mx-auto object-cover mb-8' src="/assets/logo.jpg" alt="" />
            <h2 className='text-sm uppercase Utext-gray-500 pb-2 tracking-[15px]'>Detailing Geeks</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span>{text}</span>
                <Cursor cursorColor="  #F7AB0A" cursorStyle='_'/>
            </h1>
    </div>
  );
}
