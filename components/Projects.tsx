import React from 'react'
import ProjectCards from './ProjectCards';



export default function Projects() {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-center md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>  
        <h3 className=' absolute top-20 uppercase tracking-[20px] text-3xl font-semibold text-center'>
          <span className="underline decoration-white/50">Projects</span>
        </h3>
        
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-red-500/100 '>
            <ProjectCards photocards="tint" heading ="Window Tinting" paragraphs="Whether your ride needs interior protection from the sun or added privacy against any burglars peeking in, window tint films can do the trick! Our window tinting services work to help keep your vehicle’s interior temperature down in direct sunlight while simultaneously working to thwart potential break ins." />
            <ProjectCards photocards="ppf" heading ="Paint Protection Film (PPF)" paragraphs="Paint Protection film (PPF), also referred to as clear bra film or clear paint film, is a clear as well as practically invisible film that is applied to a vehicle's painted surface areas to protect the paint from scratches, dings, as well as various other sorts of damages." />
            <ProjectCards photocards="ceramic" heading ="Ceramic Coatings" paragraphs="Simplify your daily maintenance routine like never before with a hydrophobic ceramic coating package from   Our customers have the luxury of selecting a comprehensive paint protection package, featuring  Gtechniq ceramic coatings, among other add-on coating services that further enhance your paintwork’s gloss." />
            <ProjectCards photocards="polishing" heading ="Paint Correction" paragraphs="An in-depth hand wash and complete decontamination of your vehicle. Our goal is removing up to 85% of the defects from your paint, leaving a dramatically improved finish. In our paint correction, we utilize a compound designed to remove swirls, scratches, and randomized defects before polishing to add optical clarity, depth, and gloss to your vehicle’s surface." />

        </div>

        <div className="w-full absolute top-[30%] bg-red-500/50 left-0 h-[500px] -skew-y-12"/>
    </div>
  )
}


 