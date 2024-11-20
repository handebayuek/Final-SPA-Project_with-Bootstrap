import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

const Login = (props) => {
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
    <div>
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-3 col-md-6 col-md-3">
          <div className="card shadow p-4">
            <div className="card-body">
              <h1 className="text-center mb-4">Login</h1>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  value={email}
                  placeholder="Enter your email here..."
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                />
                {emailError && (
                  <span className="text-danger">{emailError}</span>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  value={password}
                  placeholder="Enter your password here..."
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  type="password"
                />
                {passwordError && (
                  <span className="text-danger">{passwordError}</span>
                )}
              </div>
              <div className="d-grid gap-2">
                <button className="btn-login" onClick={onButtonClick}>
                  Log in
                </button>
                <p className="text-center my-2">or</p>
                <button className="btn-login" onClick={onRegisterClick}>
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      s
    </div>
  );
};

export default Login;
