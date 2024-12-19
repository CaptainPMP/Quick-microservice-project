import axios from "axios";

const API_GATEWAY_USER = "http://localhost:5001/api"; // Replace with your API Gateway URL
const API_GATEWAY_REPORT = "http://localhost:5002/api"; // Replace with your API Gateway URL
const API_GATEWAY_NOTIFICATION = "http://localhost:5003/api"; // Replace with your API Gateway URL

// User APIs
export const registerUser = (data) => axios.post(`${API_GATEWAY_USER}/users/register`, data);
export const loginUser = (data) => axios.post(`${API_GATEWAY_USER}/users/login`, data);

// Report APIs
export const submitReport = (data) => axios.post(`${API_GATEWAY_REPORT}/reports`, data);
export const fetchReports = () => axios.get(`${API_GATEWAY_REPORT}/reports`);

// Notification APIs
export const sendNotification = (data) => axios.post(`${API_GATEWAY_NOTIFICATION}/notifications/send`, data);
