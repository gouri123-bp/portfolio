import React from "react";

function Project() {
  return (
    <div className="min-h-screen px-6 py-16">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-pink-400 mb-4">
          Projects
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Here are some projects I’ve worked on while improving my frontend
          development skills and UI design experience.
        </p>
      </div>

      {/* Full Width Layout */}
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

        {/* Left Content */}
        <div>

          <h3 className="text-4xl font-bold text-pink-300 mb-5">
            Style Sync
          </h3>

          <p className="text-gray-300 leading-8 mb-5">
            Style Sync is a modern fashion web application designed to help
            users discover outfit inspirations, trending styles, and fashion
            combinations through a clean and responsive interface.
          </p>

          <p className="text-gray-400 leading-7 mb-8">
            The project focuses on creating an elegant user experience with
            smooth navigation, interactive sections, and visually balanced
            layouts inspired by modern fashion platforms.
          </p>

          {/* Features */}
          <div className="space-y-4 mb-8">

            <div className="flex items-start gap-3">
              <span className="text-pink-400 text-lg">✦</span>
              <p className="text-gray-300">
                Responsive design optimized for desktop, tablet, and mobile.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-pink-400 text-lg">✦</span>
              <p className="text-gray-300">
                Fashion category sections like Casual, Streetwear, and Formal.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-pink-400 text-lg">✦</span>
              <p className="text-gray-300">
                Smooth hover animations and modern UI interactions.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-pink-400 text-lg">✦</span>
              <p className="text-gray-300">
                Clean layout focused on user-friendly browsing experience.
              </p>
            </div>

          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3">
            {["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm rounded-full border border-pink-400/50 text-pink-200 bg-white/5"
                >
                  {tech}
                </span>
              )
            )}
          </div>

        </div>

        {/* Right Side Visual Area */}
        <div className="flex items-center justify-center">

          <div className="w-full h-[400px] rounded-3xl border border-pink-400/30 bg-gradient-to-br from-pink-500/10 to-black flex items-center justify-center">

            <div className="text-center px-6">
              <h4 className="text-3xl font-bold text-pink-300 mb-4">
                Style Sync
              </h4>

              <p className="text-gray-400 leading-7">
                Modern fashion inspiration platform with responsive UI and
                stylish layouts.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Project;