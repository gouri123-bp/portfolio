import React from "react";

function Showdata({ users }) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="w-full max-w-4xl bg-gray-100 rounded-3xl shadow-2xl p-8">

        {/* Heading */}
        <h1 className="text-5xl text-center font-bold text-yellow-700 mb-10 font-serif tracking-wide">
          User List
        </h1>

        {/* User Cards */}
        <div className="space-y-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between bg-white hover:bg-gray-200 transition-all duration-300 rounded-2xl p-5 shadow-lg"
            >
              {/* Left Side Content */}
              <div className="flex-1 text-center">
                {/* Name */}
                <h2 className="text-2xl font-bold text-blue-600">{user.name}</h2>

                {/* Email */}
                <p className="text-lg text-gray-800 italic mt-2">{user.email}</p>
                 <p className="text-lg text-gray-800 italic mt-2">{user.phone}</p>
              </div>

              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Showdata;