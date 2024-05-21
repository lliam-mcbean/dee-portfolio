import { useBox } from '@react-three/cannon'
import { Html } from '@react-three/drei'
import React from 'react'

export default function Letters({globalOpen}) {
    const [strat] = useBox(() => ({mass: 10, args:[0.9,0.7,0.5], position: [-0.1, 0.5, 0], material: {friction: 0.5}}))
    const [brand] = useBox(() => ({mass: 10, args:[1.0,0.7,0.5], position: [0.5, 1.8, 0], material: {friction: 0.5}}))
    const [exp] = useBox(() => ({mass: 10, args:[1.5,0.6,0.5], material: {friction: 0.5}}))
    const [int] = useBox(() => ({mass: 10, args:[1.5,0.6,0.5], position: [0.5, -1, 0], material: {friction: 0.5}}))
  return (
    <>
    <mesh ref={strat}>
        <boxGeometry args={[0.9,0.7,0.5]} />
        <meshBasicMaterial transparent opacity={0} />
        <Html transform className={`scale-50 ${globalOpen ? 'hidden' : 'block'}`}>
            <div className='border border-2 rounded-full border-black p-2'>
                Strategy
            </div>
        </Html>
    </mesh>
    <mesh ref={brand}>
        <boxGeometry args={[0.9,0.7,0.5]} />
        <meshBasicMaterial transparent opacity={0} />
        <Html transform className={`scale-50 ${globalOpen ? 'hidden' : 'block'}`}>
            <div className='border border-2 rounded-full border-black p-2'>
                Branding
            </div>
        </Html>
    </mesh>
    <mesh ref={exp}>
        <boxGeometry args={[1.5,0.6,0.5]} />
        <meshBasicMaterial transparent opacity={0} />
        <Html transform className={`scale-50 ${globalOpen ? 'hidden' : 'block'}`}>
            <div className='border border-2 rounded-full border-black p-2'>
                User Experience
            </div>
        </Html>
    </mesh>
    <mesh ref={int}>
        <boxGeometry args={[1.5,0.6,0.5]} />
        <meshBasicMaterial transparent opacity={0} />
        <Html transform className={`scale-50 ${globalOpen ? 'hidden' : 'block'}`}>
            <div className='border border-2 rounded-full border-black p-2'>
                User Interaction
            </div>
        </Html>
    </mesh>
    </>
  )
}

