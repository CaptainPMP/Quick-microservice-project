import React, { useEffect, useState } from "react";
import { fetchReports } from "../../services/api";

const ViewReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const getReports = async () => {
      try {
        const response = await fetchReports();
        setReports(response.data);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };
    getReports();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Flood Reports
      </h1>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-6">
        <table className="w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Latitude</th>
              <th className="border border-gray-300 px-4 py-2">Longitude</th>
              <th className="border border-gray-300 px-4 py-2">Water Level</th>
              <th className="border border-gray-300 px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{report.location_lat}</td>
                <td className="border border-gray-300 px-4 py-2">{report.location_lng}</td>
                <td className="border border-gray-300 px-4 py-2">{report.water_level}</td>
                <td className="border border-gray-300 px-4 py-2">{report.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewReports;
