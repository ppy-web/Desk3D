import { useGLTF, useTexture } from "@react-three/drei";
import textures from "../store/detail.js"
import useConfigStore from "../store/configStore.js"
import * as THREE from "three";
import { useMemo } from "react";
const useTextureWithSettings =  (textureConfig)=> {
    const textureProps = useTexture({
        map: textureConfig.texture.map
    })
    const repeat = textureConfig.texture.col ? [4,2] : [2,4] 
    textureProps.map.repeat.set( repeat[0], repeat[1] )
    textureProps.map.rotation = Math.PI;
    textureProps.map.wrapS = THREE.RepeatWrapping;
    textureProps.map.wrapT = THREE.RepeatWrapping;
    return textureProps
}
const Desk = () => {
    const deskConfig = useConfigStore();
    const { nodes } = useGLTF(`${import.meta.env.VITE_BASE_URL}models/desk.glb`);
    const woodTextureProps = useTextureWithSettings(textures[deskConfig.topMaterial])
    const computedLengthRatio = useMemo(() => (deskConfig.length / deskConfig.defaultLength), [deskConfig.length, deskConfig.defaultLength])
    const computedWidthRatio = useMemo(() => (deskConfig.width / deskConfig.defaultWidth), [deskConfig.width, deskConfig.defaultWidth])
  return (
    <group dispose={null}>
      {/*  桌板*/}
      <mesh geometry={nodes.Top.geometry} scale={[computedLengthRatio,1,computedWidthRatio]} position={nodes.Top.position}>
        <meshStandardMaterial {...woodTextureProps} roughness={1}/>
      </mesh>
        {/*桌腿*/}
        <mesh geometry={nodes.IStand1.geometry} position={nodes.IStand1.position} visible={deskConfig.frameType === "adjustable"}>
            <meshStandardMaterial color={deskConfig.frameColor} metalness={0.2} roughness={0.1}/>
        </mesh>
        <mesh geometry={nodes.IStand2.geometry} position={nodes.IStand2.position}  visible={deskConfig.frameType === "adjustable"}>
            <meshStandardMaterial color={deskConfig.frameColor} metalness={0.2} roughness={0.1}/>
        </mesh>
        {/*经典桌腿*/}
        <mesh geometry={nodes.ClassicStand1.geometry} position={nodes.ClassicStand1.position}   visible={deskConfig.frameType === "standard"}>
            <meshStandardMaterial color={deskConfig.frameColor} metalness={0.6} roughness={0.8}/>
        </mesh>
        <mesh geometry={nodes.ClassicStand2.geometry} position={nodes.ClassicStand2.position}  visible={deskConfig.frameType === "standard"}>
            <meshStandardMaterial color={deskConfig.frameColor} metalness={0.6} roughness={0.8}/>
        </mesh>
        {/*操控面板*/}
        <mesh geometry={nodes.Panel.geometry} position={nodes.Panel.position}  visible={deskConfig.electric}>
            <meshStandardMaterial  color={deskConfig.frameColor} metalness={0.2} roughness={0.1}/>
        </mesh>
        <mesh geometry={nodes.Wires.geometry} position={nodes.Wires.position}  visible={deskConfig.electric}>
            <meshStandardMaterial  color={deskConfig.frameColor} metalness={0.2} roughness={0.1}/>
        </mesh>
        {/*横梁*/}
        <mesh geometry={nodes.CrossBeam.geometry} position={nodes.CrossBeam.position} visible={deskConfig.frameType === "adjustable"}>
            <meshStandardMaterial  color={deskConfig.frameColor} metalness={0.2} roughness={0.1}/>
        </mesh>
    </group>
  );
};

export default Desk;


