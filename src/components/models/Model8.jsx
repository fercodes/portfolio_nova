import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const Model8 = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/powerup_geo.gltf');
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="blockbench_export">
        <group>
          <group name="main">
            <group name="cube" position={[0, 1.5, 0]}>
              <mesh
                name="cube_1"
                castShadow
                receiveShadow
                geometry={nodes.cube_1.geometry}
                material={nodes.cube_1.material}
                position={[0, -1.5, 0]}
              />
            </group>
            <group name="s2" position={[0, 1.5, 0]}>
              <mesh
                name="s2_1"
                castShadow
                receiveShadow
                geometry={nodes.s2_1.geometry}
                material={nodes.s2_1.material}
                position={[0, -1.5, 0]}
              />
            </group>
            <group name="s1" position={[0, 1.5, 0]}>
              <mesh
                name="s1_1"
                castShadow
                receiveShadow
                geometry={nodes.s1_1.geometry}
                material={nodes.s1_1.material}
                position={[0, -1.5, 0]}
              />
            </group>
            <group name="b1" position={[0, 0.813, 0]}>
              <mesh
                name="b1_1"
                castShadow
                receiveShadow
                geometry={nodes.b1_1.geometry}
                material={nodes.b1_1.material}
                position={[0, -0.813, 0]}
              />
            </group>
            <group name="b2" position={[0, 0.5, 0]}>
              <mesh
                name="b2_1"
                castShadow
                receiveShadow
                geometry={nodes.b2_1.geometry}
                material={nodes.b2_1.material}
                position={[0, -0.5, 0]}
              />
            </group>
            <group name="b3" position={[0, 0.188, 0]}>
              <mesh
                name="b3_1"
                castShadow
                receiveShadow
                geometry={nodes.b3_1.geometry}
                material={nodes.b3_1.material}
                position={[0, -0.188, 0]}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/powerup_geo.gltf');

export default Model8;
