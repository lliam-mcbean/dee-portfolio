import React from 'react'
import Header from '../Header'
import Project from '../Project'

export default function Body() {
  return (
    <div className='w-full h-full bg-black flex'>
        <div className='w-1/2 h-full p-2'>
            <Header />
        </div>
        <div className='w-1/2 h-full p-2 overflow-y-scroll'>
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
        </div>
    </div>
  )
}
