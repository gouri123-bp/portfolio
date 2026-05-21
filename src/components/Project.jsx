import React from "react";

function Project() {
  return (
    <div className="min-h-screen px-6 lg:px-20 py-16 flex flex-col justify-center">

      {/* Heading */}
      <div className="mb-20">
        <h2 className="text-5xl md:text-6xl font-bold text-pink-400 mb-5">
          Projects
        </h2>

        <p className="text-gray-400 max-w-3xl text-lg leading-8">
          Here are some projects I’ve built while learning frontend development,
          improving UI/UX skills, and creating responsive modern web interfaces.
        </p>
      </div>

      {/* Full Screen Utilized Layout */}
      <div className="grid lg:grid-cols-2 gap-20 items-center">

        {/* Left Side */}
        <div>

          <p className="text-pink-400 text-sm tracking-[4px] uppercase mb-4">
            Featured Project
          </p>

          <h3 className="text-5xl font-bold text-pink-300 mb-6">
            Style Sync
          </h3>

          <p className="text-gray-300 text-lg leading-9 mb-6">
            Style Sync is a modern fashion web application focused on helping
            users explore trending outfit ideas, fashion inspirations, and
            stylish combinations through a smooth and elegant interface.
          </p>

          <p className="text-gray-400 leading-8 mb-10">
            The project was designed with a clean visual structure and responsive
            layout to create an engaging browsing experience across all devices.
            It combines minimal design principles with interactive UI elements
            to give users a modern fashion platform feel.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-4 mb-10">
            {["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-5 py-2 rounded-full border border-pink-400/40 text-pink-200 bg-white/5 hover:bg-pink-500/10 transition"
                >
                  {tech}
                </span>
              )
            )}
          </div>

        </div>

        {/* Right Side */}
        <div className="space-y-8">

          <div className="border-l-2 border-pink-400 pl-6">
            <h4 className="text-2xl text-pink-300 font-semibold mb-3">
              Responsive Experience
            </h4>

            <p className="text-gray-400 leading-7">
              Fully optimized for desktop, tablet, and mobile devices with
              adaptive layouts and flexible components.
            </p>
          </div>

          <div className="border-l-2 border-pink-400 pl-6">
            <h4 className="text-2xl text-pink-300 font-semibold mb-3">
              Modern Fashion UI
            </h4>

            <p className="text-gray-400 leading-7">
              Designed using modern color palettes, clean typography, and
              visually balanced spacing inspired by fashion websites.
            </p>
          </div>

          <div className="border-l-2 border-pink-400 pl-6">
            <h4 className="text-2xl text-pink-300 font-semibold mb-3">
              Interactive Design
            </h4>

            <p className="text-gray-400 leading-7">
              Added smooth transitions, hover effects, and structured content
              sections to improve overall user engagement and experience.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Project;