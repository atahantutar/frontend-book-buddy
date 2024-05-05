import React from "react";
import LoginForm from "../../components/auth/loginForm";
import Header from "../../components/header/header";
import { Toaster } from "react-hot-toast";

const Login = () => {
  return (
    <>
      <Header />
      <Toaster />
      <LoginForm />
    </>
  );
};

export default Login;
