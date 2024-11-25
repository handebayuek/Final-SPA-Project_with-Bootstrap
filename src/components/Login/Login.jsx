import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const onButtonClick = () => {
    if (email === "") {
      setEmailError("Email cannot be empty");
    } else {
      setEmailError("");
    }
    if (password === "") {
      setPasswordError("Password cannot be empty");
    } else {
      setPasswordError("");
    }

    if (email && password) {
      navigate("/");
    }
  };

  const onRegisterClick = () => {
    navigate("/registration");
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row w-75 shadow-lg rounded overflow-hidden">
        {/* Left Side */}
        <div className="col-md-6 bg-white p-5">
          <h1 className="text-center mb-4">Welcome back!</h1>
          <p className="text-center mb-5">Log in to your account to continue</p>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <span className="text-danger">{emailError}</span>}
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && (
              <span className="text-danger">{passwordError}</span>
            )}
          </div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <input type="checkbox" className="me-2" />
              <label>Remember me</label>
            </div>
            <a href="#" className="text-decoration-none text-primary">
              Forgot Password?
            </a>
          </div>
          <div className="button-inspo d-flex row justify-content-center align-item-center">
            <a href="#" className="button type--A" onClick={onButtonClick}>
              <div className="button__line"></div>
              <div className="button__line"></div>
              <span className="button__text">Log in</span>
              <div className="button__drow1"></div>
              <div className="button__drow2"></div>
            </a>

            <div className="text-center p-4">or</div>

            <a href="#" className="button type--B" onClick={onRegisterClick}>
              <div className="button__line"></div>
              <div className="button__line"></div>
              <span className="button__text">Register</span>
              <div className="button__drow1"></div>
              <div className="button__drow2"></div>
            </a>
          </div>
        </div>
        {/* Right Side */}
        <div className="col-md-6 bg-dark text-white d-flex flex-column justify-content-center align-items-center position-relative">
          <img
            src="public/image/backgroung1.jpg"
            alt="Aespa Karina"
            className="img-fluid w-100 h-100 object-cover position-absolute"
            style={{ opacity: 0.5 }}
          />
          <div className="text-center position-relative">
            <h2 className="mb-3">BotaniPure</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
