import React, { useState } from "react";
import { submitReport } from "../../services/api";

const SubmitReport = () => {
  const [reportData, setReportData] = useState({
    email: "",
    location_lat: "",
    location_lng: "",
    water_level: "",
    description: "",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await submitReport(reportData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message || "Error occurred!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">
          Submit Flood Report
        </h2>
        <input
          placeholder="Email"
          value={reportData.email}
          onChange={(e) =>
            setReportData({ ...reportData, email: e.target.value })
          }
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
        <input
          type="number"
          placeholder="Latitude"
          value={reportData.location_lat}
          onChange={(e) =>
            setReportData({ ...reportData, location_lat: e.target.value })
          }
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
        <input
          type="number"
          placeholder="Longitude"
          value={reportData.location_lng}
          onChange={(e) =>
            setReportData({ ...reportData, location_lng: e.target.value })
          }
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
        <input
          type="number"
          placeholder="Water Level (cm)"
          value={reportData.water_level}
          onChange={(e) =>
            setReportData({ ...reportData, water_level: e.target.value })
          }
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
        <textarea
          placeholder="Description"
          value={reportData.description}
          onChange={(e) =>
            setReportData({ ...reportData, description: e.target.value })
          }
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit Report
        </button>
        <p className="text-center text-gray-600 mt-4">{message}</p>
      </form>
    </div>
  );
};

export default SubmitReport;
