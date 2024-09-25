import React, { useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    try {
      // Sign in attempt using firebase
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Successfully logged in.")
    }
    catch (err) {
      if (err.code === "auth/invalid-credential") {
        toast.error("Invalid email or password. Please try again.");
        console.log("Error: Invalid email or password.");
      } else {
        toast.error("An error occurred. Please try again.");
        console.log("Error:", err.message);
      }
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-form">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="input-box">
          <input type="email" placeholder="Email" name="email" required />
          <MdEmail className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <Link to="/auth/forgot">Forgot password</Link>
        </div>
        <button id="button" type="submit" disabled={loading}>
          {loading ? "Loading" : "Login"}
        </button>
      </form>
      <div className="register-link">
        <p>
          Don't have an account? <Link to="/auth/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
