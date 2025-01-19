import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Center, OrbitControls } from '@react-three/drei';

import CanvasLoader from '../components/CanvasLoader.jsx';
import { myProjects } from '../constants/index.js';
import { links } from '../constants/index.js';

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
      className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-16"
      id="work"
    >
      <p className="text-center text-white text-4xl font-bold mb-10">My Work</p>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-4 grid-rows-3 gap-6 px-8 pb-10">
        {myProjects.map((project, index) => {
          const ModelComponent = project.modelComponent;
          return (
            <div
              key={index}
              className={`bg-gray-900 border border-gray-600 rounded-2xl p-3 ${
                index === 5 ? 'col-span-2 aspect-[2/1]' : 'aspect-square'
              }`}
            >
              <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader />}>
                  <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                  <Center>
                    <group scale={4}>
                      <ModelComponent rotation={[0, 2.8, 0]} />
                    </group>
                  </Center>
                  <ambientLight intensity={1} />
                  <directionalLight position={[10, 10, 5]} />
                  <OrbitControls maxPolarAngle={Math.PI} enableZoom={true} />
                </Suspense>
              </Canvas>
              <div className="mt-2 text-center text-white">
                <p className="font-semibold text-lg">{project.title}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col items-center justify-center pb-6">
        <div className="relative w-full h-[400px]">
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 28]} />
              <Center>
                <group scale={5}>
                  <CurrentModelComponent
                    position={[0.0, -1.5, 0]}
                    rotation={[0, 2.8, 0]}
                  />
                </group>
              </Center>
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 5]} />
              <OrbitControls maxPolarAngle={Math.PI} enableZoom={true} />
            </Suspense>
          </Canvas>
        </div>
        <div className="text-white mt-4 text-center">
          <p className="font-semibold text-lg">{currentProject.title}</p>
        </div>
        <div className="flex items-center justify-center gap-4 mt-6">
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
          <p className="text-white text-lg font-semibold">
            {selectedProjectIndex + 1}/{projectCount}
          </p>
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

      <div className="bg-slate-900 text-white p-8">
        <p className="text-center text-2xl font-bold mb-6">
          Projects where I have worked
        </p>
        <div className="flex flex-col gap-6">
          {links.map((link, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-4 p-4 bg-gray-800 rounded-lg"
            >
              <div className="flex-1">
                <a
                  href={link.url}
                  className="text-blue-400 font-semibold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
                <p className="mt-2 text-gray-300 text-base">
                  {link.description}
                </p>
              </div>
              <div className="w-32 h-20">
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={link.previewImage}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-md"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
