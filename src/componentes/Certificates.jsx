import certificado1 from "../assets/certificados/imagenes/CSEI21-COMPLETION.png";
import certificado2 from "../assets/certificados/imagenes/CSEI23-COMPLETION.png";
import certificado3 from "../assets/certificados/imagenes/HatunSoft Parti.png";
import certificado4 from "../assets/certificados/imagenes/HatunSoft Ganador.png";
import certificado5 from "../assets/certificados/imagenes/Talleres Tecnologicos.png";
import certificado6 from "../assets/certificados/imagenes/Suficiencia.png";
import certificado7 from "../assets/certificados/imagenes/Edutin Laravel.png"
import { motion } from "framer-motion";
import Reveal from "./Reveal";
const projects = [
  {
    id: 1,
    image: certificado1,
    title: "CSEI21 - Course Completion",
    link: "https://drive.google.com/file/d/14e6NpruZk_lZRHcO6VjyU-gfrMURHtoF/view?usp=drive_link",
  },
  {
    id: 2,
    image: certificado2,
    title: "CSEI23 - Course Completion",
    link: "https://drive.google.com/file/d/1qGNTHDKr4n1iTvwfoSz1Pb0eYbUXgqrO/view?usp=drive_link",
  },
  {
    id: 3,
    image: certificado3,
    title: "HatunSoft - Course Participation",
    link: "https://drive.google.com/file/d/1w2Y-Q9T-fWRwx-9HgcBW6j-MWAkpq7g6/view?usp=sharing",
  },
  {
    id: 4,
    image: certificado4,
    title: "HatunSoft - Winner Advanced Programming",
    link: "https://drive.google.com/file/d/1qfVO12YLByZx1HvQ4tgm44ZGI4DKV6HC/view?usp=sharing",
  },
  {
    id: 5,
    image: certificado5,
    title: "Computer Assembly And Maintenance",
    link: "https://drive.google.com/file/d/1fSdkawW9VFxg4MuJW_TSuDZxCSMNgXs1/view?usp=sharing",
  },
  {
    id: 6,
    image: certificado6,
    title: "Proficiency in English",
    link: "https://drive.google.com/file/d/18jHfDdjUz3ke9iZC08kbkT1Fbz-BKK9n/view?usp=sharing",
  },
  {
    id: 7,
    image: certificado7,
    title: "Desarrollador Laravel - Course Completion",
    link: "https://drive.google.com/file/d/1xkmsvg7c-4JgkMc44njvsYdaqnUKMzjp/view?usp=sharing",
  },
];

const Certificates = () => {
  return (
    <div
      className="flex flex-col  max-w-[1510px] mx-auto px-4 sm:px-6 lg:px-8 my-24"
      id="certificates"
    >
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-200 z-0">
        Certificates
      </h2>
      <div className="grid md:grid-cols-3 gap-16 ">
        {projects.map((project, index) => (
          <Reveal key={index}>
            <div
              key={project.id}
              className="rounded-xl bg-[#27272c] overflow-hidden shadow-xl z-1"
            >
              <motion.a
                href={project.link}
                target="_blank" // Esto abrirá el documento en una nueva pestaña
                rel="noopener noreferrer"
                className="group col-span-3"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[300px] w-full object-cover object-top transition duration-200 group-hover:scale-110 rounded-lg"
                />
              </motion.a>

              <div className="p-4">
                <h2 className="text-gray-200 text-center text-2xl">
                  {project.title}
                </h2>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
