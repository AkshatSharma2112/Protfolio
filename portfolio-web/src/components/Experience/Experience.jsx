import React from "react";
import { experiences } from "../../contants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Title */}
      <div className="text-center mb-20 px-[12vw] md:px-[7vw] lg:px-[16vw]">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline */}
      <div className="relative w-full">

        {/* Center glowing line */}
        <div className="absolute left-1/2 top-0 h-full w-[3px] bg-white -translate-x-1/2 shadow-[0_0_25px_rgba(255,255,255,0.9)]"></div>

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className="grid grid-cols-9 mb-28 items-start px-[12vw] md:px-[7vw] lg:px-[16vw]"
          >

            {/* LEFT CARD */}
            {index % 2 === 0 && (
              <div className="col-span-4">
                <Card experience={experience} />
              </div>
            )}

            {/* CENTER LOGO */}
            <div className="col-start-5 flex justify-center pt-20">
              <div className="bg-gray-900 border-4 border-[#8245ec] w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(130,69,236,0.8)] z-10">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>

            {/* RIGHT CARD */}
            {index % 2 !== 0 && (
              <div className="col-span-4 col-start-6">
                <Card experience={experience} />
              </div>
            )}

          </div>
        ))}
      </div>
    </section>
  );
};

const Card = ({ experience }) => (
  <div className="bg-gray-900 p-6 rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:scale-105 transition">

    <div className="flex items-center gap-5">
      <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
        <img src={experience.img} className="w-full h-full object-cover" />
      </div>

      <div>
        <h3 className="text-white font-semibold">{experience.role}</h3>
        <p className="text-gray-300 text-sm">{experience.company}</p>
        <p className="text-gray-500 text-sm">{experience.date}</p>
      </div>
    </div>

    <p className="mt-3 text-gray-400">{experience.desc}</p>

    <div className="mt-4">
      <h5 className="font-medium text-white">Skills:</h5>
      <ul className="flex flex-wrap mt-2">
        {experience.skills.map((skill, index) => (
          <li
            key={index}
            className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Experience;