import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
        <div className='cardcontainer w-1/2 h-[50vh]'>
            <div className="card relative rounded-xl bg-[#004D43] w-full h-full flex justify-center items-center">
                <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute px-3 py-1 border-2 rounded-full left-6 bottom-6 border-[#CDEA68] text-[#CDEA68]'>&copy;2019-2022</button>
            </div>
        </div>
        <div className="cardcontainer w-1/2 flex gap-5 h-[50vh]">
            <div className='card flex justify-center items-center relative rounded-xl bg-[#192826] w-1/2 h-full'>
            <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute uppercase px-3 py-1 border-2 rounded-full left-6 bottom-6 text-sm'>Rating 5.0 on ClutchS</button></div>
            <div className="card flex justify-center items-center relative rounded-xl bg-[#192826] w-1/2 h-full">
            <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute uppercase px-3 py-1 border-2 rounded-full left-6 bottom-6 text-sm'>Business Bootcamp Alumni</button>
            </div>
        </div>
    </div>
  )
}

export default Cards