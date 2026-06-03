
import axios from "axios";

const api = axios.create({
  baseURL: "https://django-vehiculos-api.onrender.com/api/",
});

export default api;
