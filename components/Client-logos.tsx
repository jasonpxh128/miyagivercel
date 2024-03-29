import React from 'react'
import SliderContainer from './Slider'
import Image from 'next/image'

const ClientLogos: React.FC = () => (
  <>
    <SliderContainer className='' contentWidth={1290} initialOffsetX ={0}>
      <Image
        src='/assets/osren-logo.png'
        width={150}
        height={50}
        alt="Osren"
        objectFit='contain'
      />
      <Image
        src='/assets/3mcrystalline.png'
        width={150}
        height={50}
        alt="3m"
        objectFit='contain'
      />
      <Image
        src='/assets/mothers-logo.png'
        width={150}
        height={50}
        alt="mothers"
        objectFit='contain'
      />
            <Image
        src='/assets/meguirs-logo.jpeg'
        width={150}
        height={50}
        alt="Meguirs"
        objectFit='contain'
      />
            <Image
        src='/assets/carprologo.png'
        width={150}
        height={50}
        alt="carpro"
        objectFit='contain'
      />
            <Image
        src='/assets/sonax-logo.png'
        width={150}
        height={50}
        alt="Sonax"
        objectFit='contain'
      />
            <Image
        src='/assets/soft99-logo.webp'
        width={150}
        height={50}
        alt="soft99"
        objectFit='contain'
      />
    </SliderContainer>
    </>

  
)
export default ClientLogos