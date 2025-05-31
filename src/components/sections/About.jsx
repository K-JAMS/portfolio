import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const webSkills = [
    "Html",
    "CSS",
    "Vanilla JS",
    "React JS",
    "Typescript",
    "Tailwind CSS",
    "Bootstrap",
  ];
  const graphicSkills = ["Adobe Photoshop", "Adobe Animate", "Adobe Premier", "Canva", "CapCut"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-red-600 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 text-justify">
              I'm flexible and driven, with a creative mindset and a strong
              sense of adaptability. I thrive in fast-paced, ever-changing
              environments, whether working on front-end design, graphic
              projects, or even roles outside of tech. With a passion for
              learning and clear communication, I take on every challenge with
              focus, curiosity, and a commitment to doing my best.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all text-left">
                <h3 className="text-xl font-bold mb-4">Web Design</h3>
                <div className="flex flex-wrap gap-2">
                  {webSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(9,130,246,0.2)] transition cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all ">
                <h3 className="text-xl font-bold mb-4">Graphic Design</h3>
                <div className="flex flex-wrap gap-2">
                  {graphicSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(9,130,246,0.2)] transition cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover hover:-translate-y-1 transition-all text-left">
              <h3 className="text-xl font-bold mb-4">Education 🏫</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.S. in Computer Engineering</strong> - Bulacan State
                  University (2019-2023)
                </li>
                <li>Relevant Coursework: Web Development, AutoCad, OOP</li>
              </ul>
              <h3 className="text-xl font-bold mb-4 mt-7">Trainings 📖</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Frontend Fundamentals Bootcamp </strong> - at
                  OneCodeCamp (2024)
                </li>
                <li>
                  <strong>Data Analytics Fundamentals Bootcamp </strong> - at
                  OneCodeCamp (2024)
                </li>
                <li>
                  <strong>Web Dev Internship </strong> - at Village88 (2022)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover hover:-translate-y-1 transition-all text-left">
              <h3 className="text-xl font-bold mb-4">Work Experience 💼</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Outbound Sales Representative at Syndesi Operation (Nov 2023
                    - Mar 2024)
                  </h4>
                  <p>
                    Utilized sales scripts and product knowledge to effectively
                    pitch services, consistently exceeding monthly sales.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Teacher's Assistant in ICT at Lord of Lord Ministry School
                    (2019)
                  </h4>
                  <p>
                    Assist in the setup and maintenance of computer labs and
                    equipment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a
            href="https://drive.google.com/file/d/1J64mxRXMzIdeni0ZGT8fIpGGqmYuxxRo/view?usp=drive_link"
            className="mt-5 w-full justify-center text-center m-auto block text-blue-400 hover:text-blue-300 trainsition-colors"
          >
            View Updated Resume ▶
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
};
