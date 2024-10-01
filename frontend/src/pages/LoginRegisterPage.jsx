import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "../components/Auth/LoginForm";
import RegisterForm from "../components/Auth/RegisterForm";
import ForgotForm from "../components/Auth/ForgotForm";
import "./LoginRegisterPage.css";
import ResetForm from "../components/Auth/ResetForm";

const LoginRegisterPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="login" />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="forgot" element={<ForgotForm />} />
        <Route path="reset" element={<ResetForm />} />
      </Routes>
    </div>
  );
};

export default LoginRegisterPage;
