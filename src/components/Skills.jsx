import React from "react";

function Skills() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">

      <div className="text-center">

        {/* Title */}
        <h2 className="text-5xl font-bold text-pink-400 mb-4">
          Skills
        </h2>

        {/* Short Description */}
        <p className="text-gray-300 max-w-2xl mx-auto mb-6 leading-7">
          I am a frontend developer who enjoys creating clean and responsive web
          interfaces. I focus on writing simple, efficient code and improving user experience.
        </p>

        <p className="text-gray-400 max-w-xl mx-auto mb-8 text-sm">
          I continuously learn new technologies and practice building real-world
          projects to improve my development skills.
        </p>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-3">

          {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Basic Python"].map(
            (skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm bg-white/10 border border-pink-400 text-pink-300 rounded-full hover:scale-105 transition"
              >
                {skill}
              </span>
            )
          )}

        </div>

      </div>

    </div>
  );
}

export default Skills;