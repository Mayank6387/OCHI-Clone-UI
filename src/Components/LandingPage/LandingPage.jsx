import { motion } from 'framer-motion';
import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";


function LandingPage() {
  return (
    <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-48 px-16'>
            <div className='masker uppercase '>
                <div className='w-fit'>
                <h1 className='uppercase  leading-[6vw] font-["FoundersGroteskX-Cond-Lt"] text-[7.5vw] tracking-tighter font-medium'>We Create</h1>          
            </div>
            <div className='masker uppercase flex items-center '>
                <motion.div
                initial={{width:"0"}}
                animate={{width:"9vw"}} 
                transition={{ease:[0.33, 1, 0.68, 1],duration:1}}
                className='h-[5vw] bg-[url(https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg)] bg-cover relative ml-1 mr-1 rounded-md'></motion.div>
               <h1 className='uppercase  leading-[5.5vw] font-["FoundersGrotesk-Semibold"] text-[7.5vw] tracking-tight font-medium'>Eye Opening</h1>
            </div>
            <div className='masker uppercase '>
               <h1 className='uppercase  leading-[6vw] font-["FoundersGrotesk-Semibold"] text-[7.5vw] tracking-tighter font-medium'>Presentations</h1>
            </div>
         </div>
        </div>
        <div className='border-t-[1px] border-zinc-700 mt-24 flex items-center justify-between px-16 py-2 '>
         {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
             <p className='text-md font-light tracking-tight leading-none'>{item}</p>
         ))}
         <div className='start flex items-center gap-5'>
         <div className='px-5 py-2 uppercase border-[1px] border-zinc-500 font-light text-sm rounded-full'>Start the Project</div>
         <div className='w-8 h-8 flex justify-center items-center rounded-full  border-[1px] border-zinc-500 '>
            <span className='rotate-[45deg]'>
            <FaLongArrowAltUp />
            </span>
         </div>
         </div>
        </div>
        
    </div>
  )
}

export default LandingPage