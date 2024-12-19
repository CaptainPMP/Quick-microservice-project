import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">FEWRS</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/register" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/submit-report" className="hover:underline">
                Submit Report
              </Link>
            </li>
            <li>
              <Link to="/view-report" className="hover:underline">
                View Report
              </Link>
            </li>
            <li>
              <Link to="/send-notification" className="hover:underline">
                Notifications
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
