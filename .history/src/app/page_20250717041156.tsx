"use client"
import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import { Gltf, Environment, KeyboardControls } from '@react-three/drei'
import Controller from 'ecctrl'


export default function Page() {
    const keyboardMap = [
    { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
    { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
    { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
    { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
    { name: 'jump', keys: ['Space'] },
    { name: 'run', keys: ['Shift'] },
  ]
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
    <Canvas shadows onPointerDown={(e) => (e.target as HTMLCanvasElement).requestPointerLock()}>
     
        <Environment files="/night.hdr" ground={{scale: 200 }} />
        <directionalLight intensity={0.7} castShadow shadow-bias={-0.0004} position={[-20, 20, 20]}>
          <orthographicCamera attach="shadow-camera" args={[-20, 20, 20, -20]} />
        </directionalLight>
        <ambientLight intensity={0.2} />
        <Physics timeStep="vary">
          <KeyboardControls map={keyboardMap}>
            <Controller maxVelLimit={5}>
              <Gltf castShadow receiveShadow scale={0.315} position={[0, -0.55, 0]} src="/.ghost_w_tophat-transformed.glb" />
            </Controller>
          </KeyboardControls>
          <RigidBody type="fixed" colliders="trimesh">
            <Gltf position={[1, 0, 1]}  /*castShadow receiveShadow rotation={[-Math.PI / 2, 0, 0]}*/ /* scale={1000} */src="/.collision-world.glb" />
          </RigidBody>
        </Physics>
   
    </Canvas>
    </div>
  )
}