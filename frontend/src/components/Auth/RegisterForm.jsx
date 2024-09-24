import React, { useState } from "react";
import "./RegisterForm.css";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const RegisterForm = () => {

  const [avatar, setAvatar] = useState({
    file: null,
    url: ""
  })

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
      })
    }
  };

  return (
    <div className="register-form">
      <form>
        <h1>Register</h1>
        <label htmlFor="file">
          <img src={avatar.url || "/avatar.png"} alt="avatar" />
          Upload an image
        </label>
        <input
          type="file"
          id="file"
          style={{ display: "none" }}
          onChange={handleAvatar}
        />
        <div className="input-box">
          <input type="text" name="username" placeholder="Username" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="text" name="email" placeholder="Email" required />
          <MdEmail className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <FaLock className="icon" />
        </div>
      </form>
      <div className="col-auto">
        <button id="button" type="submit" className="btn btn-primary mb-3">
          Register
        </button>
      </div>
      <div className="login-link">
        <p>
          Already have an account? <Link to="/auth/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
