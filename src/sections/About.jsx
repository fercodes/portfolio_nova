const About = () => {
  return (
    <section
      className="c-space bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-20"
      id="about"
    >
      <div className="flex flex-col items-center mb-12">
        <img
          src="assets/nova.png"
          alt="nova"
          className="h-[256px] rounded-full mb-12"
        />
        <p className="text-center max-w-2xl px-4 text-white text-lg bigscreen:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A temporibus,
          cumque quo veritatis ullam consequatur delectus dolorum enim
          voluptatibus laboriosam totam fugiat mollitia sint vero incidunt neque
          dolores quaerat inventore?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl px-8 mx-auto bigscreen:gap-20 bigscreen:px-0">
        <div className="bg-gray-800 rounded-3xl p-6 border border-white-700 bigscreen:p-10">
          <h3 className="text-white text-xl font-semibold mb-4 bigscreen:text-2xl">
            My tech stack
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
                alt="c language"
                className="h-12 w-12 bigscreen:h-16 bigscreen:w-16"
              />
              <p className="text-white text-sm mt-2 bigscreen:text-lg">C</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                alt="c sharp language"
                className="h-12 w-12 bigscreen:h-16 bigscreen:w-16"
              />
              <p className="text-white text-sm mt-2 bigscreen:text-lg">C#</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                alt="javascript"
                className="h-12 w-12 bigscreen:h-16 bigscreen:w-16"
              />
              <p className="text-white text-sm mt-2 bigscreen:text-lg">
                JavaScript
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                alt="typescript"
                className="h-12 w-12 bigscreen:h-16 bigscreen:w-16"
              />
              <p className="text-white text-sm mt-2 bigscreen:text-lg">
                TypeScript
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                alt="java"
                className="h-12 w-12 bigscreen:h-16 bigscreen:w-16"
              />
              <p className="text-white text-sm mt-2 bigscreen:text-lg">Java</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                alt="html"
                className="h-12 w-12 bigscreen:h-16 bigscreen:w-16"
              />
              <p className="text-white text-sm mt-2 bigscreen:text-lg">HTML</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                alt="css"
                className="h-12 w-12 bigscreen:h-16 bigscreen:w-16"
              />
              <p className="text-white text-sm mt-2 bigscreen:text-lg">CSS</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                alt="python"
                className="h-12 w-12 bigscreen:h-16 bigscreen:w-16"
              />
              <p className="text-white text-sm mt-2 bigscreen:text-lg">
                Python
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg"
                alt="blender"
                className="h-12 w-12 bigscreen:h-16 bigscreen:w-16"
              />
              <p className="text-white text-sm mt-2 bigscreen:text-lg">
                Blender
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="assets/blockbench.png"
                alt="blockbench"
                className="h-12 w-12 bigscreen:h-16 bigscreen:w-16"
              />
              <p className="text-white text-sm mt-2 bigscreen:text-lg">
                Blockbench
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="assets/aseprite.svg"
                alt="aseprite"
                className="h-12 w-12 bigscreen:h-16 bigscreen:w-16"
              />
              <p className="text-white text-sm mt-2 bigscreen:text-lg">
                Aseprite
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="assets/regolith.png"
                alt="regolith"
                className="h-12 w-12 bigscreen:h-16 bigscreen:w-16"
              />
              <p className="text-white text-sm mt-2 bigscreen:text-lg">
                Regolith
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-3xl p-6 border border-white-700">
          <h3 className="text-white text-xl font-semibold mb-4 bigscreen:text-2xl">
            Skills
          </h3>
          <ul className="text-white space-y-2 bigscreen:text-xl">
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
