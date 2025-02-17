import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1337/api", // Ensure your Strapi is running at this port
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
