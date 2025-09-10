import { useGLTF, useTexture } from "@react-three/drei";
import textures from "../store/detail.js"
import useConfigStore from "../store/configStore.js"
import * as THREE from "three";
const useTextureWithSettings =  (textureConfig)=> {
    const textureProps = useTexture({
        map: textureConfig.texture.map
    })
    textureProps.map.repeat.set(4,4)
    textureProps.map.rotation = Math.PI/2;
    textureProps.map.wrapS = THREE.RepeatWrapping;
    textureProps.map.wrapT = THREE.RepeatWrapping;
    return textureProps
}
const Desk = () => {
  const deskConfig = useConfigStore();
  const { nodes } = useGLTF("/models/desk.glb");
    const woodTextureProps = useTextureWithSettings(textures[deskConfig.topMaterial])
  return (
    <group dispose={null}>
      {/*  桌板*/}
      <mesh geometry={nodes.Top.geometry} scale={[1,1,1]} position={nodes.Top.position}>
        <meshStandardMaterial {...woodTextureProps} roughness={0.3}/>
      </mesh>
        {/*桌腿*/}
        <mesh geometry={nodes.IStand1.geometry} scale={[1, 1, 1]} position={nodes.IStand1.position}>
            <meshStandardMaterial metalness={0.2} roughness={0.1}/>
        </mesh>
        <mesh geometry={nodes.IStand2.geometry} scale={[1, 1, 1]} position={nodes.IStand2.position}>
            <meshStandardMaterial metalness={0.2} roughness={0.1}/>
        </mesh>
        {/*经典桌腿*/}
        <mesh geometry={nodes.ClassicStand1.geometry} scale={[1, 1, 1]} position={nodes.ClassicStand1.position}>
            <meshStandardMaterial metalness={0.2} roughness={0.1}/>
        </mesh>
        <mesh geometry={nodes.ClassicStand2.geometry} scale={[1, 1, 1]} position={nodes.ClassicStand2.position}>
            <meshStandardMaterial metalness={0.2} roughness={0.1}/>
        </mesh>
        {/*操控面板*/}
        <mesh geometry={nodes.Panel.geometry} scale={[1, 1, 1]} position={nodes.Panel.position}>
            <meshStandardMaterial metalness={0.2} roughness={0.1}/>
        </mesh>
        <mesh geometry={nodes.Wires.geometry} scale={[1, 1, 1]} position={nodes.Wires.position}>
            <meshStandardMaterial metalness={0.2} roughness={0.1}/>
        </mesh>
        <mesh geometry={nodes.CrossBeam.geometry} scale={[1, 1, 1]} position={nodes.CrossBeam.position}>
            <meshStandardMaterial metalness={0.2} roughness={0.1}/>
        </mesh>
    </group>
  );
};

export default Desk;


