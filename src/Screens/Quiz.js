/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import img from "../Images/24.png";
import img2 from "../Images/25.png";
import img3 from "../Images/26.png";
import img4 from "../Images/27.png";
import img5 from "../Images/41.png";
import img6 from "../Images/42.png";

const Quiz = () => {
    const navigate = useNavigate()
  return (
    <>
      <Navbar />

      <div className="EventFiveSec">
        <img src={img} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <p className="first">02:00</p>
        <p className="second">2/15</p>
      </div>

      <div className="QuizQuestionfirst">
        <p>Question 01.</p>
        <div>
          <img src={img5} alt="" />
          <img src={img6} alt="" />
        </div>
      </div>

      <div className="QuizQuestionSecond">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          interdum velit nec sapien bibendum, ut consequat massa convallis. Sed
          gravida dolor vel purus mollis, ut dictum turpis consectetur. Nullam
          auctor, felis vel viverra dapibus, ipsum libero mattis sapien, sed
          commodo eros sapien non urna. Suspendisse potenti. Sed ut felis metus.
          Vestibulum ante ipsum primis in faucibus
        </p>
      </div>

      <div className="QuizQuestionThird">
      <button onClick={() => navigate("/leaderBoard")}>Option 1.</button>
      <button onClick={() => navigate("/leaderBoard")}>Option 2.</button>
      <button onClick={() => navigate("/leaderBoard")}>Option 3.</button>
      <button onClick={() => navigate("/leaderBoard")}>Option 4.</button>
      </div>

      <div className="QuizQuestionFourth">
        <p>Total Earned Point</p>
        <p>60</p>
      </div>
    </>
  );
};

export default Quiz;
