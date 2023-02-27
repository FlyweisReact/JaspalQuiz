/** @format */

import React from "react";
import Navbar from "../Components/Navbar";
import img from "../Images/23.png";
import img2 from "../Images/22.png";

const Activity = () => {
  return (
    <>
      <Navbar />
      <p
        style={{
          textAlign: "center",
          fontSize: "3rem",
          color: "#006c5f",
          marginTop: "2%",
          fontWeight: "600",
        }}
      >
        Activity
      </p>

      <div className="activityTwosec">
        <div
          style={{ backgroundColor: "#188a06", border: "1px solid #188a06" }}
        >
          <p>Rank</p>
          <p>3/50</p>
        </div>
        <div
          style={{ backgroundColor: "#006c5f", border: "1px solid #006c5f" }}
        >
          <p>Reward Earn</p>
          <p>***********</p>
        </div>
      </div>

      <p
        style={{
          textAlign: "center",
          fontSize: "3rem",
          color: "#006c5f",
          marginTop: "2%",
          fontWeight: "600",
        }}
      >
        Perfomance
      </p>

      <div className="activitybar">
        <div>
          <p className="first">Correct</p>
          <p className="second " style={{ color: "#188a06" }}>
            80%
          </p>
          <img src={img} alt="" />
        </div>
        <div>
          <p className="first">Incorrect</p>
          <p className="second" style={{ color: "#ff0000" }}>
            10%
          </p>
          <img src={img2} alt="" />
        </div>
      </div>


      <p
        style={{
          textAlign: "center",
          fontSize: "3rem",
          color: "#006c5f",
          marginTop: "2%",
          fontWeight: "600",
        }}
      >
        Summery
      </p>

      <div className="activityThreeSec">
        <button style={{backgroundColor : "#2f8706" , border : '1px solid #2f8706'}}>Correct</button>
        <button style={{backgroundColor : "#ff0000" , border : '1px solid #ff0000'}}>Incorrect</button>
        <button style={{backgroundColor : "#ff0000" , border : '1px solid #ff0000'}}>Incorrect</button>
      </div>

    </>
  );
};

export default Activity;
