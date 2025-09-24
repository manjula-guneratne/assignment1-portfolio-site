import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "./components/about";
import Home from "./components/home.jsx";
import Project from "./components/project";
import Services from "./components/services";
import Contact from "./components/contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="container-fluid">
        <div class="header">

          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <img
                src="/images/puppy.png"
                alt=""
                width="100"
                height="85"
                class="d-inline-block align-text-top"
              ></img>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/components/about">About Me</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/components/project">Project</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/components/services">Services</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/components/contact">Contact Me</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

        </div>
        <div class="content">

          <br></br>
          <br></br>
          <br />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/components/about" element={<About />} />
            <Route path="/components/project" element={<Project />} />
            <Route path="/components/services" element={<Services />} />
            <Route path="/components/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
