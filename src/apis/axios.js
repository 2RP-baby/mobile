import axios from "axios";

export const serverAxios = axios.create({
  baseURL: "http://10.0.0.2:8082/",
});