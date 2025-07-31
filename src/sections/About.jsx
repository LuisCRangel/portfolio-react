import { useRef } from "react";
import Card from "../components/CARD.JSX";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import {Frameworks} from "../components/Frameworks";


const About = () => {
  const grid2Container = useRef()
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className=" grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end bg-[url('assets/bg.png')] bg-cover grid-1">
          <img
            src="models/p1.png"
            className=" absolute scale-[1] -right-[30%] -top-[4rem] md:scale-[1.5]  md:inset-y-10 lg:scale-[1.3]"
          />
          <div className="z-10">
            <p className="headtext">Hola, Soy Luis Rangel</p>
            <p className="subtext">
              Durante el ultimo año me he dedicado a desarrollar aplicaciones
              web modernas y dinamicas.{" "}
            </p>
          </div>
          <div className=" absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
        </div>
        {/* Grid 2 */}
        <div className=" grid-default-color grid-2">
          <div ref={grid2Container} className=" flex items-center justify-center w-full h-full">
            <p className="flex items-end text-3xl text-center text-gray-500">
              EL CODIGO ES ARTE
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="GRASP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Patrones de Diseño"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Principios de Diseño"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="SRP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "70%", left: "70%" }}
              image= "assets/logos/css3.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image= "assets/logos/react.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image= "assets/logos/git.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className=" grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Zona Horaria</p>
            <p className="subtext">Estoy ubicado en Marte, y abierto a trabajar remotamente en cualquier lugar del mundo</p>
          </div>
          <figure className="absolute left-[45%] top-[-7%]">
              <img src="/models/world-map.png" alt="" />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className=" grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full" >
            <p className="text-center headtext">
                Te gustaría que iniciaramos un proyecto juntos ?
            </p>
            <CopyEmailButton/>
          </div>
        </div>
        {/* Grid 5 */}
        <div className=" grid-default2-color grid-5">
          <div className="z-10 w-[50%] mx-4 my-6">
            <p className="headtext" >Tech Stack</p>
            <p className="subtext">Tengo conocimiento en gran variedad de frameworks de javascript, los cuales me permiten crear aplicaciones web robustas, modernas y escalables </p>
          </div>
          {/* <div className=" w-lg">
          <h1 className="text-2xl text-center ">Skills</h1>
          <ul className="flex-col pt-4 mx-10 list-disc text-neutral-300 font-semibold">
            <li className="mt-2">Node.js</li>            
            <li className="mt-2">React.js</li>
            <li className="mt-2">PostgreSQL</li>
            <li className="mt-2">Javascript</li>
            <li className="mt-2">Git</li>
            <li className="mt-2">Tailwindcss</li>
          </ul>
          </div> */}

            <p></p>

          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125"><Frameworks/></div>
        </div>
      </div>
    </section>
  );
};
export default About;
