import React from "react";
import "./RegisterForm.css";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const RegisterForm = () => {
  return (
    <div className="register-form">
      <form action="">
        <h1>Register</h1>
        <div className="register-form__input-box">
          <input type="text" placeholder="Username" required />
          <FaUser className="icon" />
        </div>
        <div className="register-form__input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>
        <div className="register-form__input-box">
          <input type="password" placeholder="Confirm Password" required />
          <FaLock className="icon" />
        </div>
      </form>
      <div class="col-auto">
        <button id="button" type="submit" class="btn btn-primary mb-3">
          Register
        </button>
      </div>
      <div className="register-form__login-link">
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
