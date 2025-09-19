import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Deal from './Deal'
import Card from './Card'

function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <Hero/>
        <Deal/>
        <Card/>
    </div>
  )
}

export default Home