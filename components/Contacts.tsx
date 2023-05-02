import React from 'react'
import {motion} from "framer-motion"
import { PhoneIcon, MapPinIcon,EnvelopeIcon} from "@heroicons/react/24/solid";
import { SocialIcon } from 'react-social-icons';
import ClientLogos from '../components/Client-logos'
type Props = {}
  
export default function Projects({}: Props) {
  return (
    <div className='bg-black text-white h-screen relative flex overflow-hidden flex-col text-center md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>  
        <h3 className=' absolute top-24 uppercase tracking-[20px] @text-gray-500 text-2xl'>Contact Us</h3>
      <div className='flex flex-col space-y-10'>
        
        <h4 className='visible text-3xl font-semibold text-center px-2 text-red-500/100'>
            We have got what you need, let's talk
        </h4>

        <div className='space-y-10 z-20'>

          <div className=' flex items-center space-x-5 justify-center'>
            <PhoneIcon className=' text-red-500/100 h-7 w-7 animate-pulse'/>
            <p className=' text-2xl'>013-8627489</p>
          </div>

          <div className=' flex items-center space-x-5 justify-center'>
            <MapPinIcon className=' text-red-500/100 h-7 w-7 animate-pulse'/>
            <a href="https://goo.gl/maps/T6RTE6nRnLgRZrKu5" className=' ml-0 md:text-2xl text-xl text-center'>GT Auto Club, Mines Wellness City</a>
          </div>

          <div className=' flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className=' text-red-500/100 h-7 w-7 animate-pulse'/>
            <a href="mailto:miyagi.malaysia@gmail.com" className=' text-2xl'>miyagi.malaysia@gmail.com</a>
            
          </div>

          <div className=' flex items-center space-x-5 justify-center '>
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

          <div>
            <ClientLogos/>
          </div>

        </div>

        {/*<div className=' absolute z-0 justify-center mx-auto'>
            <img src="https://irp.cdn-website.com/06181319/dms3rep/multi/ferari-1012w.webp" alt="miyagi ferrari" />
          </div> */}
      </div>
    </div>
  )
}


 