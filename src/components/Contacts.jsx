import React from "react";

function Contacts() {
  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center px-6"
    >

      <div className="text-center max-w-3xl">

        {/* Title */}
        <h2 className="text-5xl font-bold text-pink-400 mb-6">
          Contact
        </h2>

        {/* Description */}
        <p className="text-gray-300 mb-10 leading-7">
          Feel free to contact me for collaboration, freelance work, or any
          web development opportunities. I am always open to learning and new projects.
        </p>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <div className="p-4 border border-pink-400 bg-white/10 rounded-xl text-gray-300">
            <span className="text-pink-300 font-semibold">Name:</span> Gouri Nanda
          </div>

          <div className="p-4 border border-pink-400 bg-white/10 rounded-xl text-gray-300">
            <span className="text-pink-300 font-semibold">Phone:</span> 8157034683
          </div>

          <div className="p-4 border border-pink-400 bg-white/10 rounded-xl text-gray-300">
            <span className="text-pink-300 font-semibold">Email:</span> example@gmail.com
          </div>

          <div className="p-4 border border-pink-400 bg-white/10 rounded-xl text-gray-300">
            <span className="text-pink-300 font-semibold">Location:</span> Kerala
          </div>

        </div>

      </div>

    </div>
  );
}

export default Contacts;