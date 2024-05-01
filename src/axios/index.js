import axios from "axios";

const HTTP = axios.create({
  baseURL: "http://localhost:5500/",
});

export const Login = async (FormData) => {
  return await HTTP.post("/login", FormData);
};
export const Register = async (FormData) => {
  return await HTTP.post("/register", FormData);
};

export const userInfo = async (id) => {
  return await HTTP.post(`/userInfo/${id}`);
};

export const getBooks = async () => {
  return await HTTP.get("/getbooks");
};

export const swapQuery = async (bookId) => {
  return await HTTP.post("/swap", bookId, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
};
