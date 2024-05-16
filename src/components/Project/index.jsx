import React, { useState } from 'react'

export default function Project() {
  const [open, setOpen] = useState(false)
  return (
    <div onClick={() => setOpen(true)} className={`${open && 'w-screen h-screen fixed left-0 top-[8.33vh]'} bg-black flex p-2 transition z-50`}>
      <div className={`${!open && 'hidden'} w-3/12 text-white p-4`}>
        <div onClick={() => setOpen(false)}>close</div>
        <div className='text-[56px]'>Springboard Performance</div>
        <div className='text-gray-500 pt-4'>Project:</div>
        <div>Visual Identity And Website</div>
        <div className='text-gray-500 pt-4'>Year:</div>
        <div>Spring 2023</div>
        <div className='text-gray-500 pt-4'>Team:</div>
        <div>Jesse Mclean: Project Lead</div>
        <div>Andrew Reist: Development Lead</div>
      </div>
      <div className={`${open && 'w-9/12'} cursor-pointer w-full h-40 bg-white border rounded-lg transition mt-2`}>

      </div>
    </div>
  )
}
