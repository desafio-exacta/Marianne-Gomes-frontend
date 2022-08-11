import axios from "axios";

const api = axios.create({
  baseURL: "https://62ed6bb5c1ef25f3da79d032.mockapi.io/api/",
});

export default api;