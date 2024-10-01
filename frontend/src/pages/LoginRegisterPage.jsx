import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "../components/Auth/LoginForm";
import RegisterForm from "../components/Auth/RegisterForm";
import ForgotForm from "../components/Auth/ForgotForm";
import "./LoginRegisterPage.css";
import ResetForm from "../components/Auth/ResetForm";
import { useUserStore } from "../lib/userStore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useEffect } from "react";

const LoginRegisterPage = () => {

  const {currentUser, isLoading, fetchUserInfo} = useUserStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    })

    return () => {
      unSub();
    }
  }, [fetchUserInfo]);

  if (isLoading) return <div className="loading">Loading...</div>

  return (
    <div className="loginRegisterPage">
      <Routes>
        <Route path="/" element={<Navigate to="login" />} />
        <Route path="login" element={currentUser ? <Navigate to="/messaging" /> : <LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="forgot" element={<ForgotForm />} />
        <Route path="reset" element={<ResetForm />} />
      </Routes>
    </div>
  );
};

export default LoginRegisterPage;
