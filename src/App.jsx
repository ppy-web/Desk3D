import './App.css'
import {Canvas} from '@react-three/fiber'
import Exoperience from "./components/Exoperience.jsx";
import Configurater from "./components/Configurater.jsx";
import {Loader} from "@react-three/drei";
import {Suspense} from "react";
function App() {
  return (
    <div className="fixed inset-0 flex flex-col md:flex-row">
        <div className="md:w-3/5 md:h-full w-full h-1/3">
            <Canvas>
                <Suspense  fallback={null}>
                    <Exoperience />
                </Suspense>
            </Canvas>
            <Loader/>
        </div>
        <div className="md:w-2/5  md:h-full w-full h-2/3 bg-white p-4">
            <Configurater/>
        </div>
    </div>
  )
}

export default App
