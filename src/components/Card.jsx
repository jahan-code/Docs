import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({data, reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={0.2}className='w-60 h-40 lg:h-72  bg-zinc-900/90 rounded-[40px] text-white px-8 py-10 relative overflow-hidden'>
      <FaRegFileAlt className='hidden md:block lg:hidden'/>
      <p className='text-sm leading-tight font-semibold mt-5 hidden lg:block'>{data.desc}</p>
      <div className='footer absolute bottom-0 w-full pt-3  left-0'> 
      <div className='flex items-center justify-between px-8 py-3 mb-3'>
        <h5>{data.filesize}</h5>
        <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
        {
          data.close ? <IoClose /> : <LuDownload size=".7em" color='#fff'/>
        }
        </span>

      </div>
      {
        data.tag.isOpen && (
          <div className={`tag w-full py-4 ${data.tag.tagColor=="blue"?"bg-blue-600":"bg-green-600"} flex justify-center items-center`}>
      <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
      </div>
        )
      }
      
      </div>
    </motion.div >
  )
}

export default Card