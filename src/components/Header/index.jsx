import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useRef } from 'react'
import Shader from './Shader'
import Letters from './Letters'
import { Physics } from '@react-three/cannon'
import Floor from './Floor'

export default function Header({globalOpen}) {
  const pointLight = useRef()
  return (
    <div className='bg-green-500 h-full border rounded-lg relative'>
        <div className='absolute w-full z-50 p-4'>
            <div className='text-lg py-4'>Who I am</div>
            <div className='text-[45px] py-4'><span className='font-bold'>I am Dee -</span> A multi-disciplinary designer currently working at <span className='font-bold'>Built by Field</span></div>
            <button className='my-8 px-4 border bg-black rounded-full text-white p-2 text-center'>More About Me</button>
        </div>
        <Canvas className='border rounded-lg' shadows>
            <pointLight position={[4, 0, 5]} ref={pointLight} castShadow />
            <Shader pointLight={pointLight}/>
            <Physics>
                <Letters globalOpen={globalOpen} />
                <Floor rotation={[-Math.PI / 2, 0, 0]} position={[0,-3,0]}/>
                <Floor rotation={[0, -Math.PI / 2, 0]} position={[1.8,0,0]}/>
                <Floor rotation={[0, Math.PI / 2, 0]} position={[-1,0,0]}/>
                <Floor rotation={[Math.PI,0, 0]} position={[0,0,0.27]}/>
                <Floor rotation={[0,0, 0]} position={[0,0,-0.27]}/>
            </Physics>
            {/* <OrbitControls /> */}
        </Canvas>
    </div>
  )
}
