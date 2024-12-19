import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Admin Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          to="/submit-report"
          className="p-4 bg-blue-500 text-white rounded-lg text-center shadow hover:bg-blue-600 transition"
        >
          Submit a Flood Report
        </Link>
        <Link
          to="/send-notification"
          className="p-4 bg-green-500 text-white rounded-lg text-center shadow hover:bg-green-600 transition"
        >
          Send Notifications
        </Link>
        <Link
          to="/view-reports"
          className="p-4 bg-yellow-500 text-white rounded-lg text-center shadow hover:bg-yellow-600 transition"
        >
          View Reports
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
