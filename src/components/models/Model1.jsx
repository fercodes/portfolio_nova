import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const Model1 = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/endo_geo.gltf');
  const { actions } = useAnimations(animations, group);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="blockbench_export">
        <group>
          <group name="main">
            <group name="chasis" position={[0, 0, -0.25]}>
              <mesh
                name="chasis_1"
                castShadow
                receiveShadow
                geometry={nodes.chasis_1.geometry}
                material={nodes.chasis_1.material}
                position={[0, 0, 0.25]}
              />
              <mesh
                name="chasis_2"
                castShadow
                receiveShadow
                geometry={nodes.chasis_2.geometry}
                material={nodes.chasis_2.material}
                position={[0, 0, 0.25]}
              />
              <mesh
                name="chasis_3"
                castShadow
                receiveShadow
                geometry={nodes.chasis_3.geometry}
                material={nodes.chasis_3.material}
                position={[0, 0.375, -0.313]}
                rotation={[Math.PI / 6, 0, 0]}
              />
              <mesh
                name="chasis_4"
                castShadow
                receiveShadow
                geometry={nodes.chasis_4.geometry}
                material={nodes.chasis_4.material}
                position={[0, 0, 0.25]}
              />
              <mesh
                name="chasis_5"
                castShadow
                receiveShadow
                geometry={nodes.chasis_5.geometry}
                material={nodes.chasis_5.material}
                position={[0, 0, 0.25]}
              />
              <mesh
                name="chasis_6"
                castShadow
                receiveShadow
                geometry={nodes.chasis_6.geometry}
                material={nodes.chasis_6.material}
                position={[0, 0.188, 0.625]}
                rotation={[0.829, 0, 0]}
              />
              <mesh
                name="chasis_7"
                castShadow
                receiveShadow
                geometry={nodes.chasis_7.geometry}
                material={nodes.chasis_7.material}
                position={[0, 0, 0.25]}
              />
              <mesh
                name="chasis_8"
                castShadow
                receiveShadow
                geometry={nodes.chasis_8.geometry}
                material={nodes.chasis_8.material}
                position={[0, 0, 0.25]}
              />
              <group name="seat" position={[0, 0.438, 0.563]}>
                <mesh
                  name="seat_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.seat_1.geometry}
                  material={nodes.seat_1.material}
                  position={[0, -0.438, -0.313]}
                />
                <mesh
                  name="seat_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.seat_2.geometry}
                  material={nodes.seat_2.material}
                  rotation={[0.305, 0, 0]}
                />
              </group>
            </group>
            <group
              name="leftWing"
              position={[-0.313, 0.438, -0.063]}
              rotation={[0, 0, -0.436]}
            >
              <mesh
                name="leftWing_1"
                castShadow
                receiveShadow
                geometry={nodes.leftWing_1.geometry}
                material={nodes.leftWing_1.material}
                position={[0.313, -0.438, 0.063]}
              />
              <mesh
                name="leftWing_2"
                castShadow
                receiveShadow
                geometry={nodes.leftWing_2.geometry}
                material={nodes.leftWing_2.material}
                position={[0.313, -0.438, 0.063]}
              />
              <mesh
                name="leftWing_3"
                castShadow
                receiveShadow
                geometry={nodes.leftWing_3.geometry}
                material={nodes.leftWing_3.material}
                position={[0.313, -0.438, 0.063]}
              />
              <mesh
                name="leftWing_4"
                castShadow
                receiveShadow
                geometry={nodes.leftWing_4.geometry}
                material={nodes.leftWing_4.material}
                position={[0.313, -0.438, 0.063]}
              />
              <mesh
                name="leftWing_5"
                castShadow
                receiveShadow
                geometry={nodes.leftWing_5.geometry}
                material={nodes.leftWing_5.material}
                position={[0.313, -0.438, 0.063]}
              />
              <mesh
                name="leftWing_6"
                castShadow
                receiveShadow
                geometry={nodes.leftWing_6.geometry}
                material={nodes.leftWing_6.material}
                position={[0.313, -0.438, 0.063]}
              />
              <mesh
                name="leftWing_7"
                castShadow
                receiveShadow
                geometry={nodes.leftWing_7.geometry}
                material={nodes.leftWing_7.material}
                position={[0.313, -0.438, 0.063]}
              />
              <mesh
                name="leftWing_8"
                castShadow
                receiveShadow
                geometry={nodes.leftWing_8.geometry}
                material={nodes.leftWing_8.material}
                position={[0.313, -0.438, 0.063]}
              />
              <mesh
                name="leftWing_9"
                castShadow
                receiveShadow
                geometry={nodes.leftWing_9.geometry}
                material={nodes.leftWing_9.material}
                position={[-0.217, -0.18, -0.313]}
                rotation={[-0.418, 0.569, 0.235]}
              />
              <mesh
                name="leftWing_10"
                castShadow
                receiveShadow
                geometry={nodes.leftWing_10.geometry}
                material={nodes.leftWing_10.material}
                position={[0.313, -0.438, 0.063]}
              />
              <mesh
                name="leftWing_11"
                castShadow
                receiveShadow
                geometry={nodes.leftWing_11.geometry}
                material={nodes.leftWing_11.material}
                position={[0.313, -0.438, 0.063]}
              />
              <mesh
                name="leftWing_12"
                castShadow
                receiveShadow
                geometry={nodes.leftWing_12.geometry}
                material={nodes.leftWing_12.material}
                position={[0.313, -0.438, 0.063]}
              />
              <mesh
                name="leftWing_13"
                castShadow
                receiveShadow
                geometry={nodes.leftWing_13.geometry}
                material={nodes.leftWing_13.material}
                position={[0.313, -0.438, 0.063]}
              />
              <mesh
                name="leftWing_14"
                castShadow
                receiveShadow
                geometry={nodes.leftWing_14.geometry}
                material={nodes.leftWing_14.material}
                position={[0.313, -0.438, 0.063]}
              />
              <mesh
                name="leftWing_15"
                castShadow
                receiveShadow
                geometry={nodes.leftWing_15.geometry}
                material={nodes.leftWing_15.material}
                position={[0.313, -0.438, 0.063]}
              />
              <group name="leftEx1" position={[-0.373, -0.274, -0.125]}>
                <mesh
                  name="leftEx1_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.leftEx1_1.geometry}
                  material={nodes.leftEx1_1.material}
                  position={[0.686, -0.164, 0.188]}
                />
                <mesh
                  name="leftEx1_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.leftEx1_2.geometry}
                  material={nodes.leftEx1_2.material}
                  position={[0.686, -0.164, 0.188]}
                />
                <mesh
                  name="leftEx1_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.leftEx1_3.geometry}
                  material={nodes.leftEx1_3.material}
                  position={[0.686, -0.164, 0.188]}
                />
                <mesh
                  name="leftEx1_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.leftEx1_4.geometry}
                  material={nodes.leftEx1_4.material}
                  position={[0.686, -0.164, 0.188]}
                />
              </group>
              <group name="leftEx2" position={[-0.373, -0.274, 0.063]}>
                <mesh
                  name="leftEx2_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.leftEx2_1.geometry}
                  material={nodes.leftEx2_1.material}
                  position={[0.686, -0.164, 0]}
                />
                <mesh
                  name="leftEx2_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.leftEx2_2.geometry}
                  material={nodes.leftEx2_2.material}
                  position={[0.686, -0.164, 0]}
                />
                <mesh
                  name="leftEx2_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.leftEx2_3.geometry}
                  material={nodes.leftEx2_3.material}
                  position={[0.686, -0.164, 0]}
                />
                <mesh
                  name="leftEx2_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.leftEx2_4.geometry}
                  material={nodes.leftEx2_4.material}
                  position={[0.686, -0.164, 0]}
                />
              </group>
              <group name="leftEx3" position={[-0.373, -0.274, 0.25]}>
                <mesh
                  name="leftEx3_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.leftEx3_1.geometry}
                  material={nodes.leftEx3_1.material}
                  position={[0.686, -0.164, -0.188]}
                />
                <mesh
                  name="leftEx3_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.leftEx3_2.geometry}
                  material={nodes.leftEx3_2.material}
                  position={[0.686, -0.164, -0.188]}
                />
                <mesh
                  name="leftEx3_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.leftEx3_3.geometry}
                  material={nodes.leftEx3_3.material}
                  position={[0.686, -0.164, -0.188]}
                />
                <mesh
                  name="leftEx3_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.leftEx3_4.geometry}
                  material={nodes.leftEx3_4.material}
                  position={[0.686, -0.164, -0.188]}
                />
              </group>
            </group>
            <group
              name="rightWing"
              position={[0.313, 0.438, -0.063]}
              rotation={[0, 0, 0.436]}
            >
              <mesh
                name="rightWing_1"
                castShadow
                receiveShadow
                geometry={nodes.rightWing_1.geometry}
                material={nodes.rightWing_1.material}
                position={[-0.313, -0.438, 0.063]}
              />
              <mesh
                name="rightWing_2"
                castShadow
                receiveShadow
                geometry={nodes.rightWing_2.geometry}
                material={nodes.rightWing_2.material}
                position={[-0.313, -0.438, 0.063]}
              />
              <mesh
                name="rightWing_3"
                castShadow
                receiveShadow
                geometry={nodes.rightWing_3.geometry}
                material={nodes.rightWing_3.material}
                position={[-0.313, -0.438, 0.063]}
              />
              <mesh
                name="rightWing_4"
                castShadow
                receiveShadow
                geometry={nodes.rightWing_4.geometry}
                material={nodes.rightWing_4.material}
                position={[-0.313, -0.438, 0.063]}
              />
              <mesh
                name="rightWing_5"
                castShadow
                receiveShadow
                geometry={nodes.rightWing_5.geometry}
                material={nodes.rightWing_5.material}
                position={[-0.313, -0.438, 0.063]}
              />
              <mesh
                name="rightWing_6"
                castShadow
                receiveShadow
                geometry={nodes.rightWing_6.geometry}
                material={nodes.rightWing_6.material}
                position={[-0.313, -0.438, 0.063]}
              />
              <mesh
                name="rightWing_7"
                castShadow
                receiveShadow
                geometry={nodes.rightWing_7.geometry}
                material={nodes.rightWing_7.material}
                position={[-0.313, -0.438, 0.063]}
              />
              <mesh
                name="rightWing_8"
                castShadow
                receiveShadow
                geometry={nodes.rightWing_8.geometry}
                material={nodes.rightWing_8.material}
                position={[-0.313, -0.438, 0.063]}
              />
              <mesh
                name="rightWing_9"
                castShadow
                receiveShadow
                geometry={nodes.rightWing_9.geometry}
                material={nodes.rightWing_9.material}
                position={[0.217, -0.18, -0.313]}
                rotation={[-0.418, -0.569, -0.235]}
              />
              <mesh
                name="rightWing_10"
                castShadow
                receiveShadow
                geometry={nodes.rightWing_10.geometry}
                material={nodes.rightWing_10.material}
                position={[-0.313, -0.438, 0.063]}
              />
              <mesh
                name="rightWing_11"
                castShadow
                receiveShadow
                geometry={nodes.rightWing_11.geometry}
                material={nodes.rightWing_11.material}
                position={[-0.313, -0.438, 0.063]}
              />
              <mesh
                name="rightWing_12"
                castShadow
                receiveShadow
                geometry={nodes.rightWing_12.geometry}
                material={nodes.rightWing_12.material}
                position={[-0.313, -0.438, 0.063]}
              />
              <mesh
                name="rightWing_13"
                castShadow
                receiveShadow
                geometry={nodes.rightWing_13.geometry}
                material={nodes.rightWing_13.material}
                position={[-0.313, -0.438, 0.063]}
              />
              <mesh
                name="rightWing_14"
                castShadow
                receiveShadow
                geometry={nodes.rightWing_14.geometry}
                material={nodes.rightWing_14.material}
                position={[-0.313, -0.438, 0.063]}
              />
              <mesh
                name="rightWing_15"
                castShadow
                receiveShadow
                geometry={nodes.rightWing_15.geometry}
                material={nodes.rightWing_15.material}
                position={[-0.313, -0.438, 0.063]}
              />
              <group name="rightEx1" position={[0.373, -0.274, -0.125]}>
                <mesh
                  name="rightEx1_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.rightEx1_1.geometry}
                  material={nodes.rightEx1_1.material}
                  position={[-0.686, -0.164, 0.188]}
                />
                <mesh
                  name="rightEx1_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.rightEx1_2.geometry}
                  material={nodes.rightEx1_2.material}
                  position={[-0.686, -0.164, 0.188]}
                />
                <mesh
                  name="rightEx1_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.rightEx1_3.geometry}
                  material={nodes.rightEx1_3.material}
                  position={[-0.686, -0.164, 0.188]}
                />
                <mesh
                  name="rightEx1_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.rightEx1_4.geometry}
                  material={nodes.rightEx1_4.material}
                  position={[-0.686, -0.164, 0.188]}
                />
              </group>
              <group name="rightEx2" position={[0.373, -0.274, 0.063]}>
                <mesh
                  name="rightEx2_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.rightEx2_1.geometry}
                  material={nodes.rightEx2_1.material}
                  position={[-0.686, -0.164, 0]}
                />
                <mesh
                  name="rightEx2_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.rightEx2_2.geometry}
                  material={nodes.rightEx2_2.material}
                  position={[-0.686, -0.164, 0]}
                />
                <mesh
                  name="rightEx2_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.rightEx2_3.geometry}
                  material={nodes.rightEx2_3.material}
                  position={[-0.686, -0.164, 0]}
                />
                <mesh
                  name="rightEx2_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.rightEx2_4.geometry}
                  material={nodes.rightEx2_4.material}
                  position={[-0.686, -0.164, 0]}
                />
              </group>
              <group name="rightEx3" position={[0.373, -0.274, 0.25]}>
                <mesh
                  name="rightEx3_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.rightEx3_1.geometry}
                  material={nodes.rightEx3_1.material}
                  position={[-0.686, -0.164, -0.188]}
                />
                <mesh
                  name="rightEx3_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.rightEx3_2.geometry}
                  material={nodes.rightEx3_2.material}
                  position={[-0.686, -0.164, -0.188]}
                />
                <mesh
                  name="rightEx3_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.rightEx3_3.geometry}
                  material={nodes.rightEx3_3.material}
                  position={[-0.686, -0.164, -0.188]}
                />
                <mesh
                  name="rightEx3_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.rightEx3_4.geometry}
                  material={nodes.rightEx3_4.material}
                  position={[-0.686, -0.164, -0.188]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/endo_geo.gltf');

export default Model1;
