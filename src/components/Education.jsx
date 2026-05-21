import React from "react";

function Education() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">

      <div className="text-center max-w-4xl w-full">

        {/* Title */}
        <h2 className="text-5xl font-bold text-pink-400 mb-6">
          Education
        </h2>

        {/* Description */}
        <p className="text-gray-300 mb-10 leading-7">
          My academic journey is focused on computer engineering, where I am
          learning programming, web development, and software fundamentals.
        </p>

        {/* Main Education Box */}
        <div className="border border-pink-400 bg-white/10 rounded-xl p-6 mb-10">

          <h3 className="text-2xl font-bold text-white mb-2">
            Diploma in Computer Engineering
          </h3>

          <p className="text-pink-300 mb-1">
            Govt Polytechnic College, TVM
          </p>

          <p className="text-gray-400 mb-4">
            2023 - Present
          </p>

          <p className="text-gray-300 leading-7 text-sm">
            Currently developing skills in frontend development, programming,
            databases, and real-world project building.
          </p>

        </div>

        {/* Small Boxes Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

          <div className="p-4 rounded-xl border border-pink-400 bg-white/10 text-sm text-gray-300">
            HTML & CSS
          </div>

          <div className="p-4 rounded-xl border border-pink-400 bg-white/10 text-sm text-gray-300">
            JavaScript Basics
          </div>

          <div className="p-4 rounded-xl border border-pink-400 bg-white/10 text-sm text-gray-300">
            React JS
          </div>

          <div className="p-4 rounded-xl border border-pink-400 bg-white/10 text-sm text-gray-300">
            Tailwind CSS
          </div>

          <div className="p-4 rounded-xl border border-pink-400 bg-white/10 text-sm text-gray-300">
            DBMS Basics
          </div>

          <div className="p-4 rounded-xl border border-pink-400 bg-white/10 text-sm text-gray-300">
            Problem Solving
          </div>

        </div>

      </div>

    </div>
  );
}

export default Education;