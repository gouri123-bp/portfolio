import React, { useEffect, useState } from "react";
import axios from "axios";

function Data() {
  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState(null);

  async function fetchUsers() {
    try {
      const response = await axios.get(
       "https://jsonplaceholder.typicode.com/photos"
      );

      setUsers(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("error:", error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

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

                {/* Clickable Name */}
                <h2
                  onClick={() => setActiveUser(user.id)}
                  className={`text-2xl font-bold cursor-pointer transition-all duration-300 font-mono
                    ${
                      activeUser === user.id
                        ? "text-red-500 scale-110"
                        : "text-blue-600 hover:text-pink-500"
                    }`}
                >
                  {user.name}
                </h2>

                {/* Email */}
                <p className="text-lg text-gray-800 italic mt-2">
                  {user.email}
                </p>
              </div>

              {/* Right Side Profile Image */}
              <div className="ml-6">
                <img
                  src={`https://i.pravatar.cc/100?img=${user.id}`}
                  alt={user.name}
                  className="w-20 h-20 rounded-full border-4 border-pink-300 shadow-xl object-cover"
                />
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Data;