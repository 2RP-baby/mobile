import axios from "axios";

export const serverAxios = axios.create({
  // baseURL: "http://192.168.0.25:8082/",
  baseURL: "http://54.251.209.237:8087/",
});