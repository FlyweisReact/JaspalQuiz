import React from 'react'
import googleImage from "../../Images/google 1.png";
import facebook from "../../Images/facebook.png";
import logo from "../../Images/logo.png";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate()
  return (
    <div className="BackgroundImage">
    <div className="SignInBogForm">
      <div className="SinginForm">
        <div className="left">
          <img src={logo} alt="logo" />
        </div>
        <div className="right">
          <p style={{ fontSize: "25px", fontWeight: "600" }}>Let the joy begin</p>
          <p style={{ fontSize: "25px", fontWeight: "600" }}>Signup</p>
          <form>
            <div>
              <p>Mobile Number</p>
              <input type="text" />
            </div>
            <div>
              <p>Full Name</p>
              <input type="text" />
            </div>
            <div>
              <p>Email id</p>
              <input type="text" />
            </div>
            <button style={{marginTop : '20px'}} onClick={() => navigate('/verify')} >Sign up</button>
            <p
              style={{
                textAlign: "center",
                width: "100%",
                marginTop: "20px",
              }}
            >
              or Signin with
            </p>

            <div className="socialDiv">
              <img src={googleImage} alt="google" />
              <img src={facebook} alt="google" />
            </div>

            <p style={{ textAlign: "center", marginTop: "20px" }}>
             Already Have An Account{" "}
              <span style={{ color: "#099e8c",     cursor: "pointer" }}  onClick={() => navigate("/signin")}>
                LOGIN
              </span>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SignUp