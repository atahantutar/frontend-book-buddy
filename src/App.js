import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthProvider from "./context/authContext";
import ProfileProvider from "./context/profileContext";
import SearchTextProvider from "./context/searchTextContext";
import BooksProvider from "./context/booksContext";

import Home from "./pages/mainpage/MainPage";
import Login from "./pages/loginRegister/login";
import Register from "./pages/loginRegister/register";
import AddBookPage from "./pages/books/addBook";
import ProfilePage from "./pages/profile/profilpage";

import AuthRouter from "./components/Router/authRouter";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProfileProvider>
          <BooksProvider>
            <SearchTextProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                  path="/profile"
                  element={
                    <AuthRouter>
                      <ProfilePage />
                    </AuthRouter>
                  }
                />
                <Route
                  path="/addBook"
                  element={
                    <AuthRouter>
                      <AddBookPage />
                    </AuthRouter>
                  }
                />
                <Route path="*" element={<h1>Not Found</h1>} />
              </Routes>
            </SearchTextProvider>
          </BooksProvider>
        </ProfileProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
