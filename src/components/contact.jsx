import react from "react";

function Contact() {
  return (
    <>
      <div>
        <h1>Contact Me</h1>
        <p>This is the Contact Me page.</p>
      </div>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ minHeight: "5vh" }}
      >
        <form className="row g-3">
          <div className="col-md-4 text-start">
            <label htmlFor="inputFirstName" className="htmlForm-label">
              First Name
            </label>
            <input type="text" className="form-control" id="inputFirstName" />
          </div>
          <div className="col-md-4 text-start">
            <label htmlFor="inputSecondName" className="htmlForm-label">
              Last Name
            </label>
            <input type="text" className="form-control" id="inputSecondName" />
          </div>
          <div className="col-md-4 text-start">
            <label htmlFor="inputContactNumber" className="htmlForm-label">
              Contact Number
            </label>
            <input
              type="text"
              className="form-control"
              id="inputContactNumber"
            />
          </div>
          <div className="col-12 text-start">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="col-md-6 text-start">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-4 text-start">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <input type="text" className="form-control" id="inputState" />
          </div>
          <div className="col-md-2 text-start">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
          <div class="col-12 text-start">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Contact;
