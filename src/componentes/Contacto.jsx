import { motion } from "framer-motion";
import {
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlineHome,
} from "react-icons/ai";
import Reveal from "./Reveal";

const Contacto = () => {
  const info = [
    /* {
      icon: <AiOutlineWhatsApp />,
      title: "Phone",
      description: "(+593) 999121207",
      link: "https://wa.me/593999121207",
    }, */
    {
      icon: <AiOutlineMail />,
      title: "Email",
      description: "erickgranda31002@outlook.com",
      link: "mailto:erickgranda31002@outlook.com",
    },
    {
      icon: <AiOutlineHome />,
      title: "Address",
      description: "Latacunga, Ecuador",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className=" max-w-[1510px] mx-auto py-24 px-8 "
      id="contact"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-[30px]">
          <div className="xl:w-[50%] order-2 md:order-none">
            <Reveal>
              <form
                className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl text-gray-200"
                action="https://getform.io/f/apjmmoja"
                encType="multipart/form-data"
                target="_blank"
                method="POST"
              >
                <h3 className="text-4xl">Let`s work together</h3>
                <p className="text-white/60 text-justify">
                  I am always looking for exciting new projects to collaborate
                  on. Whether you have a specific idea in mind or need help with
                  something more general, feel free to get in touch. Let`s turn
                  your ideas into reality and achieve great results together.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="FirstName"
                    className="w-full p-2 bg-[#333] rounded-xl"
                  />
                  <input
                    type="text"
                    name="lastName"
                    required
                    placeholder="LastName"
                    className="w-full p-2 bg-[#333] rounded-xl"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    className="w-full p-2 bg-[#333] rounded-xl"
                  />
                  <input
                    type="text"
                    name="phone"
                    required
                    placeholder="Phone"
                    className="w-full p-2 bg-[#333] rounded-xl"
                  />
                  <textarea
                    className="w-full p-2 md:col-span-2 bg-[#333] rounded-xl"
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                  <button
                    className="w-full p-2 bg-purple-600 text-gray-200 rounded-xl hover:bg-purple-700 transition-all duration-300"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
          <div className="flex items-center xl:ml-[5%] md:justify-end order-1 md:order-none mb-8 md:mb-0">
            <Reveal>
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-6 cursor-pointer"
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3"
                    >
                      <motion.div className="w-[52px] h-[52px] md:w-[72px] md:h-[72px] bg-[#27272c] text-purple-400 rounded-md flex items-center justify-center">
                        <div className="text-[28px]">{item.icon}</div>
                      </motion.div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl text-white">
                          {item.description}
                        </h3>
                      </div>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contacto;
