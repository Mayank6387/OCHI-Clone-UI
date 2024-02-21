import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import LandingPage from './Components/LandingPage/LandingPage'
import Marquee from './Components/Marquee/Marquee'
import About from './Components/About/About'
import Eyes from './Components/Eyes/Eyes'
import Featured from './Components/Featured/Featured'
import Cards from './Components/Cards/Cards'
import Eyesone from './Components/Eyesone/Eyesone'
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar></Navbar>
      <LandingPage></LandingPage>
      <Marquee></Marquee>
      <About></About>
      <Eyes></Eyes>
      <Featured></Featured>
      <Cards></Cards>
      <Eyesone></Eyesone>
      </div>
  )
}

export default App