import axios from "axios";

const API_GATEWAY = "http://localhost:5000/api"; // API Gateway URL

// User APIs
export const registerUser = (data) => axios.post(`${API_GATEWAY}/users/register`, data);
export const loginUser = (data) => axios.post(`${API_GATEWAY}/users/login`, data);

// Report APIs
export const submitReport = (data) => axios.post(`${API_GATEWAY}/reports`, data);
export const fetchReports = () => axios.get(`${API_GATEWAY}/reports`);

// Notification APIs
export const sendNotification = (data) => axios.post(`${API_GATEWAY}/notifications/send`, data);
