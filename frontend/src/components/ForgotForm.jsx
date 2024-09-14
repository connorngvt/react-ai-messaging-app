import React from "react";
import "./ForgotForm.css";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const ForgotForm = () => {

  return (
    <div className="forgot-form">
      <form action="">
        <h1>Forgot Password</h1>
        <div className="forgot-form__input-box">
          <input type="text" placeholder="Email" required />
          <FaUser className="icon" />
        </div>
      </form>
      <div class="col-auto">
        <button id="button" type="submit" className="btn btn-primary mb-3">
          Send Email
        </button>
      </div>
      <div className="login-form__goback-link">
        <p>
           <Link to="/register">Sign In</Link>
        </p>
      </div>
    </div>
  );
};


export default ForgotForm;
