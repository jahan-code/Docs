import React from 'react'

const Background = () => {
  return (
    <>
    <div className='fixed w-full h-screen z-[2]'>
        <div className=' absolute w-full py-10 flex justify-center text-zinc-600 text-xl top-[5%] font-semibold'>Documents </div>
      <h1 className='text-[10vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-900 leading-none tracking-tighter absolute'>Docs</h1>
    </div>
    </>
  )
}

export default Background