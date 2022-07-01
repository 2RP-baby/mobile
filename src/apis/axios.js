import axios from "axios";

export const serverAxios = axios.create({
  // baseURL: "http://localhost:8082/",
  baseURL: "http://192.168.0.25:8082/",
  // baseURL: "http://10.0.0.2:8082/",

});