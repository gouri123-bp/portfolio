import React from "react";

function Skills() {
  const frontend = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];
  const backend = ["Node.js (Basics)", "Express (Basics)", "REST APIs"];
  const tools = ["Git", "GitHub", "VS Code", "Figma (Basic)", "Vite"];
  const learning = ["TypeScript", "Next.js", "MongoDB"];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="text-center max-w-4xl">

        {/* Title */}
        <h2 className="text-5xl font-bold text-pink-400 mb-4">
          Skills & Technologies
        </h2>

        {/* Intro */}
        <p className="text-gray-300 max-w-2xl mx-auto mb-4 leading-7">
          I am a frontend-focused developer who enjoys building clean,
          responsive, and interactive web applications using modern tools.
        </p>

        <p className="text-gray-400 max-w-xl mx-auto mb-10 text-sm">
          I constantly explore new technologies, improve my problem-solving
          skills, and build real-world projects to strengthen my development
          experience.
        </p>

        {/* Skills Sections */}
        <div className="grid md:grid-cols-2 gap-8 text-left">

          {/* Frontend */}
          <div>
            <h3 className="text-xl text-pink-300 mb-3 font-semibold">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {frontend.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-white/10 border border-pink-400 text-pink-200 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-xl text-pink-300 mb-3 font-semibold">
              Backend Basics
            </h3>
            <div className="flex flex-wrap gap-2">
              {backend.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-white/10 border border-pink-400 text-pink-200 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl text-pink-300 mb-3 font-semibold">
              Tools & Workflow
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-white/10 border border-pink-400 text-pink-200 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Learning */}
          <div>
            <h3 className="text-xl text-pink-300 mb-3 font-semibold">
              Currently Learning
            </h3>
            <div className="flex flex-wrap gap-2">
              {learning.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-white/10 border border-pink-400 text-pink-200 rounded-full animate-pulse"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-gray-500 text-xs mt-10">
          I enjoy turning ideas into real, interactive web experiences.
        </p>

      </div>
    </div>
  );
}
export default Skills;