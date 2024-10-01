import React from "react";
import "./ForgotForm.css";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../lib/firebase";

const ForgotForm = () => {
  const handleForgot = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email } = Object.fromEntries(formData);
    try {
      sendPasswordResetEmail(auth, email).then(() => {
        toast.success("Password reset email sent!");
      });
    } catch (err) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="forgot-form">
      <form onSubmit={handleForgot}>
        <h1>Forgot Password</h1>
        <div className="input-box">
          <input type="email" placeholder="Email" name="email" required />
          <FaUser className="icon" />
        </div>
        <button id="button" type="submit">
          Send Email
        </button>
      </form>
      <div className="go-back">
        <p>
          <Link to="/auth/login">Go back</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotForm;
