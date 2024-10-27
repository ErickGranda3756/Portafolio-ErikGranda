import { useState } from "react";
import proyecto1 from "../assets/proyectos/Proyecto1.png";
import proyecto2 from "../assets/proyectos/Proyecto2.png";
import proyecto3 from "../assets/proyectos/Proyecto3.png";
import proyecto4 from "../assets/proyectos/Proyecto4.png";
import proyecto5 from "../assets/proyectos/Proyecto5.png";
import proyecto6 from "../assets/proyectos/Proyecto6.png";
import proyecto7 from "../assets/proyectos/Proyecto7.png";
import proyecto8 from "../assets/proyectos/Proyecto8.png";
import { motion } from "framer-motion";
import { AiOutlineGithub } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import WorkSliderBtns from "./WorkSliderBtns";
import Reveal from "./Reveal";

const Portafolio = () => {
  const projects = [
    {
      num: "01",
      categoria: "GourmetGo",
      descripcion:
        "GourmetGo is a web application developed to provide restaurant management. This project is designed with an intuitive and modern interface, allowing users to manage the restaurant's dishes, in addition to managing profiles and employees.",
      etiquetas: [
        { name: "#Next.js", color: "text-blue-500" },
        { name: "#React", color: "text-teal-500" },
        { name: "#Tailwind", color: "text-indigo-500" },
        { name: "#Firebase", color: "text-yellow-500" },
        { name: "#Node.js", color: "text-green-500" },
        { name: "#MongoDB", color: "text-purple-500" },
        { name: "#MySQL", color: "text-red-500" },
      ],
      image: proyecto1,
      live: "",
      github: "https://github.com/PSW-GourtmetGO/GourtmetGo-Web-Respaldos",
    },
    {
      num: "02",
      categoria: "App - GourmetGo",
      descripcion:
        "App-GourmetGo is a mobile application developed to facilitate order management in restaurants. With an intuitive and modern interface, it allows restaurant customers registered on the web platform to make dish purchases and collect their orders using a generated code.",
      etiquetas: [
        { name: "#Angular", color: "text-red-500" },
        { name: "#Ionic", color: "text-blue-500" },
        { name: "#Capacitor", color: "text-purple-500" },
        { name: "#Tailwind", color: "text-indigo-500" },
        { name: "#Node.js", color: "text-green-500" },
        { name: "#MongoDB", color: "text-yellow-500" },
        { name: "#MySQL", color: "text-teal-500" },
      ],
      image: proyecto2,
      live: "",
      github: "https://github.com/PSW-GourtmetGO/GourmetGo-Movil-FrontEnd",
    },
    {
      num: "03",
      categoria: "App - JGO",
      descripcion:
        "App-JGO is a mobile application designed to optimize the management of product distribution companies. With an intuitive and modern interface, it allows admin users to manage products (insert, update and delete), manage user profiles and handle orders efficiently.",
      etiquetas: [
        { name: "#Angular", color: "text-red-500" },
        { name: "#Ionic", color: "text-blue-500" },
        { name: "#Capacitor", color: "text-purple-500" },
        { name: "#Firebase", color: "text-yellow-500" },
      ],
      image: proyecto3,
      live: "",
      github: "https://github.com/ErickGranda3756/App-JGO",
    },
    {
      num: "04",
      categoria: "Sistema de Gestión de Biblioteca",
      descripcion:
        "Sistema de gestión de biblioteca this project is designed to allow librarians and administrative users to manage detailed information about books, as well as record and maintain user information. Additionally, it provides an advanced search interface so that students can find books easily.",
      etiquetas: [
        { name: "#Angular", color: "text-red-500" },
        { name: "#Node.js", color: "text-green-500" },
        { name: "#Express", color: "text-blue-500" },
        { name: "#MySQL", color: "text-teal-500" },
      ],
      image: proyecto4,
      live: "",
      github: "https://github.com/ErickGranda3756/gslibros",
    },
    {
      num: "05",
      categoria: "CertyGet",
      descripcion:
        "CertyGet is a web application developed with Angular for the management and generation of certificates. This project is designed to allow users to create, customize and manage certificates efficiently. In addition, it has a backend that allows storing and managing certificate data.",
      etiquetas: [
        { name: "#Angular", color: "text-red-500" },
        { name: "#Node.js", color: "text-green-500" },
        { name: "#Express", color: "text-blue-500" },
        { name: "#Google Cloud Storage", color: "text-yellow-500" },
        { name: "#MySQL", color: "text-teal-500" },
      ],
      image: proyecto5,
      live: "",
      github: "https://github.com/KevinCayo10/Certyget",
    },
    {
      num: "06",
      categoria: "App - CertyGet",
      descripcion:
        "App - CertyGet is a mobile application developed with Ionic for the management and generation of certificates. This application allows users to consult and validate certificates from mobile devices efficiently. The project also includes a backend developed with Node.js and Express to handle the business logic and certificate storage.",
      etiquetas: [
        { name: "#Ionic", color: "text-blue-500" },
        { name: "#Node.js", color: "text-green-500" },
        { name: "#Express", color: "text-blue-500" },
        { name: "#Google Cloud Storage", color: "text-yellow-500" },
        { name: "#MySQL", color: "text-teal-500" },
      ],
      image: proyecto6,
      live: "",
      github: "https://github.com/KevinCayo10/Certyget_mobile",
    },
    {
      num: "07",
      categoria: "Sistema de gestión de permisos",
      descripcion:
        "Permisomancomunidad is a Next.js application developed to manage community permissions. It integrates various libraries for UI and data visualization and uses Tailwind CSS for styling.",
      etiquetas: [
        { name: "#Next.js", color: "text-blue-500" },
        { name: "#React", color: "text-teal-500" },
        { name: "#Tailwind", color: "text-indigo-500" },
        { name: "#Node.js", color: "text-green-500" },
        { name: "#Express", color: "text-blue-500" },
        { name: "#MySQL", color: "text-teal-500" },
      ],
      image: proyecto7,
      live: "",
      github: "https://github.com/MancomunidadPermisos/Permisos-FrontEnd",
    },
    {
      num: "08",
      categoria: "App - Gestión de permisos",
      descripcion:
        "App - Gestión de permisos is a mobile application for managing permission requests. This application allows users to request, approve, and reject petitions, and also provides information on the available time to submit a request.",
      etiquetas: [
        { name: "#Angular", color: "text-red-500" },
        { name: "#Ionic", color: "text-blue-500" },
        { name: "#Capacitor", color: "text-purple-500" },
        { name: "#Node.js", color: "text-green-500" },
        { name: "#Express", color: "text-blue-500" },
        { name: "#MySQL", color: "text-teal-500" },
      ],
      image: proyecto8,
      live: "",
      github: "https://github.com/MancomunidadPermisos/PermisosMovil",
    },
  ];

  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className=" flex flex-col justify-center py-12 max-w-[1450px] mx-auto my-24"
      id="projects"
    >
      <div className="container mx-auto">
        <Reveal>
          <div className="xl:px-0 px-4 text-center">
            <h2 className="text-3xl font-bold mb-4  text-gray-200">Projects</h2>
            <p className="mb-8 text-gray-200 text-justify">
              The following projects highlight my skills and experience through
              real-world examples of my work. Each project includes a brief
              description, along with links to the code repositories and live
              demos. These projects demonstrate my capability to solve complex
              problems, work with diverse technologies, and manage projects
              efficiently.
            </p>
          </div>
        </Reveal>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="md:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((proj, index) => (
                <SwiperSlide
                  key={index}
                  className="w-full"
                >
                  <div className="h-full relative group">
                    <div className="absolute inset-0  transition-opacity group-hover:opacity-0"></div>
                    <img
                      src={proj.image}
                      alt={`Project ${proj.num}`}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(60% - 22px)] md:bottom-1 z-40 w-full justify-between md:w-max md:justify-none"
                btnStyles="bg-purple-500 hover:bg-purple-900 text-black text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-8 px-4">
            <Reveal>
              <div>
                <div className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-black">
                  {project.num}
                </div>
                <h2 className="text-3xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize mt-4">
                  {project.categoria}
                </h2>
                <p className="text-white/60 text-justify mt-4">
                  {project.descripcion}
                </p>
                <ul className="flex flex-wrap gap-2 mt-4">
                  {project.etiquetas.map((etiqueta, index) => (
                    <li
                      key={index}
                      className={`text-sm md:text-base px-2 py-1 bg-gray-800 rounded-md ${etiqueta.color}`}
                    >
                      {etiqueta.name}
                    </li>
                  ))}
                </ul>
                <div className="border border-white/40 mt-4"></div>
                <div className="flex space-x-4 mt-4">
                  {project.live && (
                    <a
                      href={project.live}
                      className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                    >
                      View Site
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiOutlineGithub className="text-2xl" />{" "}
                      <span className="text-white font-bold px-2">GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portafolio;
