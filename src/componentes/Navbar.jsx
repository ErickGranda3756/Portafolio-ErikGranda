import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import logo from "../assets/logo/logo3.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [selected, setSelected] = useState("");

  const mostrarNav = () => {
    setNav(!nav);
  };

  const cerrarNav = () => {
    setNav(false);
  };

  const handleSetSelected = (section) => {
    setSelected(section);
    cerrarNav();
  };

  const menuVariantes = {
    abrir: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    cerrar: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  const sections = [
    { label: "About", to: "about" },
    { label: "Work", to: "work" },
    { label: "Skills", to: "skills" },
    { label: "Projects", to: "projects" },
    { label: "Certificates", to: "certificates" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
      <div className="max-w-[1500px] mx-auto flex justify-between text-gray-200 text-xl items-center px-12 h-20">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-auto cursor-pointer"
          />{" "}
        </Link>
        <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
          {sections.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className={`transition duration-300 ${
                  selected === item.to ? "text-purple-500" : "text-gray-200"
                } ${
                  item.to === "contact"
                    ? "z-10 cursor-pointer  text-gray-200 md:w-auto px-4 py-1 bg-orange-600 rounded-xl"
                    : ""
                }`}
                onClick={() => handleSetSelected(item.to)}
              >
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    color: item.to === "contact" ? "#000000" : "#000000",
                  }}
                  className="inline-block"
                >
                  {item.label}
                </motion.div>
              </Link>
            </li>
          ))}
        </ul>
        <div
          onClick={mostrarNav}
          className="md:hidden z-50 text-gray-200"
        >
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        <motion.div
          initial={false}
          animate={nav ? "abrir" : "cerrar"}
          variants={menuVariantes}
          className="fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40"
        >
          <ul className="font-semibold text-4xl space-y-8 mt-24 text-center cursor-pointer">
            {sections.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
                  className={`transition duration-300 ${
                    selected === item.to ? "text-purple-500" : "text-gray-200"
                  }`}
                  onClick={() => handleSetSelected(item.to)}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      color: item.to === "contact" ? "#000000" : "#8B5CF6",
                    }}
                    className="inline-block"
                  >
                    {item.label}
                  </motion.div>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
