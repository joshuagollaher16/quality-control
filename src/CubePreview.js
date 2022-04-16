import {useRef, useState} from "react";
import {Canvas, useFrame} from "react-three-fiber";


function Box(props) {

    const mesh = useRef();

    const scaleFactor = 0.07; // Used to adjust the cube size,


    //Three.js has y and z flipped in its coordinate system.
    return (
        <mesh
            {...props}
            ref={mesh}>
            <boxBufferGeometry args={[props.length * scaleFactor, props.height * scaleFactor, props.width * scaleFactor]} />
            <meshStandardMaterial color='#45a1ed' transparent />
        </mesh>
    );
}

export default function CubePreview(props) {
    return (
        <div style={{width:300, height:300}}>
            <Canvas camera={{position: [-2, 2, -4]}}>
                <ambientLight intensity={1}/>
                <pointLight position={[0, -2, -2]}/>
                <pointLight position={[0, 2, -2]}/>
                <Box length={props.length} width={props.width} height={props.height}/>
            </Canvas>
        </div>
    );
}