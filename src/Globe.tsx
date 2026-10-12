import {Canvas, useFrame} from '@react-three/fiber';
import {Sphere, Stars} from '@react-three/drei';
import {useRef} from 'react';
import * as THREE from 'three';
function Earth(){
 const group=useRef<THREE.Group>(null);
 useFrame((_,dt)=>{if(group.current)group.current.rotation.y+=dt*.16});
 return <group ref={group} rotation={[.22,0,.12]}>
  <Sphere args={[1.42,64,64]}><meshStandardMaterial color="#163d72" metalness={.78} roughness={.28}/></Sphere>
  <Sphere args={[1.432,36,20]}><meshBasicMaterial color="#9fcfff" wireframe transparent opacity={.15}/></Sphere>
  <mesh rotation={[.65,.3,0]}><torusGeometry args={[1.93,.009,8,180]}/><meshBasicMaterial color="#d6e7ff" transparent opacity={.72}/></mesh>
  <mesh rotation={[1.35,0,.5]}><torusGeometry args={[1.76,.006,8,180]}/><meshBasicMaterial color="#edaa62" transparent opacity={.6}/></mesh>
  <pointLight color="#ff9a46" intensity={2.2} position={[2,-1,2]}/>
 </group>
}
export default function Globe({className=''}:{className?:string}){
 return <div className={'webgl-globe '+className}><Canvas camera={{position:[0,0,5.7],fov:46}} dpr={[1,1.6]} gl={{antialias:true,alpha:true}} fallback={<div className="css-globe"/>}>
 <ambientLight intensity={.65}/><directionalLight position={[-3,4,5]} intensity={3.5} color="#c6e5ff"/><directionalLight position={[4,-2,-3]} intensity={2} color="#ff8c47"/><Stars radius={50} depth={30} count={350} factor={2} saturation={0} fade speed={.2}/><Earth/>
 </Canvas></div>
}
