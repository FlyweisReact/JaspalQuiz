/** @format */

import React from "react";
import Navbar from "../Components/Navbar";

const LeaderBoard = () => {
  return (
    <>
      <Navbar />
      <p
        style={{
          textAlign: "center",
          fontSize: "3rem",
          color: "#006c5f",
          marginTop: "2%",
          fontWeight : '600'
        }}
      >
        Leader Board
      </p>

      <div className="leaderThreeSec">
        <p>Rank</p>
        <p>Name</p>
        <p>Score</p>
      </div>
      <hr style={{width : '80%' , marginLeft : '10%'}} />

      <div className="leaderBrown">
        <p>1st</p>
        <p>Name</p>
        <p>12</p>
      </div>
      <div className="leaderBrown">
        <p>1st</p>
        <p>Name</p>
        <p>12</p>
      </div>
      <div className="leaderBrown">
        <p>1st</p>
        <p>Name</p>
        <p>12</p>
      </div>
      <div className="leaderBrown">
        <p>1st</p>
        <p>Name</p>
        <p>12</p>
      </div>
      <div className="leaderBrown">
        <p>1st</p>
        <p>Name</p>
        <p>12</p>
      </div>
      <div className="leaderBrown">
        <p>1st</p>
        <p>Name</p>
        <p>12</p>
      </div>
      <div className="leaderBrown">
        <p>1st</p>
        <p>Name</p>
        <p>12</p>
      </div>
      <div className="leaderBrown">
        <p>1st</p>
        <p>Name</p>
        <p>12</p>
      </div>
    </>
  );
};

export default LeaderBoard;
