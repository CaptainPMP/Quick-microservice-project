import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Register from "./components/User/Register";
import SubmitReport from "./components/Report/SubmitReport";
import SendNotification from "./components/Notification/SendNotification";
import Dashboard from "./pages/Dashboard";
import Login from "./components/User/Login";
import ViewReports from "./components/Report/ViewReports";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/submit-report" element={<SubmitReport />} />
          <Route path="/send-notification" element={<SendNotification />} />
          <Route path="/login" element={<Login />} />
          <Route path="/view-report" element={<ViewReports />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
