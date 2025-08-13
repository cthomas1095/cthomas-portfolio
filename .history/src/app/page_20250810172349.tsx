"use client"
import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import { Gltf, 
  Environment, 
  KeyboardControls } from '@react-three/drei'
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
        <Physics 
        //No gravity
        gravity={[0, 0, 0]} 
        timeStep="vary">
          <KeyboardControls map={keyboardMap}>
            <Controller maxVelLimit={10}  
            /* linearDamping={10} */
            //No gravity
            // type="kinematic"
            >
              {/* <Gltf castShadow receiveShadow 
              scale={0.315} 
              position={[0, -0.55, 0]} 
              src="/ghost_w_tophat-transformed.glb" /> */}
              <Gltf castShadow receiveShadow 
              scale={1} 
              position={[0, -0.55, 0]} 
              src="/r2d2_(2).glb" />
            </Controller>
          </KeyboardControls>
          <RigidBody type="fixed" colliders="trimesh">
            {/*<Gltf castShadow receiveShadow rotation={[-Math.PI / 2, 0, 0]} scale={0.11} src="/fantasy_game_inn2-transformed.glb" /> */}
            {/* <Gltf 
            position={[1, -4, -80.75]}
            castShadow receiveShadow 
            // rotation={[-Math.PI / 2, 0, 0]}
            scale={12}
            src="/shipwreck_turned_into_hideout.glb" /> */}
            <Gltf castShadow 
            receiveShadow 
            position={[0, 2.5, 0]}
            // rotation={[-Math.PI / 2, 0, 0]} 
            scale={1.5} 
            src="/star_destroyer_hallway.glb" />
          </RigidBody>
        </Physics>
   
    </Canvas>
    </div>
  )
}