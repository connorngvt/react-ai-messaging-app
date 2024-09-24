import React from "react";
import "./ForgotForm.css";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const ForgotForm = () => {

  return (
    <div className="forgot-form">
      <form>
        <h1>Forgot Password</h1>
        <div className="input-box">
          <input type="text" placeholder="Email" required />
          <FaUser className="icon" />
        </div>
      </form>
      <div className="col-auto">
        <button id="button" type="submit" className="btn btn-primary mb-3">
          Send Email
        </button>
      </div>
      <div className="go-back">
        <p>
           <Link to="/auth/login">Go back</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotForm;
