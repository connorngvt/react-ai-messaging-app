import React, { useState } from "react";
import "./RegisterForm.css";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";
import { auth, db } from "../../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import upload from "../../lib/upload";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    if (avatar.file == null) {
      toast.error("Please upload an avatar image.")
      setLoading(false);
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const imgUrl = await upload(avatar.file);

      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        id: res.user.uid,
        avatar: imgUrl,
        blocked: [],
      });

      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: [],
      });

      toast.success("Account created! You can login now!");
      navigate("/auth/login");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        toast.error("The email is already in use.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-form">
      <form onSubmit={handleRegister}>
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
          <input type="email" name="email" placeholder="Email" required />
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
        <button id="button" type="submit" disabled={loading}>
          {loading ? "Loading" : "Register"}
        </button>
      </form>
      <div className="login-link">
        <p>
          Already have an account? <Link to="/auth/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
