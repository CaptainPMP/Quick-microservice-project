import React, { useState } from "react";
import { loginUser } from "../../services/api"; // Assuming this function sends a login request to the backend
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false); // State to handle successful login
  const navigate = useNavigate(); // To redirect the user after login

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send login request to backend
      const response = await loginUser(credentials);

      // Store the token and user information in localStorage
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Show success message
      setMessage("Login successful!");
      setSuccess(true);

      // Delay navigation to give time for the success message to display
      setTimeout(() => {
        navigate("/submit-report"); // Redirect to home or any desired route
      }, 2000);
    } catch (error) {
      // Set error message
      setMessage(
        error.response?.data?.message || "An error occurred during login!"
      );
      setSuccess(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">
          Login
        </h2>
        <input
          type="email"
          placeholder="Email"
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </button>
        {message && (
          <p
            className={`text-center mt-4 ${
              success ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
        <p className="text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
