import React, { useState } from "react";
import "./LoginSignup.css";
import email_icon from "./email.png";
import user_icon from "./person.png";
import password_icon from "./password.png";

const LoginSignup = () => {
  const [value, setValue] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="heading">{value}</div>
      </div>

      <div className="inputs">
        {value === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
            />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" name="email" id="email" placeholder="email" />
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
        </div>
      </div>
      {value === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Forgot Password? <span>Click Here!</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={value === "Login" ? "submit gray" : "submit"}
          onClick={() => setValue("Sign Up")}
        >
          Sign Up
        </div>
        <div
          className={value === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => setValue("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
