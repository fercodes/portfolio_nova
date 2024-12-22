import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const Model5 = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/minek_geo.gltf');
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="blockbench_export">
        <group>
          <group name="main" position={[0, 0.188, 0.125]}>
            <mesh
              name="main_1"
              castShadow
              receiveShadow
              geometry={nodes.main_1.geometry}
              material={nodes.main_1.material}
              position={[0, -0.188, -0.125]}
            />
            <mesh
              name="main_2"
              castShadow
              receiveShadow
              geometry={nodes.main_2.geometry}
              material={nodes.main_2.material}
              position={[0, -0.188, -0.125]}
            />
            <mesh
              name="main_3"
              castShadow
              receiveShadow
              geometry={nodes.main_3.geometry}
              material={nodes.main_3.material}
              position={[0, -0.188, -0.125]}
            />
            <mesh
              name="main_4"
              castShadow
              receiveShadow
              geometry={nodes.main_4.geometry}
              material={nodes.main_4.material}
              position={[0, -0.188, -0.125]}
            />
            <mesh
              name="main_5"
              castShadow
              receiveShadow
              geometry={nodes.main_5.geometry}
              material={nodes.main_5.material}
              position={[0, -0.188, -0.125]}
            />
            <group name="seat" position={[0, 0.25, 0.063]}>
              <mesh
                name="seat_1"
                castShadow
                receiveShadow
                geometry={nodes.seat_1.geometry}
                material={nodes.seat_1.material}
                position={[0, -0.438, -0.188]}
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
            <group
              name="leftMotorBack"
              position={[-0.5, 0.438, 0.5]}
              rotation={[-0.253, 0.067, -0.253]}
            >
              <mesh
                name="leftMotorBack_1"
                castShadow
                receiveShadow
                geometry={nodes.leftMotorBack_1.geometry}
                material={nodes.leftMotorBack_1.material}
                position={[0.5, -0.625, -0.625]}
              />
              <mesh
                name="leftMotorBack_2"
                castShadow
                receiveShadow
                geometry={nodes.leftMotorBack_2.geometry}
                material={nodes.leftMotorBack_2.material}
                position={[0.5, -0.625, -0.625]}
              />
              <mesh
                name="leftMotorBack_3"
                castShadow
                receiveShadow
                geometry={nodes.leftMotorBack_3.geometry}
                material={nodes.leftMotorBack_3.material}
                position={[0.5, -0.625, -0.625]}
              />
              <mesh
                name="leftMotorBack_4"
                castShadow
                receiveShadow
                geometry={nodes.leftMotorBack_4.geometry}
                material={nodes.leftMotorBack_4.material}
                position={[0.5, -0.625, -0.625]}
              />
              <group name="ex1" position={[0, -0.563, 0]}>
                <mesh
                  name="ex1_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.ex1_1.geometry}
                  material={nodes.ex1_1.material}
                  position={[0.5, -0.063, -0.625]}
                />
              </group>
              <group name="ex2" position={[0, -0.625, 0]}>
                <mesh
                  name="ex2_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.ex2_1.geometry}
                  material={nodes.ex2_1.material}
                  position={[0.5, 0, -0.625]}
                />
              </group>
              <group name="ex3" position={[0, -0.625, 0]}>
                <mesh
                  name="ex3_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.ex3_1.geometry}
                  material={nodes.ex3_1.material}
                  position={[0.5, 0, -0.625]}
                />
              </group>
            </group>
            <group
              name="rightMotorBack"
              position={[0.5, 0.438, 0.5]}
              rotation={[-0.253, -0.067, 0.253]}
            >
              <mesh
                name="rightMotorBack_1"
                castShadow
                receiveShadow
                geometry={nodes.rightMotorBack_1.geometry}
                material={nodes.rightMotorBack_1.material}
                position={[-0.5, -0.625, -0.625]}
              />
              <mesh
                name="rightMotorBack_2"
                castShadow
                receiveShadow
                geometry={nodes.rightMotorBack_2.geometry}
                material={nodes.rightMotorBack_2.material}
                position={[-0.5, -0.625, -0.625]}
              />
              <mesh
                name="rightMotorBack_3"
                castShadow
                receiveShadow
                geometry={nodes.rightMotorBack_3.geometry}
                material={nodes.rightMotorBack_3.material}
                position={[-0.5, -0.625, -0.625]}
              />
              <mesh
                name="rightMotorBack_4"
                castShadow
                receiveShadow
                geometry={nodes.rightMotorBack_4.geometry}
                material={nodes.rightMotorBack_4.material}
                position={[-0.5, -0.625, -0.625]}
              />
              <group name="ex4" position={[0, -0.563, 0]}>
                <mesh
                  name="ex4_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.ex4_1.geometry}
                  material={nodes.ex4_1.material}
                  position={[-0.5, -0.063, -0.625]}
                />
              </group>
              <group name="ex5" position={[0, -0.625, 0]}>
                <mesh
                  name="ex5_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.ex5_1.geometry}
                  material={nodes.ex5_1.material}
                  position={[-0.5, 0, -0.625]}
                />
              </group>
              <group name="ex6" position={[0, -0.625, 0]}>
                <mesh
                  name="ex6_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.ex6_1.geometry}
                  material={nodes.ex6_1.material}
                  position={[-0.5, 0, -0.625]}
                />
              </group>
            </group>
            <group
              name="leftMotorFront"
              position={[-0.5, 0.438, -0.75]}
              rotation={[0.253, -0.067, -0.253]}
            >
              <mesh
                name="leftMotorFront_1"
                castShadow
                receiveShadow
                geometry={nodes.leftMotorFront_1.geometry}
                material={nodes.leftMotorFront_1.material}
                position={[0.5, -0.625, 0.625]}
              />
              <mesh
                name="leftMotorFront_2"
                castShadow
                receiveShadow
                geometry={nodes.leftMotorFront_2.geometry}
                material={nodes.leftMotorFront_2.material}
                position={[0.5, -0.625, 0.625]}
              />
              <mesh
                name="leftMotorFront_3"
                castShadow
                receiveShadow
                geometry={nodes.leftMotorFront_3.geometry}
                material={nodes.leftMotorFront_3.material}
                position={[0.5, -0.625, 0.625]}
              />
              <mesh
                name="leftMotorFront_4"
                castShadow
                receiveShadow
                geometry={nodes.leftMotorFront_4.geometry}
                material={nodes.leftMotorFront_4.material}
                position={[0.5, -0.625, 0.625]}
              />
              <group name="ex7" position={[0, -0.563, 0]}>
                <mesh
                  name="ex7_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.ex7_1.geometry}
                  material={nodes.ex7_1.material}
                  position={[0.5, -0.063, 0.625]}
                />
              </group>
              <group name="ex8" position={[0, -0.625, 0]}>
                <mesh
                  name="ex8_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.ex8_1.geometry}
                  material={nodes.ex8_1.material}
                  position={[0.5, 0, 0.625]}
                />
              </group>
              <group name="ex9" position={[0, -0.625, 0]}>
                <mesh
                  name="ex9_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.ex9_1.geometry}
                  material={nodes.ex9_1.material}
                  position={[0.5, 0, 0.625]}
                />
              </group>
            </group>
            <group
              name="rightMotorFront"
              position={[0.5, 0.438, -0.75]}
              rotation={[0.253, 0.067, 0.253]}
            >
              <mesh
                name="rightMotorFront_1"
                castShadow
                receiveShadow
                geometry={nodes.rightMotorFront_1.geometry}
                material={nodes.rightMotorFront_1.material}
                position={[-0.5, -0.625, 0.625]}
              />
              <mesh
                name="rightMotorFront_2"
                castShadow
                receiveShadow
                geometry={nodes.rightMotorFront_2.geometry}
                material={nodes.rightMotorFront_2.material}
                position={[-0.5, -0.625, 0.625]}
              />
              <mesh
                name="rightMotorFront_3"
                castShadow
                receiveShadow
                geometry={nodes.rightMotorFront_3.geometry}
                material={nodes.rightMotorFront_3.material}
                position={[-0.5, -0.625, 0.625]}
              />
              <mesh
                name="rightMotorFront_4"
                castShadow
                receiveShadow
                geometry={nodes.rightMotorFront_4.geometry}
                material={nodes.rightMotorFront_4.material}
                position={[-0.5, -0.625, 0.625]}
              />
              <group name="ex10" position={[0, -0.563, 0]}>
                <mesh
                  name="ex10_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.ex10_1.geometry}
                  material={nodes.ex10_1.material}
                  position={[-0.5, -0.063, 0.625]}
                />
              </group>
              <group name="ex11" position={[0, -0.625, 0]}>
                <mesh
                  name="ex11_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.ex11_1.geometry}
                  material={nodes.ex11_1.material}
                  position={[-0.5, 0, 0.625]}
                />
              </group>
              <group name="ex12" position={[0, -0.625, 0]}>
                <mesh
                  name="ex12_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.ex12_1.geometry}
                  material={nodes.ex12_1.material}
                  position={[-0.5, 0, 0.625]}
                />
              </group>
            </group>
            <group name="panel_details" position={[0, 0.594, -0.688]}>
              <mesh
                name="panel_details_1"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_1.geometry}
                material={nodes.panel_details_1.material}
                rotation={[-0.611, 0, 0]}
              />
              <mesh
                name="panel_details_2"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_2.geometry}
                material={nodes.panel_details_2.material}
                position={[0, -0.781, 0.563]}
              />
              <mesh
                name="panel_details_3"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_3.geometry}
                material={nodes.panel_details_3.material}
                position={[0, -0.781, 0.563]}
              />
              <mesh
                name="panel_details_4"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_4.geometry}
                material={nodes.panel_details_4.material}
                position={[-0.313, -0.25, -0.094]}
                rotation={[0, 0, 0.654]}
              />
              <mesh
                name="panel_details_5"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_5.geometry}
                material={nodes.panel_details_5.material}
                position={[0.125, -0.25, -0.094]}
                rotation={[0, 0, 0.742]}
              />
              <mesh
                name="panel_details_6"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_6.geometry}
                material={nodes.panel_details_6.material}
                position={[0, -0.781, 0.563]}
              />
              <mesh
                name="panel_details_7"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_7.geometry}
                material={nodes.panel_details_7.material}
                position={[0, -0.781, 0.563]}
              />
              <mesh
                name="panel_details_8"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_8.geometry}
                material={nodes.panel_details_8.material}
                position={[0, -0.781, 0.563]}
              />
              <mesh
                name="panel_details_9"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_9.geometry}
                material={nodes.panel_details_9.material}
                position={[0, -0.781, 0.563]}
              />
              <mesh
                name="panel_details_10"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_10.geometry}
                material={nodes.panel_details_10.material}
                position={[-0.063, -0.375, -0.094]}
                rotation={[0, 0, 0.654]}
              />
              <mesh
                name="panel_details_11"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_11.geometry}
                material={nodes.panel_details_11.material}
                position={[0, -0.781, 0.563]}
              />
              <mesh
                name="panel_details_12"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_12.geometry}
                material={nodes.panel_details_12.material}
                position={[0, -0.781, 0.563]}
              />
              <mesh
                name="panel_details_13"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_13.geometry}
                material={nodes.panel_details_13.material}
                position={[0, -0.781, 0.563]}
              />
              <mesh
                name="panel_details_14"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_14.geometry}
                material={nodes.panel_details_14.material}
                position={[0, -0.781, 0.563]}
              />
              <mesh
                name="panel_details_15"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_15.geometry}
                material={nodes.panel_details_15.material}
                position={[-0.531, -0.25, 0.313]}
                rotation={[-0.829, 0, 0]}
              />
              <mesh
                name="panel_details_16"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_16.geometry}
                material={nodes.panel_details_16.material}
                position={[0, -0.781, 0.563]}
              />
              <mesh
                name="panel_details_17"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_17.geometry}
                material={nodes.panel_details_17.material}
                position={[0.25, -0.594, 0.188]}
                rotation={[0, 0.567, 0]}
              />
              <mesh
                name="panel_details_18"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_18.geometry}
                material={nodes.panel_details_18.material}
                position={[0.125, -0.594, 0.375]}
                rotation={[0, -0.567, 0]}
              />
              <mesh
                name="panel_details_19"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_19.geometry}
                material={nodes.panel_details_19.material}
                position={[0, -0.781, 0.563]}
              />
              <mesh
                name="panel_details_20"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_20.geometry}
                material={nodes.panel_details_20.material}
                position={[0, -0.781, 0.563]}
              />
              <mesh
                name="panel_details_21"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_21.geometry}
                material={nodes.panel_details_21.material}
                position={[0.531, -0.375, 0.563]}
                rotation={[0.654, 0, 0]}
              />
              <mesh
                name="panel_details_22"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_22.geometry}
                material={nodes.panel_details_22.material}
                position={[0, -0.781, 0.563]}
              />
              <mesh
                name="panel_details_23"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_23.geometry}
                material={nodes.panel_details_23.material}
                position={[0, -0.781, 0.563]}
              />
              <mesh
                name="panel_details_24"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_24.geometry}
                material={nodes.panel_details_24.material}
                position={[0, -0.781, 0.563]}
              />
              <mesh
                name="panel_details_25"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_25.geometry}
                material={nodes.panel_details_25.material}
                position={[0, -0.781, 0.563]}
              />
              <mesh
                name="panel_details_26"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_26.geometry}
                material={nodes.panel_details_26.material}
                position={[0, -0.781, 0.563]}
              />
              <mesh
                name="panel_details_27"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_27.geometry}
                material={nodes.panel_details_27.material}
                position={[0, -0.781, 0.563]}
              />
              <mesh
                name="panel_details_28"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_28.geometry}
                material={nodes.panel_details_28.material}
                position={[-0.531, -0.313, 0.875]}
                rotation={[0.829, 0, 0]}
              />
              <mesh
                name="panel_details_29"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_29.geometry}
                material={nodes.panel_details_29.material}
                position={[0, -0.781, 0.563]}
              />
              <mesh
                name="panel_details_30"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_30.geometry}
                material={nodes.panel_details_30.material}
                position={[0, -0.781, 0.563]}
              />
              <mesh
                name="panel_details_31"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_31.geometry}
                material={nodes.panel_details_31.material}
                position={[0, -0.781, 0.563]}
              />
              <mesh
                name="panel_details_32"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_32.geometry}
                material={nodes.panel_details_32.material}
                position={[0, -0.781, 0.563]}
              />
              <mesh
                name="panel_details_33"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_33.geometry}
                material={nodes.panel_details_33.material}
                position={[0, -0.781, 0.563]}
              />
              <mesh
                name="panel_details_34"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_34.geometry}
                material={nodes.panel_details_34.material}
                position={[-0.25, -0.594, 0.438]}
                rotation={[0, Math.PI / 6, 0]}
              />
              <mesh
                name="panel_details_35"
                castShadow
                receiveShadow
                geometry={nodes.panel_details_35.geometry}
                material={nodes.panel_details_35.material}
                position={[0, -0.781, 0.563]}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/minek_geo.gltf');

export default Model5;
