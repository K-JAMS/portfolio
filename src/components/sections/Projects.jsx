import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="pt-20 items-center justify-center max-h-[1920px] flow-root"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-400 to-blue-600 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(9,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-4">Photo Gallery</h3>
              <p>
                Responsive website showcasing{" "}
                <strong className="text-yellow-300">digital projects </strong>
                and <strong className="text-yellow-300">certificates </strong>
                with tabbed navigation and dark mode.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 mt-2">
                {["React", "TailwindCSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(9,130,246,0.1)] transition cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://k-jams.github.io/photo-gallery/"
                  className="text-blue-400 hover:text-blue-300 trainsition-colors my-2"
                >
                  View Project <i className="fa-solid fa-play"/>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(9,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-4">Real-Estate Web</h3>
              <p>
                A modern and responsive real estate website built using pure
                HTML, CSS, and JavaScript.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 mt-2">
                {["Html", "Css", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(9,130,246,0.1)] transition cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://67f5211aafeb4f6f856a2f3e--lively-klepon-c3649c.netlify.app/"
                  className="text-blue-400 hover:text-blue-300 trainsition-colors my-2"
                >
                  View Project <i className="fa-solid fa-play"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
