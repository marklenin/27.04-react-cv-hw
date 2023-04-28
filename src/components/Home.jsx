import React from "react";
import logo from "../assets/realAvatar.png";
import "./AboutMe.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="body">
      <div className="container aboutmeMain">
        <div
          className="d-flex aboutme"
          style={{ width: "65%", paddingTop: "8rem" }}
        >
          <img src={logo} alt="" style={{ height: "270px" }} />
          <div>
            <p
              style={{
                color: "#9E8C6C",
              }}
            >
              Designer / Developer
            </p>
            <h1
              style={{
                fontFamily: "Playfair Display",
                fontSize: "70px",
                color: "dark-blue",
                textTransform: "capitalize",
                marginBottom: "20px",
              }}
            >
              Marlen <br /> Arzymatov
            </h1>
            <Link to="/hire-me">
              <button className="btn btn-info text-light">Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
