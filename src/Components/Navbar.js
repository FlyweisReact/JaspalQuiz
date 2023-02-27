/** @format */

import React, { useState } from "react";
import logo from "../Images/image-removebg-preview 1.png";
import img from "../Images/Group 7513.png";
import img1 from "../Images/home.png";
import "./Navbar.css";
import img2 from "../Images/leaderboad.png";
import img3 from "../Images/1.png";
import img4 from "../Images/2.png";
import img5 from "../Images/3.png";
import img6 from "../Images/4.png";
import { Link, useNavigate } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import img7 from "../Images/codicon_account.png";

const Navbar = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end" className='offCan'>
        <Offcanvas.Body>
          <div className="sideBar">
            <div className="first">
              <div className="up">
                {" "}
                <img src={img7} alt="" /> <p>UserName</p>
              </div>
              <div>
                <select>
                  <option>12hr</option>
                  <option>13hr</option>
                </select>
              </div>
            </div>
            <p className="kid">Kid</p>

            <form>
              <div>
                <p>User Id</p>
                <input type="text" placeholder="451254" />
              </div>
              <div>
                <p>Email</p>
                <input type="email" placeholder="user@gmail.com" />
              </div>
              <div>
                <p>Upgrade</p>
                <input type="text" />
              </div>
              <div>
                <p>Language</p>
                <input type="text" placeholder="English" />
              </div>
              <div>
                <p>Account Type</p>
                <select>
                  <option>Student</option>
                  <option>Teacher</option>
                  <option>Aspirant</option>
                </select>
              </div>
              <div>
                <p>Password</p>
                <input type="password" placeholder="English" />
              </div>
            </form>

            <ul>
              <li>Settings</li>
              <li>Refer & Earn Rewards</li>
              <li>Help</li>
              <li>Terms & Service</li>
              <li>Privacy Policy</li>
              <li style={{ color: "#e3ab77", fontWeight: "bold" , cursor : 'pointer' }} onClick={() => navigate('/')}>LOGOUT</li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <div className="nav">
        <div className="left">
          <img src={logo} alt="" />
        </div>
        <div className="main">
          <div className="mid">
            <ul>
              <div>
                <img src={img1} alt="" />
                <Link to="/home" style={{ textDecoration: "none" }}>
                  <li>Home</li>
                </Link>
              </div>
              <div>
                <img src={img2} alt="" />
                <Link to="/leaderBoard" style={{ textDecoration: "none" }}>
                  <li>LeaderBoad</li>
                </Link>
              </div>
              <div>
                <img src={img3} alt="" />
                <Link to="/activity" style={{ textDecoration: "none" }}>
                  <li>Activity</li>
                </Link>
              </div>
              <div>
                <img src={img4} alt="" />
                <Link to="/events" style={{ textDecoration: "none" }}>
                  <li>Events</li>
                </Link>
              </div>
              <div>
                <img src={img5} alt="" />
                <Link to="/report" style={{ textDecoration: "none" }}>
                  <li>Report</li>
                </Link>
              </div>
            </ul>
          </div>
          <div className="right">
            <div className="searchBar">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input type="search" />
            </div>
            <img src={img} alt="" className="quizImages" />
            <div className="last">
              <ul onClick={handleShow}>
                <img src={img6} alt="" />
                <li>Student</li>
              </ul>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
