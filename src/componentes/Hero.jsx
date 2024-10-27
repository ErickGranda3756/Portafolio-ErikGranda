import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { DiNodejsSmall, DiReact } from "react-icons/di";
import { motion } from "framer-motion";
import {
  TbBrandHtml5,
  TbBrandMysql,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandTypescript,
} from "react-icons/tb";
import Estadisticas from "./Estadisticas";
const Hero = () => {
  return (
    <div
      className="my-24   max-w-[1510px] mx-auto relative"
      id="about"
    >
      <div className="grid xl:grid-cols-3 md:grid-cols-2 place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="xl:col-span-2"
        >
          <TypeAnimation
            sequence={[
              "Fullstack Dev",
              1000,
              "Web-Designer",
              1000,
              "Consultant",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
          ></TypeAnimation>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            Hey, I AM <br />
            <span className="text-purple-500">ERICK GRANDA</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] text-justify md:text-2xl text-lg  mb-6 "
          >
            I am a passionate fullstack developer with over 5 years of
            experience
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.a
              href="https://drive.google.com/file/d/1RoE5PDki-pFui94MeZMG7gFra8ucvIh7/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0,0,0,0.3)",
              }}
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl"
            >
              Download CV
            </motion.a>
            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/ErickGranda3756"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineGithub></AiOutlineGithub>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/erick-granda-324739318/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineLinkedin></AiOutlineLinkedin>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.instagram.com/alexnd_erik/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineInstagram></AiOutlineInstagram>
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Estadisticas></Estadisticas>
          </motion.div>
        </motion.div>
        {/* <motion.img
          src={profilepic}
          className="xl:col-start-3 w-[300px] md:w-[450px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        ></motion.img> */}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-row text-7xl px-4 md:px-0 w-full justify-center items-center pt-24 pb-16"
      >
        <p className="text-gray-200 mr-6">My Tech Stack</p>
        <TbBrandTypescript className="text-blue-500 mx-2"></TbBrandTypescript>
        <TbBrandHtml5 className="text-orange-600 mx-2"></TbBrandHtml5>
        <TbBrandTailwind className="text-blue-500 mx-2"></TbBrandTailwind>
        <DiNodejsSmall className="text-green-500 mx-2"></DiNodejsSmall>
        <TbBrandMysql className="text-blue-500 mx-2"></TbBrandMysql>
        <DiReact className="text-blue-500 mx-2"></DiReact>
        <TbBrandNextjs className="text-white mx-2"></TbBrandNextjs>
      </motion.div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect
          left={0}
          top={0}
          size={1400}
        ></ShinyEffect>
      </div>
    </div>
  );
};

export default Hero;
