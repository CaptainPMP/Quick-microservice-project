import React, { useState } from "react";
import { sendNotification } from "../../services/api";

const SendNotification = () => {
  const [notificationData, setNotificationData] = useState({
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await sendNotification(notificationData);
      setStatusMessage(response.data.message);
    } catch (error) {
      setStatusMessage(error.response.data.message || "Error occurred!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">
          Send Notification
        </h2>
        <input
          type="email"
          placeholder="Recipient Email"
          value={notificationData.email}
          onChange={(e) =>
            setNotificationData({ ...notificationData, email: e.target.value })
          }
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
        <textarea
          placeholder="Message"
          value={notificationData.message}
          onChange={(e) =>
            setNotificationData({ ...notificationData, message: e.target.value })
          }
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Send
        </button>
        <p className="text-center text-gray-600 mt-4">{statusMessage}</p>
      </form>
    </div>
  );
};

export default SendNotification;
