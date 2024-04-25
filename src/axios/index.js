import axios from "axios";

const HTTP = axios.create({
  baseURL: "http://localhost:5500/",
});

export const Login = async (FormData) => {
  await HTTP.post("/login", FormData);
};
export const Register = async (FormData) => {
  await HTTP.post("/register", FormData);
};
