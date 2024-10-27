import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiencia = [
  {
    compania: "Mancomunidad de Tránsito de Tungurahua",
    periodo: "Jan. 2024 - Mar. 2024",
    descripcion:
      "Intern in the ICT Department, serving as a software developer. The main focus was the development and deployment of software for managing permissions within the organization. Responsibilities included designing and programming specific system features, integrating different modules to ensure an efficient workflow, and collaborating with the production team to customize the software according to the specific needs of the area.",
  },
  {
    compania: "Icono Sistemas",
    periodo: "Apr. 2024 - Jun. 2024",
    descripcion:
      "Conducted physical, office, and management audits. This included comprehensive reviews of physical and technological systems, ensuring compliance with all company procedures and policies according to established standards. Detailed evaluations of office processes were also carried out to guarantee efficiency and security in document management and internal communications. Additionally, management audits were conducted to assess the effectiveness of management and the achievement of the company's strategic objectives.",
  },
  {
    compania: "Unidad Educativa Atahualpa",
    periodo: "Mar. 2024 - Jun. 2024",
    descripcion:
      "Developed the setup and maintenance of two computer labs at Unidad Educativa Atahualpa. This experience included reviewing and repairing equipment, installing and updating software, and configuring networks, ensuring an efficient and functional technological environment for students and educational staff.",
  },
];

const Experience = () => {
  return (
    <div
      className="flex flex-col p-8 max-w-[600px] mx-auto my-24"
      id="work"
    >
      <h2 className="text-2xl text-white font-bold text-center mb-12 z-0">
        Experience
      </h2>
      <motion.div
        className="space-y-8"
        initial="hidden"
        animate="visible"
      >
        {experiencia.map((exp, index) => (
          <Reveal key={index}>
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className=" border border-purple-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-purple-700/10"
            >
              <h2 className="text-gray-100 text-2xl font-semibold">
                {exp.compania}
              </h2>
              <p className="text-gray-300">{exp.periodo}</p>
              <p className="text-gray-400 mt-4 text-justify">
                {exp.descripcion}
              </p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
