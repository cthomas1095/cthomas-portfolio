import Image from 'next/image'
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