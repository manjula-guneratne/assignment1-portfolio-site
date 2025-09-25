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

      <div class="d-flex">
        <div class="flex-shrink-0 justify-content-end">
          <img
            src="/images/Portfolio_image.jpg"
            alt="My portfolio image"
            width="50%"
            height="100%"
          />
        </div>

        <div class="container d-flex justify-content-center">
          <div class="w-50">
            <table class="table table-dark table-striped table-borderless">
              <tbody>
                <tr>
                  <td>Name: Manjula Guneratne</td>
                </tr>
                <tr>
                  <td>He there</td>
                </tr>
              </tbody>
            </table>
          </div>
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
