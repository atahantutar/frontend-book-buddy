import React from "react";
import Home from "./pages/mainpage/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import AuthProvider from "./context/authContext";
import AddBookPage from "./pages/books/addBook";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addBook" element={<AddBookPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
