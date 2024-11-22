import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { Leva, useControls } from 'leva';
import CanvasLoader from '../components/CanvasLoader';
import Hero3d from '../components/Hero3d';

const Hero = () => {
  const controls = useControls('Hero3d', {
    positionX: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionY: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionZ: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    rotationX: {
      value: 0,
      min: -10,
      max: 10,
    },
    rotationY: {
      value: 0,
      min: -10,
      max: 10,
    },
    rotationZ: {
      value: 0,
      min: -10,
      max: 10,
    },
    scale: {
      value: 1,
      min: 0.1,
      max: 10,
    },
  });

  return (
    <section className="min-h-screen w-full flex flex-col relative bg-slate-900">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Nova67 <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Lead developer, full stack mid dev
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Leva />
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <Hero3d
              // scale={2}
              // position={[0, 0, 0]}
              // rotation={[0, 280, 0]}
              position={[
                controls.positionX,
                controls.positionY,
                controls.positionZ,
              ]}
              rotation={[
                controls.rotationX,
                controls.rotationY,
                controls.rotationZ,
              ]}
              scale={[controls.scale, controls.scale, controls.scale]}
            />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
