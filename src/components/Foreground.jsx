import React, { useState } from 'react'
import Card from './Card'
import {useRef} from 'react';

const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      desc:"Lorem ipsum, dolor sit amet consectetur adipisicing.",
      filesize:".4mb",
      close:false,
      tag: { isOpen:true ,tagTitle: "Download Now", tagColor:"green" },

    },
    {
      desc:"Lorem ipsum, dolor sit amet consectetur adipisicing.",
      filesize:".9mb",
      close:true,
      tag: { isOpen:true ,tagTitle: "Upload", tagColor:"blue" },

    },
    {
      desc:"Lorem ipsum, dolor sit amet consectetur adipisicing.",
      filesize:".7mb",
      close:false,
      tag: { isOpen:true ,tagTitle: "Download Now", tagColor:"green" },

    },
  ];
  return (

    <div ref = {ref} className='w-full h-full fixed z-[3] top-0 left-0 flex gap-5 flex wrap p-5'>
      {
        data.map((item)=>(
          <Card data={item} reference={ref}/>
        ))
      }
    </div>
    
  )
}

export default Foreground;