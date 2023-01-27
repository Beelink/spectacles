// utils
import axios from "axios";
import { IS_DEBUG, API_BASE_URL } from "@/config";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 20000,
  headers: {
    post: {
      "Content-Type": "application/json",
    },
  },
});

apiClient.interceptors.request.use((config) => {
  if (IS_DEBUG) {
    console.log("API Request:", config);
  }
  return config;
});

apiClient.interceptors.response.use((config) => {
  if (IS_DEBUG) {
    console.log("API Response:", config);
  }
  return config;
});

export default apiClient;
