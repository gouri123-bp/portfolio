import React from "react";

function Project() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">

      <div className="text-center max-w-4xl w-full">

        {/* Title */}
        <h2 className="text-5xl font-bold text-pink-400 mb-10">
          Projects
        </h2>

        {/* Project Card (Cleaner & smaller, no big box feel) */}
        <div className="max-w-md mx-auto p-6 rounded-2xl bg-white/5 border border-pink-400/40 shadow-lg hover:shadow-pink-400/20 transition">

          <h3 className="text-2xl font-bold text-pink-300 mb-3">
            Style Sync
          </h3>

          <p className="text-gray-300 text-sm leading-6 mb-4">
            Style Sync is a modern fashion inspiration web app that helps users
            discover outfit combinations, trending styles, and personalized
            fashion ideas based on different occasions.
          </p>

          <p className="text-gray-400 text-xs leading-5 mb-4">
            The project focuses on delivering a smooth and visually appealing UI
            where users can explore outfit cards, view style suggestions, and
            get inspired by curated fashion layouts.
          </p>

          {/* Features */}
          <ul className="text-gray-300 text-sm text-left space-y-2 mb-5">
            <li>• AI-inspired outfit recommendation layout</li>
            <li>• Categorized styles (Casual, Formal, Streetwear)</li>
            <li>• Responsive card-based UI design</li>
            <li>• Smooth hover animations for better UX</li>
            <li>• Minimal and aesthetic fashion-focused interface</li>
          </ul>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-2">
            {["HTML", "CSS", "JavaScript", "React", "Tailwind"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full border border-pink-400/60 text-pink-200 bg-black/20"
                >
                  {tech}
                </span>
              )
            )}
          </div>

        </div>
      </div>

    </div>
  );
}

export default Project;