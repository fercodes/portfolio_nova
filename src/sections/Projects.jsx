import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Center, OrbitControls } from '@react-three/drei';

import CanvasLoader from '../components/CanvasLoader.jsx';
import { myProjects } from '../constants/index.js';

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const CurrentModelComponent = currentProject.modelComponent;

  return (
    <section
      className="c-space bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-20"
      id="work"
    >
      <p className="head-text">My work</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-32 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-256 object-cover rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>

            <p className="animatedText">{currentProject.desc}</p>
          </div>

          <div className="flex justify-between items-center mt-24">
            <button
              className="arrow-btn z-10"
              onClick={() => handleNavigation('previous')}
            >
              <img
                src="/assets/left-arrow.png"
                alt="left arrow"
                className="w-4 h-4"
              />
            </button>

            <button
              className="arrow-btn z-10"
              onClick={() => handleNavigation('next')}
            >
              <img
                src="/assets/right-arrow.png"
                alt="right arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 30]} />

              <Center>
                <group
                  scale={4.3}
                  position={[0, -8, 0]}
                  rotation={[0, -0.1, 0]}
                >
                  <CurrentModelComponent />
                </group>
              </Center>

              <ambientLight intensity={Math.PI} />
              <directionalLight position={[10, 10, 5]} />
              <OrbitControls maxPolarAngle={Math.PI} enableZoom={true} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
