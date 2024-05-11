import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

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
  return await HTTP.post(`/userInfo/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies.get("AccessToken")}`,
    },
  });
};

export const addBook = async (FormData) => {
  return await HTTP.post("/addbook", FormData);
};
export const getBooks = async () => {
  return await HTTP.get("/getbooks");
};
export const getAuthors = async () => {
  return await HTTP.get("/authors");
};
export const addAuthor = async (FormData) => {
  return await HTTP.post("/addAuthor", FormData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies.get("AccessToken")}`,
    },
  });
};
export const getCategories = async () => {
  return await HTTP.get("/categories");
};

export const addCategory = async (FormData) => {
  return await HTTP.post("/addCategory", FormData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies.get("AccessToken")}`,
    },
  });
};

export const swapQuery = async (id) => {
  return await HTTP.post(
    "/swap",
    { id: id },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies.get("AccessToken")}`,
      },
    }
  );
};

export const getUserBook = async () => {
  return await HTTP.post(
    `/user/Books`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies.get("AccessToken")}`,
      },
    }
  );
};

export const deleteBook = async (Params) => {
  return await HTTP.delete(
    `/books/${Params.id}`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies.get("AccessToken")}`,
      },
    }
  );
};

export const userSwapRequests = async () => {
  return await HTTP.post(
    `/user/acceptorSwap`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies.get("AccessToken")}`,
      },
    }
  );
};
export const userOfferRequests = async () => {
  return await HTTP.post(
    `/user/offerSwap`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies.get("AccessToken")}`,
      },
    }
  );
};
export const rejectRequest = async (Params) => {
  return await HTTP.post(
    `/user/rejectSwap/${Params}`,
    { Params: Params },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies.get("AccessToken")}`,
      },
    }
  );
};
export const swapResponse = async (Params, Status) => {
  return await HTTP.post(
    `/user/swapResponse/${Params}`,
    { status: Status },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies.get("AccessToken")}`,
      },
    }
  );
};
