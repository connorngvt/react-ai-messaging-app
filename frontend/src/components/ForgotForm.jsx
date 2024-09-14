import React from "react";
import "./ForgotForm.css";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const ForgotForm = () => {

  return (
    <div className="login-form">
      <form action="">
        <h1>Login</h1>
        <div className="login-form__input-box">
          <input type="text" placeholder="Username" required />
          <FaUser className="icon" />
        </div>
        <div className="login-form__input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>
      </form>
      <div className="login-form__remember-forgot">
        <label>
          <input type="checkbox" />
          Remember me
        </label>
        <a href="#">Forgot password</a>
      </div>
      <div class="col-auto">
        <button id="button" type="submit" className="btn btn-primary mb-3">
          Login
        </button>
      </div>
      <div className="login-form__register-link">
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};


export default ForgotForm;
