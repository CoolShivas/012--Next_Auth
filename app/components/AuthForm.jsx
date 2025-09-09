"use client";
import React, { useState } from "react";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

const AuthForm = () => {
  const [isLogIn, setIsLogIn] = useState(true); // True, you will see Login Page;
  // const [isLogIn, setIsLogIn] = useState(false); // False, you will see Signup Page;
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
        </div>
      </div>
    </>
  );
};

export default AuthForm;
