import axios from "axios";

const api = axios.create({
  // baseURL: "https://apifoodexplorer.onrender.com"//backend
  baseURL: "http://localhost:3333"//backend

});

export { api };