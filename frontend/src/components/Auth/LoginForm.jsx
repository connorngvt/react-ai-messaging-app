import React from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const LoginForm = () => {

  return (
    <div className="login-form">
      <form>
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Email" required />
          <MdEmail className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>
      </form>
      <div className="remember-forgot">
        <label>
          <input type="checkbox" />
          Remember me
        </label>
        <Link to="/auth/forgot">Forgot password</Link>
      </div>
      <div className="col-auto">
        <button id="button" type="submit" className="btn btn-primary mb-3">
          Login
        </button>
      </div>
      <div className="register-link">
        <p>
          Don't have an account? <Link to="/auth/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

// const meteors = () => {
//     return(
// <section>
//     <span></span>
//     <span></span>
//     <span></span>
//     <span></span>
//     <span></span>
//     <span></span>
//     <span></span>
//     <span></span>
//     <span></span>
//     <span></span>
// </section>
//     )
// }

export default LoginForm;
