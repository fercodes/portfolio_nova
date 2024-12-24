import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Background3d = (props) => {
  const { nodes, materials } = useGLTF('/models/background.glb');
  return (
    <group {...props} dispose={null}>
      <group position={[-0.375, 0, 1.125]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube001.geometry}
          material={materials['Material_0.001']}
          position={[0, 1.313, 0.063]}
          rotation={[0.175, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube002.geometry}
          material={materials['Material_0.001']}
          position={[0, 0.625, -0.031]}
          rotation={[-0.175, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube003.geometry}
          material={materials['Material_0.001']}
          position={[0, 0.313, -0.063]}
          rotation={[0.085, 0.019, 0.217]}
        />
        <group position={[0.563, 2.25, 0.625]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cube009.geometry}
            material={materials['Material_0.001']}
            position={[0.125, 0.125, -0.75]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cube010.geometry}
            material={materials['Material_0.001']}
            position={[0, 0.313, -0.313]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cube011.geometry}
            material={materials['Material_0.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cube012.geometry}
            material={materials['Material_0.001']}
            position={[0.125, -0.438, -0.688]}
          />
        </group>
        <group position={[-1.125, 2.188, -0.25]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cube013.geometry}
            material={materials['Material_0.001']}
            position={[0.125, -0.188, -0.125]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cube014.geometry}
            material={materials['Material_0.001']}
            position={[0.75, -0.063, 0.75]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cube015.geometry}
            material={materials['Material_0.001']}
            position={[0.188, -0.375, 0.375]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cube016.geometry}
            material={materials['Material_0.001']}
            position={[1, 0.063, 0.875]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cube017.geometry}
            material={materials['Material_0.001']}
            position={[0.906, -0.344, 0.844]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cube018.geometry}
            material={materials['Material_0.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cube019.geometry}
            material={materials['Material_0.001']}
            position={[0.375, -0.188, 0.813]}
          />
        </group>
        <group position={[-0.125, 1.313, 0.125]} rotation={[0, 0, 0.175]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cube004.geometry}
            material={materials['Material_0.001']}
            rotation={[0.313, -0.045, 0.564]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cube005.geometry}
            material={materials['Material_0.001']}
            position={[-0.188, 0.313, 0.125]}
            rotation={[0.821, -0.083, -0.202]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cube006.geometry}
            material={materials['Material_0.001']}
            position={[-0.22, 0.45, 0.044]}
            rotation={[-1.215, 0.548, 0.73]}
          />
        </group>
        <group position={[0.125, 1.313, 0.188]} rotation={[-0.175, 0, -0.087]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cube007.geometry}
            material={materials['Material_0.001']}
            rotation={[0.436, 0, -Math.PI / 9]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cube008.geometry}
            material={materials['Material_0.001']}
            position={[0.187, 0.562, 0.25]}
            rotation={[-0.318, 0.244, -0.514]}
          />
        </group>
      </group>
      <group position={[1.563, 2.438, -1.813]} rotation={[Math.PI / 9, 0, 0]}>
        <group position={[0, 0, 0.063]} rotation={[0, 0, Math.PI / 8]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cube020.geometry}
            material={materials.Material_1}
            position={[0, -0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cube021.geometry}
            material={materials['Material_0.001']}
            position={[0.062, 0.062, 0.063]}
            rotation={[0, 0, 0.654]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cube022.geometry}
            material={materials['Material_0.001']}
            position={[-0.063, 0.062, 0.063]}
            rotation={[0, 0, -Math.PI / 4]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cube023.geometry}
            material={materials['Material_0.001']}
            position={[0, -0.063, 0.063]}
          />
        </group>
        <group position={[0, -0.062, 0.25]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cube024.geometry}
            material={materials.Material_1}
            position={[0, 0.031, 0.031]}
          />
          <group position={[0, 0.031, 0.406]} rotation={[0.088, -0.13, 0.011]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cube025.geometry}
              material={materials.Material_1}
            />
            <group position={[0, 0, 0.437]} rotation={[0.089, -0.217, 0.019]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.cube026.geometry}
                material={materials.Material_1}
              />
              <group position={[0, 0, 0.5]} rotation={[0.089, -0.174, 0.015]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.cube027.geometry}
                  material={materials.Material_1}
                />
                <group position={[0, 0, 0.437]} rotation={[0, -0.218, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.cube028.geometry}
                    material={materials.Material_1}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
      <group position={[-1.813, 0.625, 0.125]} rotation={[-0.175, 0, 0]}>
        <group position={[0, 0, 0.063]} rotation={[0.33, -0.117, -0.33]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cube029.geometry}
            material={materials['Material_0.001']}
            position={[-0.063, 0.062, 0.063]}
            rotation={[0, 0, -Math.PI / 4]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cube030.geometry}
            material={materials['Material_0.001']}
            position={[0.062, 0.062, 0.063]}
            rotation={[0, 0, 0.654]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cube031.geometry}
            material={materials.Material_1}
            position={[0, -0.063, 0.063]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cube032.geometry}
            material={materials['Material_0.001']}
            position={[0, -0.063, 0.063]}
          />
        </group>
        <group position={[0, -0.125, 0.375]} rotation={[0, 0.175, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cube033.geometry}
            material={materials.Material_1}
            position={[0, 0.031, 0.031]}
          />
          <group position={[0, 0.031, 0.406]} rotation={[-0.089, 0.174, 0.015]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cube034.geometry}
              material={materials.Material_1}
            />
            <group position={[0, 0, 0.437]} rotation={[-0.135, 0.26, 0.035]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.cube035.geometry}
                material={materials.Material_1}
              />
              <group position={[0, 0, 0.5]} rotation={[-0.183, 0.301, 0.055]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.cube036.geometry}
                  material={materials.Material_1}
                />
                <group
                  position={[0, 0, 0.437]}
                  rotation={[-0.089, 0.217, 0.019]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.cube037.geometry}
                    material={materials.Material_1}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cube.geometry}
        material={materials['Material_0.001']}
      />
    </group>
  );
};

useGLTF.preload('/models/background.glb');

export default Background3d;
