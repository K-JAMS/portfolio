import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { Carousel } from "./Carousel";

export const Home = () => {
  const slides = [
    "./img/carousel/carousel1.jpg",
    "./img/carousel/carousel2.JPG",
    "./img/carousel/carousel3.jpg",
    "./img/carousel/carousel4.gif",
  ];

  return (
    <div>
      <div className="m-0 mx-auto p-0 pt-15 w-full max-w-[1080px] min-w-[320px] max-h-[60vh] relative">
        <Carousel autoSlide={true}>
          {slides.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          ))}
        </Carousel>
        <div className="absolute -bottom-90 left-0 right-0 h-280 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        <div className="absolute -bottom-90 left-0 right-0 h-500 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        <div className="absolute -bottom-70 inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none" />
      </div>
      <section
        id="home"
        className="mb-[200px] pt-[200px] max-h-[480px] flex items-center justify-center relative responsive-alignment-y"
      >
        <RevealOnScroll>
          <div className="text-center z-10 px-4 mt-10">
            <div className="flex flex-col xl:flex-row items-center justify-between">
              <div className="p-6 text-left">
                <img
                  src="./img/ProfilePic.jpg"
                  alt="profile img"
                  className="h-60 rounded-full pointer-events-none
                "
                />
              </div>
              <div className="p-6text-left ">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center bg-gradient-to-r from-yellow-500 to-blue-600 bg-clip-text text-transparent leading-right">
                  Hello, I'm Johnrel
                </h1>
                <p className="text-justify text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                  I'm a computer engineer specializing in front-end and graphic
                  design, with a foundation in computer hardware. I combine
                  technical skills and creative vision to build responsive,
                  user-focused digital experiences.
                </p>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <a
                href="#projects"
                className="bg-gradient-to-r from-yellow-600 to-red-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
        hover:shadow-[0_0_15px_rgba(255,0,0,0.4)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(0,0,255,0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
};
