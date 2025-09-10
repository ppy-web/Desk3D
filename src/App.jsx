import './App.css'
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from "@react-three/drei";
function App() {
  return (
    <div className="fixed inset-0 flex flex-col md:flex-row">
        <div className="md:w-3/5 w-full h-1/3 md:h-full">
            <Canvas>
                <ambientLight />
                <mesh>
                    <boxGeometry />
                    <meshStandardMaterial color="orange" />
                </mesh>
                <OrbitControls />
            </Canvas>
        </div>
        <div className="md:w-3/5 w-full h-1/3 md:h-full bg-white p-4">
            配置区
        </div>
    </div>
  )
}

export default App
