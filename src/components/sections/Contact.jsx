import React, { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please Try again."));
  };
  return (
    <section
      id="contact"
      className="mx-auto items-center justify-center py-20 max-w-[770px] max-h-[1920px] flow-root"
    >
      <RevealOnScroll>
        <div className="responsive-input px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-blue-600 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form className="space-y-6 w-full" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                type="message"
                id="message"
                name="message"
                required
                value={formData.message}
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-0.5 hover:shadow-[0_0_15px_rgba(255,0,0,0.4)] cursor-pointer"
            >
              Send Message
            </button>
          </form>
          <div className="flex justify-center space-x-10 text-[20px] mt-5">
            <a
              href=" https://www.facebook.com/janjanjanrel"
              className="h-5 cursor-pointer"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("PhoneNumber: +63 976 339 3844");
              }}
              className="h-5 cursor-pointer"
            >
              <i class="fa-solid fa-phone"></i>
            </a>
            <a href="https://github.com/K-JAMS" className="h-5 cursor-pointer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/kim-johnrel-mercado/"
              className="h-5 cursor-pointer"
            >
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
