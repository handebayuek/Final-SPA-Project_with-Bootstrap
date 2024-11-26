import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registration.css";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please write correct email (example@example.com)");
    } else if (email === "") {
      setError("");
    } else {
      navigate("/");
    }
  };

  const onRegisterClick = () => {
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError("All fields are required");
      return;
    }

    if (!validateEmail(email)) {
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    navigate("/");
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center p-5 mt-3">
      <div className="w-50 shadow-lg mt-5">
        <div className="p-5">
          <h1 className="text-center">Register</h1>
        </div>
        <div className="m-3">
          <label className="form-label ">Name</label>
          <input
            value={name}
            placeholder="Enter your name..."
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="m-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            value={email}
            placeholder="Enter your email..."
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="m-3">
          <label className="form-label">Password</label>
          <input
            value={password}
            type="password"
            placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="m-3">
          <label className="form-label">Confirm Password</label>
          <input
            value={confirmPassword}
            type="password"
            placeholder="Confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="text-danger text-center mb-3">{error}</div>
        <div className="button-inspo row d-flex justify-content-center align-item-center">
          <a
            href="#"
            className="button type--B regist-btn"
            onClick={onRegisterClick}
          >
            <div className="button__line"></div>
            <div className="button__line"></div>
            <span className="button__text">Register</span>
            <div className="button__drow1"></div>
            <div className="button__drow2"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Registration;
