import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const navigate = useNavigate();

  function handleChange(event) {

    const { name, value } = event.target;

    if (name === "firstName") setFirstName(value);
    if (name === "lastName") setLastName(value);
    if (name === "contactNumber") setContactNumber(value);
    if (name === "address") setAddress(value);
    if (name === "city") setCity(value);
    if (name === "state") setState(value);
    if (name === "zip") setZip(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(firstName+" "+lastName+"\n"+contactNumber+"\n"+address+"\n"+city+", "+state+" "+zip);

    navigate("/");
  }

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
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-4 text-start">
            <label htmlFor="inputFirstName" className="htmlForm-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputFirstName"
              name="firstName"
              value={firstName}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4 text-start">
            <label htmlFor="inputSecondName" className="htmlForm-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputSecondName"
              name="lastName"
              value={lastName}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4 text-start">
            <label htmlFor="inputContactNumber" className="htmlForm-label">
              Contact Number
            </label>
            <input
              type="text"
              className="form-control"
              id="inputContactNumber"
              name="contactNumber"
              value={contactNumber}
              onChange={handleChange}
            />
          </div>
          <div className="col-12 text-start">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              name="address"
              placeholder="Apartment, studio, or floor"
              value={address}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6 text-start">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              name = "city"
              value={city}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4 text-start">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <input
              type="text"
              className="form-control"
              id="inputState"
              name = "state"
              value={state}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-2 text-start">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              name = "zip"
              value={zip}
              onChange={handleChange}
            />
          </div>
          <div className="col-12 text-start">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Contact;
