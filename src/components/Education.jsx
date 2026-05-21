import React from "react";

function Education() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">

      <div className="text-center max-w-2xl">

        {/* Title */}
        <h2 className="text-5xl font-bold text-pink-400 mb-6">
          Education
        </h2>

        {/* Description */}
        <p className="text-gray-300 mb-10 leading-7">
          My academic journey is focused on computer engineering, where I am
          learning programming, web development, and software fundamentals.
        </p>

        {/* Education Details */}
        <div>

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
            Currently developing skills in frontend development, programming
            languages, databases, and building real-world projects to improve
            practical knowledge.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Education;