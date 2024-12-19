import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-500 mb-6">
        Flood Early Warning System
      </h1>
      <div className="flex space-x-4">
        <Link
          to="/register"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
