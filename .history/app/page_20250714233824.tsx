import Image from 'next/image'
 import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'

export default function Page() {
  return (
    <>
    <div id="canvas-container">
      <Canvas />
    </div>
  </>
  )
}