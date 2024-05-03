import React from "react";
import Home from "./pages/mainpage/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import AddBook from "./pages/books/addBook";
import AuthProvider from "./context/authContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<AddBook />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
