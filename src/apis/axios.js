import axios from "axios";

export const serverAxios = axios.create({
  baseURL: "http://192.168.0.19:8082/",
  // baseURL: "http://10.0.0.2:3000/",
  // baseURL: "http://10.0.2.2:8082/",
  // baseURL: "http://192.168.0.19:8082/"

});