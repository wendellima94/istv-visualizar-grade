import axios from "axios";

const baseURL = "https://18.231.35.93:4000/";

const api = axios.create({
  baseURL,
});

export default api;
