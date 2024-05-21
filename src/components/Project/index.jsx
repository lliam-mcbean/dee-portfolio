import React, { useState } from 'react'

export default function Project({setGlobalOpen}) {
  const [open, setOpen] = useState(false)

  const setBothTrue = () => {
    setOpen(true)
    setGlobalOpen(true)
  }

  const setBothFalse = () => {
    setOpen(false)
    setGlobalOpen(false)
  }

  return (
    <div onClick={() => !open && setBothTrue()} className={`${open && 'w-screen h-screen fixed left-0 top-[8.33vh]'} bg-black flex p-2 transition-all z-50`}>
      <div className={`${!open && 'hidden'} w-3/12 text-white p-4`}>
        <div onClick={() => setBothFalse()} className='z-50 border border-white cursor-pointer w-max px-2 object-contain rounded-full'>close</div>
        <div className='text-[56px]'>Springboard Performance</div>
        <div className='text-gray-500 pt-4'>Project:</div>
        <div>Visual Identity And Website</div>
        <div className='text-gray-500 pt-4'>Year:</div>
        <div>Spring 2023</div>
        <div className='text-gray-500 pt-4'>Team:</div>
        <div>Jesse Mclean: Project Lead</div>
        <div>Andrew Reist: Development Lead</div>
      </div>
      <div className={`${open ? 'w-9/12 overflow-y-scroll' : 'w-full'} h-full cursor-pointer bg-customBlue border rounded-lg transition-transform relative`}>
      <div className='flex justify-center bg-gradient-to-b from-customBlue p-4 rounded-lg'>
        <video className='w-full' autoPlay muted loop >
          <source src='/video/project-1.mp4' type='video/mp4'/>
        </video>
      </div>
      {!open &&       
        <div className='p-4'>
          <div className='text-[25px]'>Calgary Municipal Land Corporation</div>
          <div className='text-green-500 font-bold text-sm'>WEBSITE DESIGN</div>
        </div>
      }
      {open && 
      <div>
              <div className='h-96 bg-white flex justify-center items-center'>
        hi to see if scrollable
      </div>
            <div className='h-96 bg-white flex justify-center items-center'>
        hi to see if scrollable
      </div>
      <div className='h-96 bg-white flex justify-center items-center'>
        hi to see if scrollable
      </div>
      </div>
      
      }

      </div>
    </div>
  )
}
