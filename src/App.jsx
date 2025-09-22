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
    </>
  );
}

export default App;
 