import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const Model4 = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/honguito_geo.gltf');
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="blockbench_export">
        <group>
          <group name="main">
            <mesh
              name="main_1"
              castShadow
              receiveShadow
              geometry={nodes.main_1.geometry}
              material={nodes.main_1.material}
            />
            <group name="hat" position={[0, 0.5, 0]}>
              <mesh
                name="hat_1"
                castShadow
                receiveShadow
                geometry={nodes.hat_1.geometry}
                material={nodes.hat_1.material}
                position={[0, -0.5, 0]}
              />
              <mesh
                name="hat_2"
                castShadow
                receiveShadow
                geometry={nodes.hat_2.geometry}
                material={nodes.hat_2.material}
                position={[0, -0.5, 0]}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/honguito_geo.gltf');

export default Model4;
