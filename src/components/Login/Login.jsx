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
      <div className="container pt-5">
        <div className="">
          <div className="card-all shadow p-4 border border-success rounded-4 d-flex justify-content-center align-items-center">
            <div className="card-body">
              <h1 className="h1-login text-center mb-4">Login</h1>
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
              <div className="btn-all d-flex justify-content-around  align-item-center">
                <div>
                  <button
                    type="submit"
                    className="btn btn-xl btn-login"
                    onClick={onButtonClick}
                  >
                    Log in
                  </button>

                  <p className="text-center my-2">or</p>

                  <button
                    className="btn btn-xl btn-login"
                    onClick={onRegisterClick}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
