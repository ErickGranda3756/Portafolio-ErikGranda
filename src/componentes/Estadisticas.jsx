import CountUp from "react-countup";
const Estadisticas = () => {
  const stats = [
    {
      num: 5,
      text: "Years of experience",
    },
    {
      num: 8,
      text: "Projects completed",
    },
    {
      num: 14,
      text: "Technologies mastered",
    },
    {
      num: 360,
      text: "Code commits",
    },
  ];
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto  text-gray-200 py-[5%]">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start  flex-col md:flex-row text-center md:text-left"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold text-gray-200"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Estadisticas;
