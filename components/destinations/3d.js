
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Image3d = (props) => {
    const { nodes, materials } = useGLTF("/3d/mars.glb");
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube008.geometry}
                material={materials["Default OBJ.005"]}
            />
        </group>
    );
}

useGLTF.preload("/3d/mars.glb");

export default Image3d