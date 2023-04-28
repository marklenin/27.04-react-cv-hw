import React from "react";
import "./AboutMe.css";

function Education() {
  return (
    <main class="container">
      <section id="eduskills" class="eduskills aboutme">
        <div class="eduskills-left aboutme-left">
          <div class="eduskills-left__edu-text">
            <h4>Education</h4>

            <p class="eduskills-left__uni">ILD University of Technology</p>
            <p class="eduskills-left__deg">Major in Computer Science</p>
            <p>
              Given two spirit very unto firmament. Fourth and she'd their fruit
              together.
            </p>
            <h1>2018-2022</h1>
          </div>

          <div class="eduskills-left__work-text eduskills-left__edu-text">
            <h4>Work Experience</h4>

            <p class="eduskills-left__uni">Cubic Web Development Agency</p>
            <p class="eduskills-left__deg">Developer Internship</p>
            <p>
              Given two spirit very unto firmament. Fourth and she'd their fruit
              together.
            </p>
            <h1>2022-Present</h1>
          </div>
        </div>
        <div class="eduskills-right aboutme-right">
          <h4>Skills</h4>
          <p id="h6">professional</p>
          <div class="css skills__items">
            <p>90%</p>
            <p>CSS</p>
          </div>
          <div class="html skills__items">
            <p>95%</p>
            <p>HTML</p>
          </div>
          <div class="css skills__items">
            <p>90%</p>
            <p>CSS</p>
          </div>
          <div class="js skills__items">
            <p>20%</p>
            <p>JavaScript</p>
          </div>
        </div>
        <h1 class="about-word">Edu. & Skills</h1>
      </section>
    </main>
  );
}

export default Education;
