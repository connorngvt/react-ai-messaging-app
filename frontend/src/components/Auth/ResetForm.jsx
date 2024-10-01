import React from "react";
import "./ResetForm.css";
import { Link, useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { toast } from "react-toastify";
import { confirmPasswordReset } from "firebase/auth";
import { auth } from "../../lib/firebase";

const ResetForm = () => {

  const navigate = useNavigate();

  const getQueryParam = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  };

  const handleReset = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { newPassword, confirmPassword } = Object.fromEntries(formData);
    const oobCode = getQueryParam("oobCode");
    if (newPassword !== confirmPassword) {
      toast.error("The passwords you entered do not match. Please try again.");
      return;
    }
    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      toast.success("Password has been reset successfully!");
      navigate("/auth/login");

    } catch (err) {
      if (err.code === "auth/internal-error") {
        toast.error(
          "The password reset link is invalid or has expired. Please check your email for a valid link."
        );
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="reset-form">
      <form onSubmit={handleReset}>
        <h1>Reset Password</h1>
        <div className="input-box">
          <input
            type="password"
            placeholder="New Password"
            name="newPassword"
            required
          />
          <FaLock className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            required
          />
          <FaLock className="icon" />
        </div>
        <button id="button" type="submit" className="btn btn-primary mb-3">
          Change Password
        </button>
      </form>
      <div className="go-back">
        <p>
          <Link to="/auth/login">Go to login</Link>
        </p>
      </div>
    </div>
  );
};

export default ResetForm;
