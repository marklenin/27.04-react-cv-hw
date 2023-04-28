import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <main className="container">
      <section id="aboutme" className="aboutme">
        <div className="aboutme-right">
          <div className="aboutme-right__circle"></div>
          <p>Name: John Stuart Doe</p>

          <p>Date of birth: 28-Aug-1990</p>
          <p>Nationality: Canadian</p>

          <div className="aboutme-right__links">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
        <div className="aboutme-left">
          <span className="icon-1 icon">
            <i className="fa-regular fa-pen-to-square"></i>
          </span>

          <h3>About Me</h3>
          <p>
            Beast. Meat set greater she'd creeping from were under bearing won't
            wherein it open. Light. From midst all fill saying day Very void
            land their fly. Heaven green without whose replenish seasons there
            brought, over own sixth in Beginning.
          </p>
          <p id="marginp">All behold. Our every fruitful so.</p>

          <span className="icon-2 icon">
            <i className="fa-solid fa-volleyball"></i>
          </span>

          <h4>Hobbies</h4>
          <p id="marginp">bicycling | gaming | hiking | photography</p>

          <span className="icon-3 icon">
            <i className="fa-brands fa-instagram"></i>
          </span>
          <h4>Latest Post</h4>
          <p>Loading...</p>
        </div>

        <h1 className="about-word">about</h1>
      </section>
    </main>
  );
}

export default AboutMe;
