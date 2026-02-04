import React from "react";
import { education } from "../../contants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Title */}
      <div className="text-center mb-20 px-[12vw] md:px-[7vw] lg:px-[16vw]">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Timeline */}
      <div className="relative w-full">

        {/* Glowing Center Line */}
        <div className="absolute left-1/2 top-0 h-full w-[3px] bg-white -translate-x-1/2 shadow-[0_0_25px_rgba(255,255,255,0.9)]"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className="grid grid-cols-9 mb-28 items-start px-[12vw] md:px-[7vw] lg:px-[16vw]"
          >

            {/* LEFT CARD */}
            {index % 2 === 0 && (
              <div className="col-span-4">
                <Card edu={edu} />
              </div>
            )}

            {/* CENTER LOGO */}
            <div className="col-start-5 flex justify-center pt-20">
              <div className="bg-gray-900 border-4 border-[#8245ec] w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(130,69,236,0.8)] z-10">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>

            {/* RIGHT CARD */}
            {index % 2 !== 0 && (
              <div className="col-span-4 col-start-6">
                <Card edu={edu} />
              </div>
            )}

          </div>
        ))}
      </div>
    </section>
  );
};

const Card = ({ edu }) => (
  <div className="bg-gray-900 p-6 rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:scale-105 transition">

    <div className="flex items-center gap-5">
      <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
        <img
          src={edu.img}
          alt={edu.school}
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <h3 className="text-white font-semibold">{edu.degree}</h3>
        <p className="text-gray-300 text-sm">{edu.school}</p>
        <p className="text-gray-500 text-sm">{edu.date}</p>
      </div>
    </div>

    <p className="mt-3 text-gray-400 font-bold">Grade: {edu.grade}</p>
    <p className="mt-3 text-gray-400">{edu.desc}</p>
  </div>
);

export default Education;