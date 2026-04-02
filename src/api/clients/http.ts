import axios from "axios";

export const http = axios.create({
  baseURL: "https://codeforces.com/api",
  timeout: 10000,
});
