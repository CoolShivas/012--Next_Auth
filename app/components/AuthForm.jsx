"use client";
import React, { useState } from "react";
import {
  FaSignInAlt,
  FaUserPlus,
  FaUser,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

const AuthForm = () => {
  const [isLogIn, setIsLogIn] = useState(true); // True, you will see Login Page;

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div
          className="card p-4"
          style={{ width: "28rem", borderRadius: "12px" }}
        >
          <div className="text-center">
            {isLogIn ? (
              <FaSignInAlt size={50} className="text-primary mb-3" />
            ) : (
              <FaUserPlus size={50} className="text-success mb-3" />
            )}
            <h2 className="fw-bold">{isLogIn ? "Log-In" : "Sign-Up"}</h2>
          </div>
          <hr />
          <form>
            {/* Starting of Name Input */}
            {/* Showing the name input field in Sign-Up page not on Log-In page by AND Operator of not isLogin (!isLogIn)*/}
            {!isLogIn && (
              <div className="mb-3 input-group">
                <span className="input-group-text">
                  <FaUser className="text-primary" />
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="form-control"
                />
              </div>
            )}
            {/* Ending of Name Input */}
            {/* Starting of Email Input */}
            <div className="mb-3 input-group">
              <span className="input-group-text">
                <FaEnvelope className="text-success" />
              </span>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="form-control"
              />
            </div>
            {/* Ending of Email Input */}
            {/* Starting of Password Input */}
            <div className="mb-3 input-group">
              <span className="input-group-text">
                <FaLock className="text-danger" />
              </span>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                className="form-control"
              />
            </div>
            {/* Ending of Password Input */}
            {/* Starting of Button */}
            <button
              type="submit"
              className={`btn w-100 ${
                isLogIn ? "btn btn-primary" : "btn btn-success"
              }`}
            >
              {isLogIn ? "Login" : "Signup"}
            </button>
            {/* Ending of Button */}
            {/* Starting of Para */}
            <p
              className="text-center mt-3 text-primary"
              style={{ cursor: "pointer" }}
            >
              {isLogIn ? "Create an account" : "Already have an account"}
            </p>
            {/* Ending of Para */}
          </form>
        </div>
      </div>
    </>
  );
};

export default AuthForm;
