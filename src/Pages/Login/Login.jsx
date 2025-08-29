import React from "react";
import "./Login.css";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";


const Login = () => {
      const navigate = useNavigate();
       const home = ()=>
        navigate("/")
  return (
    <>
    <Navbar />
    <div onClick={home} className="back-bt"><FaRegArrowAltCircleLeft /></div>
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <p>
            Don’t have an account? <a href="/signup">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
