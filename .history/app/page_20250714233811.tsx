import Image from 'next/image'
 import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'

export default function Page() {
  return (
    <>
    <h1>Hello</h1>
  <Image src="/.next.svg" alt="Profile" width={100} height={100} />
  </>
  )
}