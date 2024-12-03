import React from 'react'
import AboutUs from '../components/HeroSection/AboutUs'
import Hero from '../components/HeroSection/Hero'
import OurServices from '../components/OurServices'

const Homepage = () => {
  return (

    <div>
        <Hero />
        <section id="AboutUs"><AboutUs /></section>
        <section id="Ourservices"><OurServices /></section>
    </div>
  )
}

export default Homepage