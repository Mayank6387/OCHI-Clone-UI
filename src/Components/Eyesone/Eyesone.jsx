import React from "react";
import { useEffect, useState } from "react";

function Eyesone() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <div className="w-screen h-screen bg-[#CDEA68]">
         <div className="absolute flex items-center justify-center gap-6 z-999 left-[38vw] mt-20">
          <div className="flex items-center justify-center rounded-full h-[12vw]  w-[12vw] bg-zinc-100">
            <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg) `,
                }}
                className="absolute -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 line w-full h-10"
              >
                <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-full h-[12vw]  w-[12vw] bg-zinc-100">
            <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg) `,
                }}
                className="absolute -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 line w-full h-10"
              >
                <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      <div className="realtive text-[10vw] uppercase flex items-center flex-col text-zinc-900 leading-none tracking-tighter font-bold mt-5">
        <h1 className="mt-5">Ready</h1>
        <h1 className="mt-5">To Start</h1>
        <h1 className="mt-5">The project?</h1>
      </div>
      <div className='start flex items-center justify-center gap-5 mt-20'>
         <div className='px-5 py-2 uppercase flex text-1xl justify-center gap-5 bg-zinc-900  font-semibold rounded-full'>Start the Project
         <div className='w-2 h-2 mt-2 rounded-full  bg-white '>
         </div>
         </div>
         </div>
    </div>
  );
}

export default Eyesone;
