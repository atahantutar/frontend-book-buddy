import React from "react";
import Home from "./pages/mainpage/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import AuthProvider from "./context/authContext";
import ProfileProvider from "./context/profileContext";
import AddBookPage from "./pages/books/addBook";
import AuthRouter from "./components/Router/authRouter";
import ProfilePage from "./pages/profile/profilpage";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProfileProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<ProfilePage />} />
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
        </ProfileProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
