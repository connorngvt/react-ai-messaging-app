import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import ForgotForm from "../components/auth/ForgotForm";
import "./LoginRegisterPage.css";

const LoginRegisterPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="login" />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="forgot" element={<ForgotForm />} />
      </Routes>
    </div>
  );
};

export default LoginRegisterPage;
