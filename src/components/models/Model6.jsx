import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const Model6 = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    '/models/phantomic_geo.gltf'
  );
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
            <mesh
              name="main_2"
              castShadow
              receiveShadow
              geometry={nodes.main_2.geometry}
              material={nodes.main_2.material}
              position={[0, 0.375, -1.375]}
              rotation={[0.436, 0, 0]}
            />
            <mesh
              name="main_3"
              castShadow
              receiveShadow
              geometry={nodes.main_3.geometry}
              material={nodes.main_3.material}
              position={[0, 0.375, -1.031]}
              rotation={[0.436, 0, 0]}
            />
            <mesh
              name="main_4"
              castShadow
              receiveShadow
              geometry={nodes.main_4.geometry}
              material={nodes.main_4.material}
              position={[0, 0.375, -0.625]}
              rotation={[0.436, 0, 0]}
            />
            <group
              name="leftCostillas"
              position={[-0.484, 0.156, -0.875]}
              rotation={[0, 0, 0.087]}
            >
              <mesh
                name="leftCostillas_1"
                castShadow
                receiveShadow
                geometry={nodes.leftCostillas_1.geometry}
                material={nodes.leftCostillas_1.material}
                position={[0.484, -0.156, 0.875]}
              />
              <mesh
                name="leftCostillas_2"
                castShadow
                receiveShadow
                geometry={nodes.leftCostillas_2.geometry}
                material={nodes.leftCostillas_2.material}
                position={[0.484, -0.156, 0.875]}
              />
              <mesh
                name="leftCostillas_3"
                castShadow
                receiveShadow
                geometry={nodes.leftCostillas_3.geometry}
                material={nodes.leftCostillas_3.material}
                position={[0.484, -0.156, 0.875]}
              />
              <mesh
                name="leftCostillas_4"
                castShadow
                receiveShadow
                geometry={nodes.leftCostillas_4.geometry}
                material={nodes.leftCostillas_4.material}
                position={[0.484, -0.156, 0.875]}
              />
              <mesh
                name="leftCostillas_5"
                castShadow
                receiveShadow
                geometry={nodes.leftCostillas_5.geometry}
                material={nodes.leftCostillas_5.material}
                position={[0.484, -0.156, 0.875]}
              />
            </group>
            <group
              name="rightCostillas"
              position={[0.547, 0.156, -0.875]}
              rotation={[0, 0, -0.087]}
            >
              <mesh
                name="rightCostillas_1"
                castShadow
                receiveShadow
                geometry={nodes.rightCostillas_1.geometry}
                material={nodes.rightCostillas_1.material}
                position={[-0.547, -0.156, 0.875]}
              />
              <mesh
                name="rightCostillas_2"
                castShadow
                receiveShadow
                geometry={nodes.rightCostillas_2.geometry}
                material={nodes.rightCostillas_2.material}
                position={[-0.547, -0.156, 0.875]}
              />
              <mesh
                name="rightCostillas_3"
                castShadow
                receiveShadow
                geometry={nodes.rightCostillas_3.geometry}
                material={nodes.rightCostillas_3.material}
                position={[-0.547, -0.156, 0.875]}
              />
              <mesh
                name="rightCostillas_4"
                castShadow
                receiveShadow
                geometry={nodes.rightCostillas_4.geometry}
                material={nodes.rightCostillas_4.material}
                position={[-0.547, -0.156, 0.875]}
              />
              <mesh
                name="rightCostillas_5"
                castShadow
                receiveShadow
                geometry={nodes.rightCostillas_5.geometry}
                material={nodes.rightCostillas_5.material}
                position={[-0.547, -0.156, 0.875]}
              />
            </group>
            <group name="lowerChest" position={[0, 0.313, -0.188]}>
              <mesh
                name="lowerChest_1"
                castShadow
                receiveShadow
                geometry={nodes.lowerChest_1.geometry}
                material={nodes.lowerChest_1.material}
                position={[0, -0.313, 0.188]}
              />
              <mesh
                name="lowerChest_2"
                castShadow
                receiveShadow
                geometry={nodes.lowerChest_2.geometry}
                material={nodes.lowerChest_2.material}
                position={[0.188, -0.5, 0.25]}
                rotation={[-0.453, -0.272, 0.504]}
              />
              <mesh
                name="lowerChest_3"
                castShadow
                receiveShadow
                geometry={nodes.lowerChest_3.geometry}
                material={nodes.lowerChest_3.material}
                position={[-0.188, -0.5, 0.25]}
                rotation={[-0.453, 0.272, -0.504]}
              />
              <mesh
                name="lowerChest_4"
                castShadow
                receiveShadow
                geometry={nodes.lowerChest_4.geometry}
                material={nodes.lowerChest_4.material}
                position={[0, 0.063, 0.094]}
                rotation={[0.436, 0, 0]}
              />
              <mesh
                name="lowerChest_5"
                castShadow
                receiveShadow
                geometry={nodes.lowerChest_5.geometry}
                material={nodes.lowerChest_5.material}
                position={[0, 0.063, 0.5]}
                rotation={[0.436, 0, 0]}
              />
              <group name="tail1" position={[0, -0.188, 0.875]}>
                <mesh
                  name="tail1_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.tail1_1.geometry}
                  material={nodes.tail1_1.material}
                  position={[0, -0.125, -0.688]}
                />
                <mesh
                  name="tail1_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.tail1_2.geometry}
                  material={nodes.tail1_2.material}
                  position={[0, -0.125, -0.688]}
                />
                <mesh
                  name="tail1_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.tail1_3.geometry}
                  material={nodes.tail1_3.material}
                  position={[-0.031, 0.25, 0.313]}
                  rotation={[Math.PI / 6, 0, 0]}
                />
                <group name="tail2" position={[0, 0, 0.625]}>
                  <mesh
                    name="tail2_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.tail2_1.geometry}
                    material={nodes.tail2_1.material}
                    position={[0, -0.125, -1.313]}
                  />
                  <mesh
                    name="tail2_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.tail2_2.geometry}
                    material={nodes.tail2_2.material}
                    position={[0, -0.125, -1.313]}
                  />
                  <mesh
                    name="tail2_3"
                    castShadow
                    receiveShadow
                    geometry={nodes.tail2_3.geometry}
                    material={nodes.tail2_3.material}
                    position={[-0.031, 0.188, 0.313]}
                    rotation={[Math.PI / 6, 0, 0]}
                  />
                  <group name="tail3" position={[0, -0.031, 0.625]}>
                    <mesh
                      name="tail3_1"
                      castShadow
                      receiveShadow
                      geometry={nodes.tail3_1.geometry}
                      material={nodes.tail3_1.material}
                      position={[0, -0.094, -1.938]}
                    />
                    <mesh
                      name="tail3_2"
                      castShadow
                      receiveShadow
                      geometry={nodes.tail3_2.geometry}
                      material={nodes.tail3_2.material}
                      position={[0, -0.094, -1.938]}
                    />
                    <mesh
                      name="tail3_3"
                      castShadow
                      receiveShadow
                      geometry={nodes.tail3_3.geometry}
                      material={nodes.tail3_3.material}
                      position={[-0.031, 0.156, 0.313]}
                      rotation={[Math.PI / 6, 0, 0]}
                    />
                    <group name="tail4" position={[0, -0.031, 0.609]}>
                      <mesh
                        name="tail4_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.tail4_1.geometry}
                        material={nodes.tail4_1.material}
                        position={[0, -0.063, -2.547]}
                      />
                      <mesh
                        name="tail4_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.tail4_2.geometry}
                        material={nodes.tail4_2.material}
                        position={[0, -0.063, -2.547]}
                      />
                      <mesh
                        name="tail4_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.tail4_3.geometry}
                        material={nodes.tail4_3.material}
                        position={[-0.031, 0.125, 0.25]}
                        rotation={[Math.PI / 6, 0, 0]}
                      />
                      <mesh
                        name="tail4_4"
                        castShadow
                        receiveShadow
                        geometry={nodes.tail4_4.geometry}
                        material={nodes.tail4_4.material}
                        position={[0, -0.063, -2.547]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="neck" position={[0, 0.188, -1.5]}>
              <mesh
                name="neck_1"
                castShadow
                receiveShadow
                geometry={nodes.neck_1.geometry}
                material={nodes.neck_1.material}
                position={[0, -0.188, 1.5]}
              />
              <group name="head" position={[0, 0, -0.188]}>
                <mesh
                  name="head_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.head_1.geometry}
                  material={nodes.head_1.material}
                  position={[0, -0.188, 1.688]}
                />
                <mesh
                  name="head_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.head_2.geometry}
                  material={nodes.head_2.material}
                  position={[0, -0.188, 1.688]}
                />
                <mesh
                  name="head_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.head_3.geometry}
                  material={nodes.head_3.material}
                  position={[0, -0.188, 1.688]}
                />
                <group name="head_ears" position={[-0.375, 0, -0.188]}>
                  <mesh
                    name="head_ears_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.head_ears_1.geometry}
                    material={nodes.head_ears_1.material}
                    position={[0.75, 0, 0]}
                    rotation={[0, Math.PI / 4, 0]}
                  />
                  <mesh
                    name="head_ears_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.head_ears_2.geometry}
                    material={nodes.head_ears_2.material}
                    position={[0.75, 0.063, -0.125]}
                    rotation={[-0.78, 0.618, 0.521]}
                  />
                  <mesh
                    name="head_ears_3"
                    castShadow
                    receiveShadow
                    geometry={nodes.head_ears_3.geometry}
                    material={nodes.head_ears_3.material}
                    position={[0, 0.063, -0.125]}
                    rotation={[-0.78, -0.618, -0.521]}
                  />
                  <mesh
                    name="head_ears_4"
                    castShadow
                    receiveShadow
                    geometry={nodes.head_ears_4.geometry}
                    material={nodes.head_ears_4.material}
                    rotation={[0, -Math.PI / 4, 0]}
                  />
                </group>
                <group name="jaw" position={[0, -0.125, -0.375]}>
                  <mesh
                    name="jaw_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.jaw_1.geometry}
                    material={nodes.jaw_1.material}
                    position={[0, -0.063, 2.063]}
                  />
                  <mesh
                    name="jaw_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.jaw_2.geometry}
                    material={nodes.jaw_2.material}
                    position={[0, -0.063, 2.063]}
                  />
                </group>
              </group>
            </group>
            <group
              name="leftUpperWing"
              position={[-0.5, 0.375, -1.438]}
              rotation={[0, 0, -0.262]}
            >
              <mesh
                name="leftUpperWing_1"
                castShadow
                receiveShadow
                geometry={nodes.leftUpperWing_1.geometry}
                material={nodes.leftUpperWing_1.material}
                position={[0.5, -0.375, 1.438]}
              />
              <mesh
                name="leftUpperWing_2"
                castShadow
                receiveShadow
                geometry={nodes.leftUpperWing_2.geometry}
                material={nodes.leftUpperWing_2.material}
                position={[0.5, -0.375, 1.438]}
              />
              <group
                name="a1"
                position={[-1.063, -0.063, 0]}
                rotation={[0, Math.PI / 9, 0]}
              >
                <mesh
                  name="a1_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.a1_1.geometry}
                  material={nodes.a1_1.material}
                  position={[1.563, -0.313, 1.438]}
                />
                <mesh
                  name="a1_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.a1_2.geometry}
                  material={nodes.a1_2.material}
                  position={[-0.5, 0, 0.125]}
                  rotation={[0.002, 0, 0]}
                />
                <mesh
                  name="a1_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.a1_3.geometry}
                  material={nodes.a1_3.material}
                  position={[-0.938, 0, 0.125]}
                  rotation={[0, 0, 0.087]}
                />
              </group>
            </group>
            <group
              name="leftLowerWing"
              position={[-0.5, 0.063, -0.625]}
              rotation={[0, 0, 0.262]}
            >
              <mesh
                name="leftLowerWing_1"
                castShadow
                receiveShadow
                geometry={nodes.leftLowerWing_1.geometry}
                material={nodes.leftLowerWing_1.material}
                position={[0.5, -0.063, 0.625]}
              />
              <mesh
                name="leftLowerWing_2"
                castShadow
                receiveShadow
                geometry={nodes.leftLowerWing_2.geometry}
                material={nodes.leftLowerWing_2.material}
                position={[0.5, -0.063, 0.625]}
              />
              <group
                name="a3"
                position={[-1.063, -0.063, 0]}
                rotation={[0, Math.PI / 9, 0]}
              >
                <mesh
                  name="a3_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.a3_1.geometry}
                  material={nodes.a3_1.material}
                  position={[1.563, 0, 0.625]}
                />
                <mesh
                  name="a3_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.a3_2.geometry}
                  material={nodes.a3_2.material}
                  position={[-0.5, 0, 0.125]}
                  rotation={[0.002, 0, 0]}
                />
                <mesh
                  name="a3_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.a3_3.geometry}
                  material={nodes.a3_3.material}
                  position={[-0.938, 0, 0.125]}
                  rotation={[0, 0, 0.087]}
                />
              </group>
            </group>
            <group
              name="rightUpperWing"
              position={[0.5, 0.375, -1.438]}
              rotation={[0, 0, 0.262]}
            >
              <mesh
                name="rightUpperWing_1"
                castShadow
                receiveShadow
                geometry={nodes.rightUpperWing_1.geometry}
                material={nodes.rightUpperWing_1.material}
                position={[-0.5, -0.375, 1.438]}
              />
              <mesh
                name="rightUpperWing_2"
                castShadow
                receiveShadow
                geometry={nodes.rightUpperWing_2.geometry}
                material={nodes.rightUpperWing_2.material}
                position={[-0.5, -0.375, 1.438]}
              />
              <group
                name="a2"
                position={[1.063, -0.063, 0]}
                rotation={[0, -Math.PI / 9, 0]}
              >
                <mesh
                  name="a2_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.a2_1.geometry}
                  material={nodes.a2_1.material}
                  position={[-1.563, -0.313, 1.438]}
                />
                <mesh
                  name="a2_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.a2_2.geometry}
                  material={nodes.a2_2.material}
                  position={[0.5, 0, 0.125]}
                  rotation={[0.002, 0, 0]}
                />
                <mesh
                  name="a2_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.a2_3.geometry}
                  material={nodes.a2_3.material}
                  position={[0.938, 0, 0.125]}
                  rotation={[0, 0, -0.087]}
                />
              </group>
            </group>
            <group
              name="rightLowerWing"
              position={[0.5, 0, -0.625]}
              rotation={[0, 0, -0.262]}
            >
              <mesh
                name="rightLowerWing_1"
                castShadow
                receiveShadow
                geometry={nodes.rightLowerWing_1.geometry}
                material={nodes.rightLowerWing_1.material}
                position={[-0.5, 0, 0.625]}
              />
              <mesh
                name="rightLowerWing_2"
                castShadow
                receiveShadow
                geometry={nodes.rightLowerWing_2.geometry}
                material={nodes.rightLowerWing_2.material}
                position={[-0.5, 0, 0.625]}
              />
              <group
                name="a4"
                position={[1.063, -0.063, 0]}
                rotation={[0, -Math.PI / 9, 0]}
              >
                <mesh
                  name="a4_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.a4_1.geometry}
                  material={nodes.a4_1.material}
                  position={[-1.563, 0.063, 0.625]}
                />
                <mesh
                  name="a4_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.a4_2.geometry}
                  material={nodes.a4_2.material}
                  position={[0.5, 0, 0.125]}
                  rotation={[0.002, 0, 0]}
                />
                <mesh
                  name="a4_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.a4_3.geometry}
                  material={nodes.a4_3.material}
                  position={[0.938, 0, 0.125]}
                  rotation={[0, 0, -0.087]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/phantomic_geo.gltf');

export default Model6;
