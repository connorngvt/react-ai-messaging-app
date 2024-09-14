import React, { useState } from "react";
import { Routes, Route, Outlet } from 'react-router-dom';
import LoginForm from "../components/Auth/LoginForm";
import RegisterForm from "../components/Auth/RegisterForm";
import "./LoginRegisterPage.css";

const LoginRegisterPage = () => {  

  return (
    <div>
      <Routes>
        <Route path="*" element={<LoginForm />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
      </Routes>
      <Outlet />
      {/* <LoginForm /> */}
    </div>
  );
};

export default LoginRegisterPage;
