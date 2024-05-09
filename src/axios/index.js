import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const HTTP = axios.create({
  baseURL: "http://localhost:5500/",
});

const headers = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${cookies.get("AccessToken")}`,
  },
};
export const Login = async (FormData) => {
  return await HTTP.post("/login", FormData);
};
export const Register = async (FormData) => {
  return await HTTP.post("/register", FormData);
};

export const userInfo = async (id) => {
  return await HTTP.post(`/userInfo/${id}`, headers);
};

export const addBook = async (FormData) => {
  return await HTTP.post("/addbook", FormData, headers);
};
export const getBooks = async () => {
  return await HTTP.get("/getbooks");
};
export const getAuthors = async () => {
  return await HTTP.get("/authors");
};
export const addAuthor = async (FormData) => {
  return await HTTP.post("/addAuthor", FormData, headers);
};
export const getCategories = async () => {
  return await HTTP.get("/categories");
};

export const addCategory = async (FormData) => {
  return await HTTP.post("/addCategory", FormData, headers);
};

export const swapQuery = async (FormData) => {
  return await HTTP.post("/swap", FormData, headers);
};

export const getUserBook = async (FormData) => {
  return await HTTP.post(`/user/Books`, FormData, headers);
};
