import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Brands from '../components/Brands'
import Projects from '../components/Projects'
import Contacts from '../components/Contacts'



const Home: NextPage = () => {
  return (
    <div className='h-screen bg-gray-100 snap-y snap-mandatory overflow-x-hidden overflow-y-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-red-500/100  '>
      <Head> 
        <title>Miyagi's</title>
        
      </Head>
    

      {/* Header */}
      <Header/>

      {/* Hero */}
      <section id="Hero " className=' snap-start'>
      <Hero/>
      </section>

      {/* About */}
      <section id="About " className='snap-center'>
      <About/>
      {/* <About2/> */}
      
      </section>

      {/* Brands <Brands/>*/}
      <section id="brands" className=' snap-start'>
        
      </section> 

      {/* Projects */}
      <section id="projects" className=' snap-start'> 
        <Projects/>
      </section>

      {/* Contact Us */}
      <section id="Contact" className=' snap-start'> 
        <Contacts/>
      </section>
    </div>
  )
}

export default Home
