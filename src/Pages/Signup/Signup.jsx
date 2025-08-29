import React from "react";
import "./Signup.css";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const Signup = () => {
  const navigate = useNavigate();
  const home = ()=>{
    navigate("/login")
  }
  return (
    <><Navbar />
    <div onClick={home} className="back-bt"><FaRegArrowAltCircleLeft /></div>
    <div className="auth-container">
      <div className="auth-box">
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
    </>
  );
};

export default Signup;
