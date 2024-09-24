import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "../components/Auth/LoginForm";
import RegisterForm from "../components/Auth/RegisterForm";
import ForgotForm from "../components/Auth/ForgotForm";
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
