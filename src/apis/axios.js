import axios from "axios";

export const serverAxios = axios.create({
  baseURL: "http://192.168.1.39:8082/",
});