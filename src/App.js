import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import MyWorks from "./components/MyWorks";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/education" element={<Education />} />
          <Route path="/my-works" element={<MyWorks />} />
          <Route path="/hire-me" element={<ContactMe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
