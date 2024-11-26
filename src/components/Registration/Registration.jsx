import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

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

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    navigate("/");
  };

  if (name && email && password && confirmPassword) {
    navigate("/");
  }

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row w-75 shadow-lg rounded mt-5">
        <div className=" col-md-6 bg-white p-5">
          <h1 className="text-center ">Register</h1>
        </div>
        <div className="m-3">
          <label className="form-label">Name</label>
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
        <div className="button-inspo d-flex row justify-content-evenly align-item-center">
          <a href="#" className="button type--B" onClick={onRegisterClick}>
            <div className="button__line"></div>
            <div className="button__line"></div>
            <span className="button__text">Register</span>
            <div className="button__drow1"></div>
            <div className="button__drow2"></div>
          </a>
        </div>
        <div className="text-danger text-center mb-3">{error}</div>
      </div>
    </div>
  );
};

export default Registration;
