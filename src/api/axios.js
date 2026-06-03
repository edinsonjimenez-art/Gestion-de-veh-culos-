import axios from "axios";

const api = axios.create({
  baseURL: "http://django-vehiculos-api.onrender.com/api",
});

export default api;
