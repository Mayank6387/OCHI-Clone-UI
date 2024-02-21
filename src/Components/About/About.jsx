import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] text-black rounded-tr-3xl rounded-tl-3xl'>
        <h1 className='text-[5vw] leading-[4.5vw] tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]'>
            <div className='w-1/2'>
                <h1 className='text-7xl'>Our approach:</h1>
                <button className='uppercase rounded-full bg-zinc-900 text-white px-10 py-6 mt-10 flex items-center gap-8'>Read More
                <div className='h-2 w-2 rounded-full bg-zinc-100'>
                </div>
                </button>
                </div>
            <div className='w-1/2 rounded-3xl h-[70vh] bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg")] '>
            </div>
        </div>

    </div>
  )
}

export default About