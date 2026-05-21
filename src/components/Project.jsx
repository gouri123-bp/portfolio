import React from "react";

function Project() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">

      <div className="text-center max-w-2xl">

        {/* Title */}
        <h2 className="text-5xl font-bold text-pink-400 mb-6">
          Projects
        </h2>

        {/* Project Card */}
        <div className="border border-pink-400 p-6 rounded-xl bg-white/10 hover:scale-105 transition">

          <h3 className="text-2xl font-bold text-pink-300 mb-4">
            Style Sync
          </h3>

          <p className="text-gray-300 text-sm leading-7 mb-4">
            A responsive fashion web application that helps users explore modern styles and outfit ideas with a clean UI.
          </p>

          {/* Features */}
          <ul className="text-gray-300 text-sm text-left space-y-2 mb-5">
            <li>• Responsive design for all devices</li>
            <li>• Modern fashion UI layout</li>
            <li>• Smooth navigation experience</li>
            <li>• Clean and user-friendly interface</li>
          </ul>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">

            <span className="px-3 py-1 text-xs rounded-full border border-pink-400 text-pink-200 bg-black/20">
              HTML
            </span>

            <span className="px-3 py-1 text-xs rounded-full border border-pink-400 text-pink-200 bg-black/20">
              CSS
            </span>

            <span className="px-3 py-1 text-xs rounded-full border border-pink-400 text-pink-200 bg-black/20">
              JavaScript
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Project;