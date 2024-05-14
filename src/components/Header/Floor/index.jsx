import { usePlane } from '@react-three/cannon'
import React from 'react'

export default function Floor({rotation, position}) {
    const [ref] = usePlane(() => ({mass: 0, args: [10,10], rotation, position}))
  return (
    <mesh ref={ref}>
        <planeGeometry args={[10,10]}/>
        <meshBasicMaterial transparent opacity={0} />
    </mesh>
  )
}
