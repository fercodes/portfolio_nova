import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Model9 = (props) => {
  const { nodes, materials } = useGLTF('/models/villager_micelio_geo.gltf');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.body_1.geometry}
        material={nodes.body_1.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.body_2.geometry}
        material={nodes.body_2.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.body_3.geometry}
        material={nodes.body_3.material}
      />
      <group position={[0, 1.5, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.head_1.geometry}
          material={nodes.head_1.material}
          position={[0, -1.5, 0]}
        />
        <group position={[0, 0.125, 0.063]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.brim_1.geometry}
            material={nodes.brim_1.material}
            position={[0, -1.625, -0.063]}
          />
        </group>
        <group position={[0, 0.125, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.nose_1.geometry}
            material={nodes.nose_1.material}
            position={[0, -1.625, 0]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.helmet_1.geometry}
          material={nodes.helmet_1.material}
          position={[0, -1.5, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.helmet_2.geometry}
          material={nodes.helmet_2.material}
          position={[0, -1.5, 0]}
        />
      </group>
      <group position={[0, 1.375, 0]} rotation={[0.873, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.arms_1.geometry}
          material={nodes.arms_1.material}
          position={[0, -1.375, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.arms_2.geometry}
          material={nodes.arms_2.material}
          position={[0, -1.375, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.arms_3.geometry}
          material={nodes.arms_3.material}
          position={[0, -1.375, 0]}
        />
      </group>
      <group position={[0.125, 0.75, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rightLeg_1.geometry}
          material={nodes.rightLeg_1.material}
          position={[-0.125, -0.75, 0]}
        />
      </group>
      <group position={[-0.125, 0.75, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leftLeg_1.geometry}
          material={nodes.leftLeg_1.material}
          position={[0.125, -0.75, 0]}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/models/villager_micelio_geo.gltf');

export default Model9;
