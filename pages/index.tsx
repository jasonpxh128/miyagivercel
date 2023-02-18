import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import About2 from '../components/AboutCards'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Brands from '../components/Brands'
import Projects from '../components/Projects'


const Home: NextPage = () => {
  return (
    <div className='h-screen bg-gray-100 snap-y snap-mandatory overflow-scroll z-0   '>
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

      {/* Brands */}
      <section id="brands" className=' snap-start'>
        <Brands/>
      </section> 

      {/* Projects */}
      <section id="projects" className=' snap-start'> 
        <Projects/>
      </section>
    </div>
  )
}

export default Home
