import React from 'react'

export default function Navigation() {
  return (
    <div className='flex items-center justify-between p-2'>
      <img src="/images/dee.svg" alt="" />
      <div className='flex px-2'>
        <div className='text-gray-400 border border-gray-400 cursor-pointer mx-2 px-2 rounded-full'>about</div>
        <div onClick={(e) => {
          e.preventDefault()
          let contact = document.getElementById("contact")
          contact && contact.scrollIntoView({behavior: 'smooth', block: 'start'})
        }} className='text-black bg-white border border-white cursor-pointer mx-2 px-2 rounded-full'>contact</div>
      </div>
    </div>
  )
}
