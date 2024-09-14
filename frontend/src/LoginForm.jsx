import React from "react";
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const LoginForm = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock className="icon" />
                </div>
            </form>
            <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forgot password</a>
            </div>
            <div class="col-auto">
                <button id="button" type="submit" class="btn btn-primary mb-3">Login</button>
            </div>
            <div className="register-link">
                <p>Don't have  an account? <a href="#">Register</a>
                </p>
            </div>
        </div>


    )
}
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
