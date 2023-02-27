/** @format */

import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import img from "../Images/6.png";
import img2 from "../Images/7.png";
import img3 from "../Images/8.png";
import img4 from "../Images/9.png";
import img5 from "../Images/10.png";
import img6 from "../Images/11.png";
import img7 from "../Images/12.png";
import img8 from "../Images/13.png";
import img9 from "../Images/15-removebg-preview.png";
import img10 from "../Images/14-removebg-preview.png";
import img11 from "../Images/16.png";
import Dropdown from "react-bootstrap/Dropdown";
import img12 from "../Images/17.png";
import img13 from "../Images/18.png";
import img14 from "../Images/20.png";
import img15 from "../Images/21.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0,0)
  })
  return (
    <>
      <Navbar />

      <div className="HomePageBanner">
        <button>EXPLORE</button>
      </div>

      <div className="HomePageFourSec">
        <img src={img} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
      </div>

      <div className="HomeGame">
        <img src={img9} alt="" className="first" />
        <img src={img10} alt="" className="second" />
        <p className="head">Join a game ?</p>
        <div className="thressSec">
          <button
            style={{
              backgroundColor: "transparent",
              color: "#099e8c",
              border: "3px solid #099e8c",
            }}
          >
            Enter a Gome Code
          </button>
          <div className="empty"></div>
          <button
            style={{
              border: "3px solid #004840",
              color: "#fff",
              backgroundColor: "#099e8c",
            }}
            onClick={() => navigate("/joinGame")}
          >
            {" "}
            Join The Game
          </button>
        </div>
      </div>

      <div className="centerImage">
        <img src={img11} alt="" />
      </div>
      <div className="HomeDrop">
        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            style={{
              fontSize: "25px",
              fontWeight: " bold",
              backgroundColor: "#004840",
            }}
          >
            KIDS QUIZ
          </Dropdown.Toggle>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            style={{
              fontSize: "25px",
              fontWeight: " bold",
              backgroundColor: "#004840",
            }}
          >
            STUDENT QUIZ
          </Dropdown.Toggle>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            style={{
              fontSize: "25px",
              fontWeight: " bold",
              backgroundColor: "#004840",
            }}
          >
            COMPETITION
          </Dropdown.Toggle>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            style={{
              fontSize: "25px",
              fontWeight: " bold",
              backgroundColor: "#004840",
            }}
          >
            Diffremtial equation
          </Dropdown.Toggle>
        </Dropdown>
      </div>

      <div className="Homesixsec">
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
      </div>

      <div className="HomeNewTwoSec">
        <img src={img13} alt="" className="second" />
        <p>User-------------------------------------------- : 15 points</p>
        <div className="twosec">
          <button
            style={{
              backgroundColor: "#188a06",
              color: "#FFF",
              border: "3px solid #099e8c",
            }}
            onClick={() => navigate("/upcomingEvent")}
          >
            Create The Game
          </button>
          <button
            style={{
              border: "3px solid #004840",
              color: "#fff",
              backgroundColor: "#0a8eab",
            }}
            onClick={() => navigate("/upcomingEvent")}
          >
            {" "}
            Join The Game
          </button>
        </div>
      </div>

      <div className="centerImage">
        <img src={img14} alt="" />
      </div>

      <div className="centerImage" onClick={() => navigate("/upcomingEvent")}>
        <img src={img15} alt="" style={{ width: "100%" , cursor : 'pointer' }} />
      </div>
    </>
  );
};

export default Home;
