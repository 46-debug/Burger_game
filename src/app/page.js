import Link from 'next/link';
import React from 'react'

const Home = () => {
  return (
    <div className='bg-gradient-to-b relative from-fuchsia-500 to-neutral-400 h-[100dvh]'>
      <h1 className='heading p-5 text-white sm:text-8xl text-6xl font-normal'>STAR <br /> BURGS</h1>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <img src="burger.svg" alt="burger image" />
      </div>
      <div className='bottom-0 absolute w-full'>
        <Link href={"/game"}><button className='flex justify-between px-5 items-center cursor-pointer transition-all hover:uppercase hover:bg-[#ffc801cc] bg-[#FFC701] h-[97px] border-y-2 w-full text-5xl'>Start<img className='bg-white px-4 py-5 rounded-full border-2' src="aero.svg" alt="" /></button></Link>
        <button className='flex justify-between px-5 items-center cursor-pointer transition-all hover:uppercase hover:bg-[#b4a5f8] bg-[#C6B9FF] h-[97px] border-b-2 w-full text-5xl'>Settings<img className='bg-white px-4 py-5 rounded-full border-2' src="aero.svg" alt="" /></button>
      </div>
    </div>
  )
}

export default Home;