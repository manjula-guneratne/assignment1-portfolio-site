import react from "react";

function Project() {
  return (
    <>
      <div>
        <h1>My Projects</h1>
        <p>Click on the Card to Visit the project</p>
      </div>
      <div className="container">
        <div className="row no-gutters">
          <div className="col">
            <a href="https://dog-dash.herokuapp.com/" target="_blank" rel="..." className="...">
            <div className="card h-100 w-100" style={{ width: "18rem" }}>
              <img src="/images/dog_dash.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  This is a web application for seeking dog walker. Even though
                  more and more people are working from home and have
                  potentially more time to take care of their dogs, the reality
                  is that some people have a job function that does not allow
                  them to go outside for a dog walk. Even when the dog owner has
                  time, he may want to spend it on other activities than walking
                  the dog. Elderly people could also need help walking their dog
                  especially during cold weather.
                </p>
              </div>
            </div>
            </a>
          </div>
          <div className="col">
            <a href="https://the-coders-bay-app.herokuapp.com/" target="_blank" rel="..." className="...">
            <div className="card h-100 w-100" style={{ width: "18rem" }}>
              <img src="/images/coders_bay.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  The Coders Bay is an online forum where like minded
                  individuals can post about all things that are code. If you
                  need assistance with a project our coaches can work with you
                  for a fee! Want a coding buddy? Join the chat room and get to
                  know someone! Our goal is to provide a hub for knowledge and
                  collaboration.
                </p>
              </div>
            </div>
            </a>
          </div>
          <div className="col">
            <a href="https://uot-project1-group07.github.io/project1-group07/" target="_blank" rel="..." className="...">
            <div className="card h-100 w-100" style={{ width: "18rem" }}>
              <img src="/images/covid_positivity.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  A site to help individuals who are self isolating due to covid
                  have a positive mind set and give them information that has
                  helped others in the past. Emotional and financial.
                </p>
              </div>
            </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
