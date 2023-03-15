import React from 'react'
import {motion} from "framer-motion"
import { PhoneIcon, MapPinIcon,EnvelopeIcon} from "@heroicons/react/24/solid";
import { SocialIcon } from 'react-social-icons';

type Props = {}
  
export default function Projects({}: Props) {
  return (
    <div className=' h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>  
        <h3 className=' md:visible absolute top-24 uppercase tracking-[20px] @text-gray-500 text-2xl'>Contact Us</h3>
      <div className='flex flex-col space-y-10'>
        
        <h4 className='text-4xl font-semibold text-center'>
            We have got what you need, let's talk
        </h4>

        <div className='space-y-10 z-20'>

          <div className=' flex items-center space-x-5 justify-center'>
            <PhoneIcon className=' text-red-500/100 h-7 w-7 animate-pulse'/>
            <p className=' text-2xl'>013-8627489</p>
          </div>

          <div className=' flex items-center space-x-5 justify-center'>
            <MapPinIcon className=' text-red-500/100 h-7 w-7 animate-pulse'/>
            <a href="https://goo.gl/maps/T6RTE6nRnLgRZrKu5" className='text-2xl'>GT Auto Club, Jalan Kelikir, Mines Wellness City</a>
          </div>

          <div className=' flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className=' text-red-500/100 h-7 w-7 animate-pulse'/>
            <p className=' text-2xl'>miyagi.malaysia@gmail.com</p>
          </div>

          <div className=' flex items-center space-x-5 justify-center bg-gray-50'>
            {/* Social Icons */}
            <SocialIcon className='m-1' url='https://www.instagram.com/miyagi.my/?hl=en'
            fgColor='#c32aa3'
            bgColor='transparent'/>

            <SocialIcon className='m-1' url='https://www.facebook.com/miyagi.malaysia/'
            fgColor='#0a66c2'
            bgColor='transparent'/>

            <SocialIcon className='m-1' url='https://wa.me/60138627489'
            fgColor='#25d366'
            bgColor='transparent'/>
          </div>

        </div>

      </div>

    </div>
  )
}


 