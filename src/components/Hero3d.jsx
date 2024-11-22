import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Hero3d = (props) => {
  const { nodes, materials } = useGLTF('/models/golem_geo.gltf');

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0.25]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.main_1.geometry}
          material={nodes.main_1.material}
          position={[0, 0, -0.25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.main_2.geometry}
          material={nodes.main_2.material}
          position={[0, 0, -0.25]}
        />
        <group position={[0, 1.188, -0.063]} rotation={[-0.262, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_1.geometry}
            material={nodes.body_1.material}
            position={[0, -1.188, -0.188]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_2.geometry}
            material={nodes.body_2.material}
            position={[0, -1.188, -0.188]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_3.geometry}
            material={nodes.body_3.material}
            position={[0, -1.188, -0.188]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_4.geometry}
            material={nodes.body_4.material}
            position={[0, -1.188, -0.188]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_5.geometry}
            material={nodes.body_5.material}
            position={[0, -1.188, -0.188]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_6.geometry}
            material={nodes.body_6.material}
            position={[0, -1.188, -0.188]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_7.geometry}
            material={nodes.body_7.material}
            position={[0, -1.188, -0.188]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_8.geometry}
            material={nodes.body_8.material}
            position={[0, -1.188, -0.188]}
          />
          <group position={[0, -1.188, -0.188]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.dbits1_1.geometry}
              material={nodes.dbits1_1.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.dbits1_2.geometry}
              material={nodes.dbits1_2.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.dbits1_3.geometry}
              material={nodes.dbits1_3.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.dbits1_4.geometry}
              material={nodes.dbits1_4.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.dbits1_5.geometry}
              material={nodes.dbits1_5.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.dbits1_6.geometry}
              material={nodes.dbits1_6.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.dbits1_7.geometry}
              material={nodes.dbits1_7.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.dbits1_8.geometry}
              material={nodes.dbits1_8.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.dbits1_9.geometry}
              material={nodes.dbits1_9.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.dbits1_10.geometry}
              material={nodes.dbits1_10.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.dbits1_11.geometry}
              material={nodes.dbits1_11.material}
            />
          </group>
          <group position={[0, 1.031, -0.156]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.head_1.geometry}
              material={nodes.head_1.material}
              position={[0, -2.219, -0.031]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.head_2.geometry}
              material={nodes.head_2.material}
              position={[0, -2.219, -0.031]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.head_3.geometry}
              material={nodes.head_3.material}
              position={[0, -2.219, -0.031]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.head_4.geometry}
              material={nodes.head_4.material}
              position={[0, -2.219, -0.031]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.head_5.geometry}
              material={nodes.head_5.material}
              position={[0, -2.219, -0.031]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.head_6.geometry}
              material={nodes.head_6.material}
              position={[0, -2.219, -0.031]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.head_7.geometry}
              material={nodes.head_7.material}
              position={[0, -2.219, -0.031]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.head_8.geometry}
              material={nodes.head_8.material}
              position={[0, -2.219, -0.031]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.head_9.geometry}
              material={nodes.head_9.material}
              position={[0, -2.219, -0.031]}
            />
            <group position={[0, 0.031, -0.219]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.eyeBottom_1.geometry}
                material={nodes.eyeBottom_1.material}
                position={[0, -2.25, 0.188]}
              />
            </group>
            <group position={[0, 0.656, -0.281]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.eyeTop_1.geometry}
                material={nodes.eyeTop_1.material}
                position={[0, -2.875, 0.25]}
              />
            </group>
          </group>
          <group position={[-0.688, 0.625, -0.125]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leftArm_1.geometry}
              material={nodes.leftArm_1.material}
              position={[0.688, -1.813, -0.063]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leftArm_2.geometry}
              material={nodes.leftArm_2.material}
              position={[0.688, -1.813, -0.063]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leftArm_3.geometry}
              material={nodes.leftArm_3.material}
              position={[0.688, -1.813, -0.063]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leftArm_4.geometry}
              material={nodes.leftArm_4.material}
              position={[0.688, -1.813, -0.063]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leftArm_5.geometry}
              material={nodes.leftArm_5.material}
              position={[0.688, -1.813, -0.063]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leftArm_6.geometry}
              material={nodes.leftArm_6.material}
              position={[0.688, -1.813, -0.063]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leftArm_7.geometry}
              material={nodes.leftArm_7.material}
              position={[0.688, -1.813, -0.063]}
            />
            <group position={[-0.188, -0.563, 0]} rotation={[0.175, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leftMidArm_1.geometry}
                material={nodes.leftMidArm_1.material}
                position={[0.875, -1.25, -0.063]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leftMidArm_2.geometry}
                material={nodes.leftMidArm_2.material}
                position={[0.875, -1.25, -0.063]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leftMidArm_3.geometry}
                material={nodes.leftMidArm_3.material}
                position={[0.875, -1.25, -0.063]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.leftMidArm_4.geometry}
                material={nodes.leftMidArm_4.material}
                position={[0.875, -1.25, -0.063]}
              />
              <group
                position={[-0.188, -0.438, -0.125]}
                rotation={[0.087, 0, 0]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.leftFist_1.geometry}
                  material={nodes.leftFist_1.material}
                  position={[1.063, -0.813, 0.063]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.leftFist_2.geometry}
                  material={nodes.leftFist_2.material}
                  position={[1.063, -0.813, 0.063]}
                />
                <group
                  position={[-0.188, -0.25, -0.063]}
                  rotation={[0, 0, -0.262]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.leftFingerFist_1.geometry}
                    material={nodes.leftFingerFist_1.material}
                    position={[1.25, -0.563, 0.125]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.leftFingerFist_2.geometry}
                    material={nodes.leftFingerFist_2.material}
                    position={[1.25, -0.563, 0.125]}
                  />
                </group>
              </group>
            </group>
          </group>
          <group position={[0.688, 0.625, -0.125]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rightArm_1.geometry}
              material={nodes.rightArm_1.material}
              position={[-0.688, -1.813, -0.063]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rightArm_2.geometry}
              material={nodes.rightArm_2.material}
              position={[-0.688, -1.813, -0.063]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rightArm_3.geometry}
              material={nodes.rightArm_3.material}
              position={[-0.688, -1.813, -0.063]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rightArm_4.geometry}
              material={nodes.rightArm_4.material}
              position={[-0.688, -1.813, -0.063]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rightArm_5.geometry}
              material={nodes.rightArm_5.material}
              position={[-0.688, -1.813, -0.063]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rightArm_6.geometry}
              material={nodes.rightArm_6.material}
              position={[-0.688, -1.813, -0.063]}
            />
            <group position={[0.188, -0.563, 0]} rotation={[0.175, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.rightMidArm_1.geometry}
                material={nodes.rightMidArm_1.material}
                position={[-0.875, -1.25, -0.063]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.rightMidArm_2.geometry}
                material={nodes.rightMidArm_2.material}
                position={[-0.875, -1.25, -0.063]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.rightMidArm_3.geometry}
                material={nodes.rightMidArm_3.material}
                position={[-0.875, -1.25, -0.063]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.rightMidArm_4.geometry}
                material={nodes.rightMidArm_4.material}
                position={[-0.875, -1.25, -0.063]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.rightMidArm_5.geometry}
                material={nodes.rightMidArm_5.material}
                position={[-0.875, -1.25, -0.063]}
              />
              <group
                position={[0.188, -0.438, -0.125]}
                rotation={[0.087, 0, 0]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.rightFist_1.geometry}
                  material={nodes.rightFist_1.material}
                  position={[-1.063, -0.813, 0.063]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.rightFist_2.geometry}
                  material={nodes.rightFist_2.material}
                  position={[-1.063, -0.813, 0.063]}
                />
                <group
                  position={[0.188, -0.25, -0.063]}
                  rotation={[0, 0, 0.262]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.rightFingerFist_1.geometry}
                    material={nodes.rightFingerFist_1.material}
                    position={[-1.25, -0.563, 0.125]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.rightFingerFist_2.geometry}
                    material={nodes.rightFingerFist_2.material}
                    position={[-1.25, -0.563, 0.125]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group position={[0.313, 0.938, -0.125]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rightLegTop_1.geometry}
            material={nodes.rightLegTop_1.material}
            position={[-0.313, -0.938, -0.125]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rightLegTop_2.geometry}
            material={nodes.rightLegTop_2.material}
            position={[-0.313, -0.938, -0.125]}
          />
          <group position={[0.125, -0.438, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rightLegBottom_1.geometry}
              material={nodes.rightLegBottom_1.material}
              position={[-0.438, -0.5, -0.125]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rightLegBottom_2.geometry}
              material={nodes.rightLegBottom_2.material}
              position={[-0.438, -0.5, -0.125]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rightLegBottom_3.geometry}
              material={nodes.rightLegBottom_3.material}
              position={[-0.438, -0.5, -0.125]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rightLegBottom_4.geometry}
              material={nodes.rightLegBottom_4.material}
              position={[-0.438, -0.5, -0.125]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rightLegBottom_5.geometry}
              material={nodes.rightLegBottom_5.material}
              position={[-0.438, -0.5, -0.125]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rightLegBottom_6.geometry}
              material={nodes.rightLegBottom_6.material}
              position={[-0.438, -0.5, -0.125]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rightLegBottom_7.geometry}
              material={nodes.rightLegBottom_7.material}
              position={[-0.438, -0.5, -0.125]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rightLegBottom_8.geometry}
              material={nodes.rightLegBottom_8.material}
              position={[-0.438, -0.5, -0.125]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rightLegBottom_9.geometry}
              material={nodes.rightLegBottom_9.material}
              position={[-0.438, -0.5, -0.125]}
            />
          </group>
        </group>
        <group position={[-0.313, 0.938, -0.125]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.leftLegTop_1.geometry}
            material={nodes.leftLegTop_1.material}
            position={[0.313, -0.938, -0.125]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.leftLegTop_2.geometry}
            material={nodes.leftLegTop_2.material}
            position={[0.313, -0.938, -0.125]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.leftLegTop_3.geometry}
            material={nodes.leftLegTop_3.material}
            position={[0.313, -0.938, -0.125]}
          />
          <group position={[-0.188, -0.375, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leftLegBottom_1.geometry}
              material={nodes.leftLegBottom_1.material}
              position={[0.5, -0.563, -0.125]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leftLegBottom_2.geometry}
              material={nodes.leftLegBottom_2.material}
              position={[0.5, -0.563, -0.125]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leftLegBottom_3.geometry}
              material={nodes.leftLegBottom_3.material}
              position={[0.5, -0.563, -0.125]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leftLegBottom_4.geometry}
              material={nodes.leftLegBottom_4.material}
              position={[0.5, -0.563, -0.125]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leftLegBottom_5.geometry}
              material={nodes.leftLegBottom_5.material}
              position={[0.5, -0.563, -0.125]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leftLegBottom_6.geometry}
              material={nodes.leftLegBottom_6.material}
              position={[0.5, -0.563, -0.125]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leftLegBottom_7.geometry}
              material={nodes.leftLegBottom_7.material}
              position={[0.5, -0.563, -0.125]}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/golem_geo.gltf');

export default Hero3d;
