/** @format */

import React from "react";
import googleImage from "../../Images/google 1.png";
import facebook from "../../Images/facebook.png";
import logo from "../../Images/logo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="BackgroundImage">
      <div className="SignInBogForm">
        <div className="SinginForm">
          <div className="left">
            <img src={logo} alt="logo" />
          </div>
          <div className="right">
            <p style={{ fontSize: "25px", fontWeight: "600" }}>Sign In</p>
            <form>
              <div>
                <p>Mobile Number</p>
                <input type="text" />
              </div>
              <div>
                <p>Password</p>
                <input type="text" />
              </div>
              <p
                style={{ textAlign: "right"  , cursor : 'pointer'}}
                onClick={() => navigate("/forgetPassword")}
              >
                forgot Password?
              </p>
              <button onClick={() => navigate("/home")}>Login</button>
              <p
                style={{
                  textAlign: "center",
                  width: "100%",
                  marginTop: "20px",
                }}
              >
                or Login with
              </p>

              <div className="socialDiv">
                <img src={googleImage} alt="google" />
                <img src={facebook} alt="google" />
              </div>

              <p style={{ textAlign: "center", marginTop: "20px" }}>
                Don't Have An Account{" "}
                <span
                  style={{ color: "#099e8c", cursor: "pointer" }}
                  onClick={() => navigate("/signup")}
                >
                  SIGNUP
                </span>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
