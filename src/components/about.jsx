/*
File name: App.css
Student's Name: Manjula Gunaratne
Student ID: 300459860
Date: September 25, 2025
*/

import React from "react";

function About() {
  return (
    <div>
      <h1>About Me</h1>
      <br />

      {/* Center the Container and add the Profile image and Table inside it */}
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col">
            <img
              src="/images/Portfolio_image.jpg"
              alt="My portfolio image"
              width="80%"
              height="100%"
            />
          </div>
          <div className="col">
            <table className="table table-borderless style={{ backgroundColor: 'transparent' }}">
              <tbody>
                <tr>
                  <td>Name: Manjula Guneratne</td>
                </tr>
                <tr>
                  <td>
                    I am currently working as a Maintenance Coordinator, with a
                    strong passion for transitioning into the tech field. I hold
                    a Full-Stack Web Development certification from the
                    University of Toronto and am in my second year of the
                    Artificial Intelligence – Software Engineering program at
                    Centennial College. I believe in hard work and that actions
                    speak louder than words. My next step is to pursue exciting
                    opportunities in artificial intelligence or automation,
                    where I can apply both my technical training and hands-on
                    problem-solving skills.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <br />

      {/* Resume Link Button */}
      <div class="d-grid gap-2 col-3 mx-auto">
        <a
          class="btn btn-primary"
          role="button"
          href="https://docs.google.com/document/d/14va3Vk7lsrwfy7Lf2inikEqJVZyLk4Wd9giwjgRBy1A/edit?usp=sharing"
        >
          Resume Link
        </a>
      </div>

      <br />
    </div>
  );
}
export default About;
