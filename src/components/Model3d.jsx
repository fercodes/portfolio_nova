import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const Model3d = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    '/models/fire_crab_geo.gltf'
  );

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="blockbench_export">
        <group>
          <group
            name="main"
            position={[0, 0.188, 0]}
            rotation={[0, Math.PI / 2, 0]}
          >
            <group name="body">
              <mesh
                name="body_1"
                castShadow
                receiveShadow
                geometry={nodes.body_1.geometry}
                material={nodes.body_1.material}
                position={[0, -0.188, 0]}
              />
              <mesh
                name="body_2"
                castShadow
                receiveShadow
                geometry={nodes.body_2.geometry}
                material={nodes.body_2.material}
                position={[0, 0.25, 0.188]}
                rotation={[0.087, 0, 0]}
              />
              <mesh
                name="body_3"
                castShadow
                receiveShadow
                geometry={nodes.body_3.geometry}
                material={nodes.body_3.material}
                position={[0, 0.25, 0.188]}
                rotation={[0.087, 0, 0]}
              />
              <group name="leftEye" position={[-0.188, 0.375, -0.438]}>
                <mesh
                  name="leftEye_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.leftEye_1.geometry}
                  material={nodes.leftEye_1.material}
                  rotation={[-Math.PI / 9, 0, 0.305]}
                />
              </group>
              <group name="RightEye" position={[0.188, 0.375, -0.438]}>
                <mesh
                  name="RightEye_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.RightEye_1.geometry}
                  material={nodes.RightEye_1.material}
                  rotation={[-Math.PI / 9, 0, -0.305]}
                />
              </group>
            </group>
            <group
              name="left_leg1"
              position={[-0.5, 0.156, -0.281]}
              rotation={[-0.094, -0.337, -0.278]}
            >
              <mesh
                name="left_leg1_1"
                castShadow
                receiveShadow
                geometry={nodes.left_leg1_1.geometry}
                material={nodes.left_leg1_1.material}
                position={[0.5, -0.344, 0.281]}
              />
              <group
                name="left_ll1"
                position={[-0.563, -0.094, 0]}
                rotation={[0, 0, -0.436]}
              >
                <mesh
                  name="left_ll1_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.left_ll1_1.geometry}
                  material={nodes.left_ll1_1.material}
                  position={[1.063, -0.25, 0.281]}
                />
              </group>
            </group>
            <group
              name="left_pinzab"
              position={[-0.375, 0.156, -0.406]}
              rotation={[0.04, -1.095, -0.4]}
            >
              <mesh
                name="left_pinzab_1"
                castShadow
                receiveShadow
                geometry={nodes.left_pinzab_1.geometry}
                material={nodes.left_pinzab_1.material}
                position={[0.375, -0.344, 0.406]}
              />
              <group
                name="left_pinza"
                position={[-0.563, -0.094, 0]}
                rotation={[0.038, -0.17, 0.221]}
              >
                <mesh
                  name="left_pinza_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.left_pinza_1.geometry}
                  material={nodes.left_pinza_1.material}
                  position={[0.938, -0.25, 0.406]}
                />
                <group name="Left_pp" position={[0.063, 0, -0.063]}>
                  <mesh
                    name="Left_pp_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Left_pp_1.geometry}
                    material={nodes.Left_pp_1.material}
                    position={[0.875, -0.25, 0.469]}
                  />
                </group>
              </group>
            </group>
            <group
              name="right_pinzab"
              position={[0.375, 0.156, -0.406]}
              rotation={[0.04, 1.095, 0.4]}
            >
              <mesh
                name="right_pinzab_1"
                castShadow
                receiveShadow
                geometry={nodes.right_pinzab_1.geometry}
                material={nodes.right_pinzab_1.material}
                position={[-0.375, -0.344, 0.406]}
              />
              <group
                name="right_pinza"
                position={[0.563, -0.094, 0]}
                rotation={[0.038, 0.17, -0.221]}
              >
                <mesh
                  name="right_pinza_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.right_pinza_1.geometry}
                  material={nodes.right_pinza_1.material}
                  position={[-0.938, -0.25, 0.406]}
                />
                <group name="Right_pp" position={[-0.063, 0, -0.063]}>
                  <mesh
                    name="Right_pp_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Right_pp_1.geometry}
                    material={nodes.Right_pp_1.material}
                    position={[-0.875, -0.25, 0.469]}
                  />
                </group>
              </group>
            </group>
            <group
              name="right_leg1"
              position={[0.5, 0.156, -0.281]}
              rotation={[-0.094, 0.337, 0.278]}
            >
              <mesh
                name="right_leg1_1"
                castShadow
                receiveShadow
                geometry={nodes.right_leg1_1.geometry}
                material={nodes.right_leg1_1.material}
                position={[-0.5, -0.344, 0.281]}
              />
              <group
                name="right_ll1"
                position={[0.563, -0.094, 0]}
                rotation={[0, 0, 0.436]}
              >
                <mesh
                  name="right_ll1_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.right_ll1_1.geometry}
                  material={nodes.right_ll1_1.material}
                  position={[-1.063, -0.25, 0.281]}
                />
              </group>
            </group>
            <group
              name="right_leg2"
              position={[0.5, 0.156, -0.031]}
              rotation={[0, 0, 0.262]}
            >
              <mesh
                name="right_leg2_1"
                castShadow
                receiveShadow
                geometry={nodes.right_leg2_1.geometry}
                material={nodes.right_leg2_1.material}
                position={[-0.5, -0.344, 0.031]}
              />
              <group
                name="right_ll2"
                position={[0.563, -0.094, 0]}
                rotation={[0, 0, 0.436]}
              >
                <mesh
                  name="right_ll2_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.right_ll2_1.geometry}
                  material={nodes.right_ll2_1.material}
                  position={[-1.063, -0.25, 0.031]}
                />
              </group>
            </group>
            <group
              name="right_leg3"
              position={[0.438, 0.156, 0.219]}
              rotation={[0.094, -0.337, 0.278]}
            >
              <mesh
                name="right_leg3_1"
                castShadow
                receiveShadow
                geometry={nodes.right_leg3_1.geometry}
                material={nodes.right_leg3_1.material}
                position={[-0.438, -0.344, -0.219]}
              />
              <group name="right_ll3" position={[0.563, -0.094, 0]}>
                <mesh
                  name="right_ll3_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.right_ll3_1.geometry}
                  material={nodes.right_ll3_1.material}
                  rotation={[0, 0, 0.436]}
                />
              </group>
            </group>
            <group
              name="right_leg4"
              position={[0.375, 0.156, 0.469]}
              rotation={[0.354, -0.913, 0.437]}
            >
              <mesh
                name="right_leg4_1"
                castShadow
                receiveShadow
                geometry={nodes.right_leg4_1.geometry}
                material={nodes.right_leg4_1.material}
                position={[-0.375, -0.344, -0.469]}
              />
              <group name="right_ll4" position={[0.563, -0.094, 0]}>
                <mesh
                  name="right_ll4_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.right_ll4_1.geometry}
                  material={nodes.right_ll4_1.material}
                  rotation={[0, 0, 0.436]}
                />
              </group>
            </group>
            <group
              name="left_leg2"
              position={[-0.5, 0.156, -0.031]}
              rotation={[0, 0, -0.262]}
            >
              <mesh
                name="left_leg2_1"
                castShadow
                receiveShadow
                geometry={nodes.left_leg2_1.geometry}
                material={nodes.left_leg2_1.material}
                position={[0.5, -0.344, 0.031]}
              />
              <group
                name="left_ll2"
                position={[-0.563, -0.094, 0]}
                rotation={[0, 0, -0.436]}
              >
                <mesh
                  name="left_ll2_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.left_ll2_1.geometry}
                  material={nodes.left_ll2_1.material}
                  position={[1.063, -0.25, 0.031]}
                />
              </group>
            </group>
            <group
              name="left_leg3"
              position={[-0.438, 0.156, 0.219]}
              rotation={[0.094, 0.337, -0.278]}
            >
              <mesh
                name="left_leg3_1"
                castShadow
                receiveShadow
                geometry={nodes.left_leg3_1.geometry}
                material={nodes.left_leg3_1.material}
                position={[0.438, -0.344, -0.219]}
              />
              <group
                name="left_ll3"
                position={[-0.563, -0.094, 0]}
                rotation={[0, 0, -0.436]}
              >
                <mesh
                  name="left_ll3_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.left_ll3_1.geometry}
                  material={nodes.left_ll3_1.material}
                  position={[1, -0.25, -0.219]}
                />
              </group>
            </group>
            <group
              name="left_leg4"
              position={[-0.375, 0.156, 0.469]}
              rotation={[0.354, 0.913, -0.437]}
            >
              <mesh
                name="left_leg4_1"
                castShadow
                receiveShadow
                geometry={nodes.left_leg4_1.geometry}
                material={nodes.left_leg4_1.material}
                position={[0.375, -0.344, -0.469]}
              />
              <group
                name="left_ll4"
                position={[-0.563, -0.094, 0]}
                rotation={[0, 0, -0.436]}
              >
                <mesh
                  name="left_ll4_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.left_ll4_1.geometry}
                  material={nodes.left_ll4_1.material}
                  position={[0.938, -0.25, -0.469]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/fire_crab_geo.gltf');

export default Model3d;
