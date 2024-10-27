import {
  DiSass,
  DiBootstrap,
  DiJava,
  DiFirebase,
  DiMongodb,
  DiPostgresql,
  DiAndroid,
  DiPython,
  DiIonic,
  /* DiPostgresql, */
} from "react-icons/di";
import { SiAdobexd, SiMicrosoftaccess } from "react-icons/si";
import {
  TbBrandAngular,
  TbBrandCss3,
  TbBrandFigma,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandLaravel,
  TbBrandMysql,
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandPhp,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandTypescript,
  TbBrandVite,
} from "react-icons/tb";
import Reveal from "./Reveal";

const Skills = () => {
  const habilidades = [
    {
      categoria: "Frontend",
      tecnologias: [
        { name: "HTML", icon: <TbBrandHtml5 className="text-orange-600" /> },
        { name: "CSS", icon: <TbBrandCss3 className="text-blue-600" /> },
        {
          name: "Tailwind",
          icon: <TbBrandTailwind className="text-blue-600" />,
        },
        { name: "Sass", icon: <DiSass className="text-pink-600" /> },
        {
          name: "Bootstrap",
          icon: <DiBootstrap className="text-purple-600" />,
        },
        { name: "Figma", icon: <TbBrandFigma className="text-white" /> },
        { name: "Xd", icon: <SiAdobexd className="text-purple-500" /> },
        {
          name: "TypeScript",
          icon: <TbBrandTypescript className="text-blue-600" />,
        },
        {
          name: "JavaScript",
          icon: <TbBrandJavascript className="text-yellow-500" />,
        },
        { name: "Laravel", icon: <TbBrandLaravel className="text-red-500" /> },
        { name: "React", icon: <TbBrandReact className="text-blue-500" /> },
        { name: "Vite", icon: <TbBrandVite className="text-purple-500" /> },
        { name: "Next.Js", icon: <TbBrandNextjs className="text-white" /> },
        { name: "Angular", icon: <TbBrandAngular className="text-red-500" /> },
        { name: "Android", icon: <DiAndroid className="text-green-600" /> },
        { name: "Ionic", icon: <DiIonic className="text-blue-500" /> },
      ],
    },
    {
      categoria: "Backend",
      tecnologias: [
        { name: "Java", icon: <DiJava className="text-red-500" /> },
        { name: "Php", icon: <TbBrandPhp className="text-blue-500" /> },
        { name: "Node Js", icon: <TbBrandNodejs className="text-green-500" /> },
        { name: "MySQL", icon: <TbBrandMysql className="text-orange-500" /> },
        {
          name: "PostgreSQL",
          icon: <DiPostgresql className="text-blue-500" />,
        },
        {
          name: "Microsoft Access",
          icon: <SiMicrosoftaccess className="text-red-500" />,
        },
        { name: "MongoDB", icon: <DiMongodb className="text-green-500" /> },
        { name: "FireBase", icon: <DiFirebase className="text-yellow-500" /> },
        { name: "Python", icon: <DiPython className="text-yellow-500" /> },
      ],
    },
  ];
  return (
    <div
      className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200  my-24"
      id="skills"
    >
      <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8 ">
          I worked on various fronend and fullstack projects.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8  ">
          {habilidades.map((habilidad, index) => (
            <div
              key={index}
              className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full md:w-1/2"
            >
              <h3 className="text-xl font-bold mb-4 text-center">
                {habilidad.categoria}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {habilidad.tecnologias.map((tec, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-2xl">{tec.icon}</span>
                    <span>{tec.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
