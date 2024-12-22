import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const Model3 = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/harley_geo.gltf');
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="blockbench_export">
        <group>
          <group name="main">
            <group
              name="backHover"
              position={[0, 0.375, 0.625]}
              rotation={[-0.436, 0, 0]}
            >
              <mesh
                name="backHover_1"
                castShadow
                receiveShadow
                geometry={nodes.backHover_1.geometry}
                material={nodes.backHover_1.material}
                position={[0, -0.375, -0.625]}
              />
              <mesh
                name="backHover_2"
                castShadow
                receiveShadow
                geometry={nodes.backHover_2.geometry}
                material={nodes.backHover_2.material}
                position={[0.094, -0.006, 0.026]}
                rotation={[-0.218, 0, 0]}
              />
              <mesh
                name="backHover_3"
                castShadow
                receiveShadow
                geometry={nodes.backHover_3.geometry}
                material={nodes.backHover_3.material}
                position={[-0.094, -0.006, 0.026]}
                rotation={[-0.218, 0, 0]}
              />
              <mesh
                name="backHover_4"
                castShadow
                receiveShadow
                geometry={nodes.backHover_4.geometry}
                material={nodes.backHover_4.material}
                position={[0, -0.375, -0.625]}
              />
              <mesh
                name="backHover_5"
                castShadow
                receiveShadow
                geometry={nodes.backHover_5.geometry}
                material={nodes.backHover_5.material}
                position={[0, -0.256, 0.276]}
                rotation={[0.218, 0, 0]}
              />
            </group>
            <group
              name="frontHover"
              position={[0, 0.5, -0.75]}
              rotation={[Math.PI / 6, 0, 0]}
            >
              <mesh
                name="frontHover_1"
                castShadow
                receiveShadow
                geometry={nodes.frontHover_1.geometry}
                material={nodes.frontHover_1.material}
                position={[0, -0.5, 0.75]}
              />
              <mesh
                name="frontHover_2"
                castShadow
                receiveShadow
                geometry={nodes.frontHover_2.geometry}
                material={nodes.frontHover_2.material}
                position={[0, 0.531, 0.031]}
                rotation={[0.218, 0, 0]}
              />
              <mesh
                name="frontHover_3"
                castShadow
                receiveShadow
                geometry={nodes.frontHover_3.geometry}
                material={nodes.frontHover_3.material}
                position={[0, -0.5, 0.75]}
              />
              <group
                name="rightHandle"
                position={[0.188, 0.516, 0]}
                rotation={[0.124, -0.327, 0.37]}
              >
                <mesh
                  name="rightHandle_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.rightHandle_1.geometry}
                  material={nodes.rightHandle_1.material}
                  position={[-0.188, -1.016, 0.75]}
                />
                <mesh
                  name="rightHandle_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.rightHandle_2.geometry}
                  material={nodes.rightHandle_2.material}
                  position={[0.188, 0.031, 0.047]}
                  rotation={[0, -Math.PI / 8, 0]}
                />
              </group>
              <group
                name="leftHandle"
                position={[-0.188, 0.516, 0]}
                rotation={[0.124, 0.327, -0.37]}
              >
                <mesh
                  name="leftHandle_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.leftHandle_1.geometry}
                  material={nodes.leftHandle_1.material}
                  position={[0.188, -1.016, 0.75]}
                />
                <mesh
                  name="leftHandle_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.leftHandle_2.geometry}
                  material={nodes.leftHandle_2.material}
                  position={[-0.188, 0.031, 0.047]}
                  rotation={[0, Math.PI / 8, 0]}
                />
              </group>
              <group
                name="frontLowerWheel"
                position={[0, -0.125, 0.063]}
                rotation={[-0.175, 0, 0]}
              >
                <mesh
                  name="frontLowerWheel_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.frontLowerWheel_1.geometry}
                  material={nodes.frontLowerWheel_1.material}
                  position={[0, -0.375, 0.688]}
                />
                <mesh
                  name="frontLowerWheel_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.frontLowerWheel_2.geometry}
                  material={nodes.frontLowerWheel_2.material}
                  position={[0, -0.375, 0.688]}
                />
                <mesh
                  name="frontLowerWheel_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.frontLowerWheel_3.geometry}
                  material={nodes.frontLowerWheel_3.material}
                  position={[0, -0.213, -0.239]}
                  rotation={[-0.218, 0, 0]}
                />
              </group>
            </group>
            <group name="chasis" position={[0, 0.313, -0.563]}>
              <mesh
                name="chasis_1"
                castShadow
                receiveShadow
                geometry={nodes.chasis_1.geometry}
                material={nodes.chasis_1.material}
                position={[0, 0.25, 0]}
                rotation={[Math.PI / 6, 0, 0]}
              />
              <mesh
                name="chasis_2"
                castShadow
                receiveShadow
                geometry={nodes.chasis_2.geometry}
                material={nodes.chasis_2.material}
                position={[0, -0.313, 0.563]}
              />
              <mesh
                name="chasis_3"
                castShadow
                receiveShadow
                geometry={nodes.chasis_3.geometry}
                material={nodes.chasis_3.material}
                position={[0, 0.063, 1.063]}
                rotation={[-0.611, 0, 0]}
              />
              <mesh
                name="chasis_4"
                castShadow
                receiveShadow
                geometry={nodes.chasis_4.geometry}
                material={nodes.chasis_4.material}
                position={[0, 0.063, 0.063]}
                rotation={[0.654, 0, 0]}
              />
              <mesh
                name="chasis_5"
                castShadow
                receiveShadow
                geometry={nodes.chasis_5.geometry}
                material={nodes.chasis_5.material}
                position={[0, -0.313, 0.563]}
              />
              <mesh
                name="chasis_6"
                castShadow
                receiveShadow
                geometry={nodes.chasis_6.geometry}
                material={nodes.chasis_6.material}
                position={[0, -0.313, 0.563]}
              />
              <mesh
                name="chasis_7"
                castShadow
                receiveShadow
                geometry={nodes.chasis_7.geometry}
                material={nodes.chasis_7.material}
                position={[0, -0.313, 0.563]}
              />
              <group name="engine" position={[0, -0.031, 0.625]}>
                <mesh
                  name="engine_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.engine_1.geometry}
                  material={nodes.engine_1.material}
                  rotation={[Math.PI / 4, 0, 0]}
                />
                <mesh
                  name="engine_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.engine_2.geometry}
                  material={nodes.engine_2.material}
                  position={[0, -0.281, -0.063]}
                />
              </group>
              <group name="seat" position={[0, 0.125, 1.063]}>
                <mesh
                  name="seat_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.seat_1.geometry}
                  material={nodes.seat_1.material}
                  position={[0, -0.438, -0.5]}
                />
                <mesh
                  name="seat_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.seat_2.geometry}
                  material={nodes.seat_2.material}
                  rotation={[-0.654, 0, 0]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/harley_geo.gltf');

export default Model3;
