import React from "react";

function About() {
  return (
    <div>
      <h1>About Me</h1>

      <div class="d-flex justify-content-md-center">
        <div class="flex-shrink-0">
          <img
            src="/images/Portfolio_image.jpg"
            alt="My portfolio image"
            width="50%"
            height="100%"
          />
        </div>
        <div class="flex-grow-1 ms-3">
          Name: Manjula Guneratne
        </div>
      </div>

      <p>
        <a href="https://docs.google.com/document/d/14va3Vk7lsrwfy7Lf2inikEqJVZyLk4Wd9giwjgRBy1A/edit?usp=sharing">
          Resume Link
        </a>
      </p>
    </div>
  );
}
export default About;
