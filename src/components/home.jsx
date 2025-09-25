/*
File name: App.css
Student's Name: Manjula Gunaratne
Student ID: 300459860
Date: September 25, 2025
*/

import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <br></br>
      <figure class="text-center">
        <blockquote class="blockquote">
          “Hardworking student passionate about technology, building skills to
          launch a successful career in the tech sector. Focused on continuous
          learning, problem-solving, and contributing to innovative solutions.”
        </blockquote>
      </figure>

      <br />
      <br />
      <div class="d-grid gap-2 d-md-flex justify-content-md-center">
        <Link to="/components/about" className="btn btn-primary">
          About Page
        </Link>
        <Link to="/components/project" className="btn btn-primary">
          Project Page
        </Link>
        <Link to="/components/services" className="btn btn-primary">
          Services Page
        </Link>
        <Link to="/components/contact" className="btn btn-primary">
          Contact Page
        </Link>
      </div>
    </div>
  );
}
export default Home;
