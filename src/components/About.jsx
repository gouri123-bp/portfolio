import React from "react";
import Navbar from "./Navbar";

function About() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat text-white relative"
    >
      {/* Content */}
      <div className="relative z-10">

        {/* ABOUT SECTION */}
        <section
          id="about"
          className="min-h-[90vh] flex flex-col md:flex-row items-center justify-center px-8 md:px-20 gap-16"
        >

          {/* Profile Image */}
          <div className="relative">

            <div className="absolute inset-0 bg-pink-400 blur-3xl opacity-20 rounded-full"></div>

            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop"
              alt="profile"
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-pink-400 shadow-[0_0_50px_rgba(255,105,180,0.5)]"
            />

          </div>

          {/* Content */}
          <div className="max-w-2xl text-center md:text-left">

            <p className="text-pink-400 tracking-[6px] uppercase mb-3">
              Hello, I'm
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold mb-6">
              GOURINANDA BP
            </h1>

            <h2 className="text-2xl md:text-3xl text-pink-300 mb-6">
              Frontend Developer • UI/UX Designer
            </h2>

            <p className="text-gray-300 text-lg leading-8 mb-8">
              I am a passionate frontend developer from Attingal, Kerala.
              I build modern, responsive and user-friendly web applications
              using React and Tailwind CSS.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">

              <a
  href="#contact"
  className="px-8 py-3 bg-pink-400 text-black font-bold rounded-xl hover:bg-pink-300 transition inline-block"
>
  Hire Me
</a>

            </div>

          </div>

        </section>

      </div>
    </div>
  );
}

export default About;