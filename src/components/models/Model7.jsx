import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Model7 = (props) => {
  const { nodes, materials } = useGLTF('/models/pop_box.gltf');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cube.geometry}
        material={nodes.cube.material}
      />
    </group>
  );
};

useGLTF.preload('/models/pop_box.gltf');

export default Model7;
