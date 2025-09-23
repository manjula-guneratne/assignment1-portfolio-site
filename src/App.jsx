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
import { Button } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/components/about">About Me</Link>
        <Link to="/components/project">Project</Link>
        <Link to="/components/services">Services</Link>
        <Link to="/components/contact">Contact Me</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components/about" element={<About />} />
        <Route path="/components/project" element={<Project />} />
        <Route path="/components/services" element={<Services />} />
        <Route path="/components/contact" element={<Contact />} />
      </Routes>

      <div className="container-fluid">
        <div className="header">
          <h1>Header section</h1>
        </div>
        <div className="content">
          <h2>Content section</h2>
        </div>
        <div className="footer">
          <h3>Footer section</h3>
        </div>
      </div>
    </>
  );
}

export default App;
 