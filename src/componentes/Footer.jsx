import { FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import Reveal from "./Reveal";
import { Link } from "react-scroll";
import logo from "../assets/logo/logo3.png";

const Footer = () => {
  const informacion = [
    { label: "About", to: "about" },
    { label: "Work", to: "work" },
    { label: "Skills", to: "skills" },
    { label: "Projects", to: "projects" },
    { label: "Certificates", to: "certificates" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <Reveal>
      <footer className="bg-[#27272c] text-gray-200">
        <div className="max-w-[1560px] mx-auto p-6 md:p-16 text-sm md:text-lg grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left my-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">
              <img
                src={logo}
                alt="Logo"
                className="h-12 w-auto mx-auto md:mx-0"
              />{" "}
            </h3>
            <div className="flex justify-center md:justify-start gap-6 text-4xl">
              <a
                href="https://github.com/ErikGranda3756"
                aria-label="Github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubSquare />
              </a>
              <a
                href="https://www.linkedin.com/in/erick-granda-324739318/"
                aria-label="Linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/alexnd_erik/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <nav className="flex flex-col md:flex-row justify-center xl:col-start-3 space-y-2 md:space-y-0 md:space-x-4 col-start-1 md:col-start-auto cursor-pointer">
            {informacion.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                className="hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="text-gray-400 text-center mt-6 md:mt-12">
          &copy; Created by Erick Granda. All rights reserved.
        </p>
      </footer>
    </Reveal>
  );
};

export default Footer;
