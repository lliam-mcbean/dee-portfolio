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
    <div onClick={() => !open && setBothTrue()} className={`${open && 'w-screen h-[91.67vh] fixed left-0 top-[8.33vh]'} bg-black flex p-2 transition-all z-50`}>
      <div className={`${!open && 'hidden'} w-3/12 text-white p-4`}>
        <div onClick={() => setBothFalse()} className='z-50 border border-white cursor-pointer w-max px-2 object-contain rounded-full'>close</div>
        <div className='text-[56px] tracking-tighter'>Calgary Municipal Land Corporation</div>
        <div className='text-gray-500 pt-4'>Project:</div>
        <div>Website Redesign</div>
        <div className='text-gray-500 pt-4'>Year:</div>
        <div>Spring 2023</div>
        <div className='text-gray-500 pt-4'>Team:</div>
        <div>Jesse Mclean: Project Lead</div>
        <div>Andrew Reist: Development Lead</div>
        <div className='text-gray-500 pt-4'>Website:</div>
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
          <div className='text-green-500 font-bold text-sm'>WEBSITE REDESIGN</div>
        </div>
      }
      {open && 
      <div>
        <div className='h-max bg-white p-12'>
          <div className='p-12 text-[30px] font-bold w-3/4'>After updating their visual identity, CMLC sought a new website that would not only reflect the new brand but also operate within a CMS accessible to their team. The website needed to effectively showcase their impressive work throughout the city and be accessible to a diverse audience.</div>
          <div className='flex justify-between'>
            <div className='flex justify-center w-1/2 text-[20px] font-bold'>Approach</div>
            <ul className='list-disc'>
              <li className='p-2'>Strong use of visuals using large photography to highlight projects</li>
              <li className='p-2'>Showcase CMLC’s work by creating a consistent system that is reusable from project to project.</li>
              <li className='p-2'>Utilize dynamic mapping to give users a better idea where each projects lives in the city of Calgary.</li>
              <li className='p-2'>Develop an easy to use CMS with a straightforward content structure for the team at CMLC to use and update without hassle. </li>
            </ul>
          </div>
        </div>
        <div className='h-[80vh] w-full bg-[#5BBD72] flex items-center'>
          <div className='w-3/4 p-2'>
            <video className='border border-transparent rounded-lg' autoPlay muted loop >
              <source src='/video/project-1-desktop.mp4' type='video/mp4'/>
            </video>
          </div>
          <div className='w-1/4 p-2'>
            <video className='border border-transparent rounded-lg' autoPlay muted loop >
              <source src='/video/project-1-mobile.mp4' type='video/mp4'/>
            </video>
          </div>
        </div>
        <div className='h-[80vh] bg-white flex justify-center items-center'>
          <img className='w-2/3 h-full object-cover' src="/images/project-1-card.png" alt="" />
          <img className='w-1/3 h-full object-cover' src="/images/project-1-phone.png" alt="" />
        </div>
        <div className=' bg-white p-12 py-[100px]'>
          <div className='p-12 text-[30px] font-bold w-3/4'>Creating an online prescence for the premier city innovators and urban developers.</div>
          <div className='flex justify-between'>
            <div className='flex justify-center w-1/2 text-[20px] font-bold'>My Role</div>
            <ul className='list-disc'>
              <li className='p-2'>Improve the user experience and make the site accessible to all Calgarians.</li>
              <li className='p-2'>An easy to use CMS with a straightforward content structure for the team at CMLC to use and update without hassle.</li>
            </ul>
          </div>
        </div>
      </div>
      
      }

      </div>
    </div>
  )
}
