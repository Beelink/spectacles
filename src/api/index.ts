// utils
import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 20000,
  headers: {
    post: {
      "Content-Type": "application/json",
    },
  },
});

apiClient.interceptors.request.use((config) => {
  if (import.meta.env.VITE_IS_DEBUG) {
    console.log("API Request:", config);
  }
  return config;
});

apiClient.interceptors.response.use((config) => {
  if (import.meta.env.VITE_IS_DEBUG) {
    console.log("API Response:", config);
  }
  return config;
});

export default apiClient;
