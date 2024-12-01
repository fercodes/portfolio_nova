import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';
import Hero3d from '../components/Hero3d';
import { useMediaQuery } from 'react-responsive';
import Button from '../components/Button';

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  //Changes size according to the screen. Unused for now, since looks good on all screens.
  /*
  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  */

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
        {/*<Leva />*/}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <Hero3d
              position={[0.0, -6.8, 1.1]}
              rotation={[0.0, 2.8, 0.0]}
              scale={isMobile ? 2.9 : 3.1}
            />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#contact" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
