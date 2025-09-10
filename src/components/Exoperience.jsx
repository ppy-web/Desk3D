import {OrbitControls, Stage} from "@react-three/drei";
import Desk from "./Desk.jsx";
const Exoperience = () => {
    return (
        <>
            <Stage shadows={false}>
                <Desk />
            </Stage>
            <OrbitControls />
        </>
    );
};

export default Exoperience;