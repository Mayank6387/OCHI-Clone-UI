import React from 'react'
import {motion} from 'framer-motion'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full bg-[#004D43] rounded-tr-3xl rounded-tl-3xl py-8'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex uppercase overflow-hidden whitespace-nowrap">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",repeat:Infinity,duration:8}} className='text-[16vw] leading-none font-["FoundersGrotesk"] pt-2 pr-10 mb-[1vw] font-semibold'>We are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",repeat:Infinity,duration:8}} className='text-[16vw] leading-none font-["FoundersGrotesk"] pt-2 pr-10  mb-[1vw] font-semibold'>We are ochi</motion.h1>
            
        </div>
    </div>
  )
}

export default Marquee