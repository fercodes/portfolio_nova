const About = () => {
  return (
    <section className="c-space bg-slate-900 py-20" id="about">
      <div className="flex flex-col items-center mb-12">
        <img
          src="assets/nova.png"
          alt="nova"
          className="h-[256px] rounded-full mb-12"
        />
        <p className="text-center max-w-2xl px-4 text-white text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A temporibus,
          cumque quo veritatis ullam consequatur delectus dolorum enim
          voluptatibus laboriosam totam fugiat mollitia sint vero incidunt neque
          dolores quaerat inventore?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl px-8 mx-auto">
        <div className="bg-gray-800 rounded-lg p-6 border border-white-700 hover-effect">
          <h3 className="text-white text-xl font-semibold mb-4">
            My tech stack
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
                alt="c language"
                className="h-12 w-12"
              />
              <p className="text-white text-sm mt-2">C</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                alt="c sharp language"
                className="h-12 w-12"
              />
              <p className="text-white text-sm mt-2">C#</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                alt="javascript"
                className="h-12 w-12"
              />
              <p className="text-white text-sm mt-2">JavaScript</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                alt="typescript"
                className="h-12 w-12"
              />
              <p className="text-white text-sm mt-2">TypeScript</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                alt="java"
                className="h-12 w-12"
              />
              <p className="text-white text-sm mt-2">Java</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                alt="html"
                className="h-12 w-12"
              />
              <p className="text-white text-sm mt-2">HTML</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                alt="css"
                className="h-12 w-12"
              />
              <p className="text-white text-sm mt-2">CSS</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                alt="python"
                className="h-12 w-12"
              />
              <p className="text-white text-sm mt-2">Python</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg"
                alt="blender"
                className="h-12 w-12"
              />
              <p className="text-white text-sm mt-2">Blender</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="assets/blockbench.png"
                alt="blockbench"
                className="h-12 w-12"
              />
              <p className="text-white text-sm mt-2">Blockbench</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="assets/aseprite.svg"
                alt="aseprite"
                className="h-12 w-12"
              />
              <p className="text-white text-sm mt-2">Aseprite</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="assets/regolith.png"
                alt="regolith"
                className="h-12 w-12"
              />
              <p className="text-white text-sm mt-2">Regolith</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-white-700 hover-effect">
          <h3 className="text-white text-xl font-semibold mb-4">Skills</h3>
          <ul className="text-white space-y-2">
            <li>Spanish - native</li>
            <li>English - C1</li>
            <li>Blender</li>
            <li>Blockbench</li>
            <li>Aseprite</li>
            <li>Regolith</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
