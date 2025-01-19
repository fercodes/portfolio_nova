import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';

import CanvasLoader from '../components/CanvasLoader.jsx';
import Hero3d from '../components/Hero3d.jsx';
import Background3d from '../components/Background3d.jsx';
import Button from '../components/Button.jsx';

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  //Changes size according to the screen. Unused for now, since looks good on all screens.
  /*
  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  */

  return (
    <section
      className="min-h-screen w-full flex flex-col relative bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950"
      id="home"
    >
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Nova67 <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Lead developer, full stack mid dev
        </p>
      </div>

      <div className="w-full md:h-[100vh] h-[80vh] absolute inset-0">
        {/*<Leva />*/}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <Hero3d
              position={[0.0, -6.8, 1.1]}
              rotation={[0.0, 2.8, 0.0]}
              scale={isMobile ? 2.9 : 3.1}
            />
            <Background3d
              position={[0.0, -6.8, 1.1]}
              rotation={[0.0, 2.8, 0.0]}
              scale={isMobile ? 3.9 : 4.1}
            />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
            <OrbitControls maxPolarAngle={Math.PI} enableZoom={true} />
          </Suspense>
        </Canvas>
      </div>
      <div className="flex gap-5 items-center justify-center absolute bottom-28 md:bottom-8 w-full z-10 c-space">
        <a href="#contact" className="w-fit">
          <Button
            name="Contact me"
            isBeam
            containerClass="sm:min-w-48 w-full lg:min-w-96"
          />
        </a>
        <a href="#work" className="w-fit">
          <Button
            name="See my work"
            containerClass="sm:min-w-48 w-full lg:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
