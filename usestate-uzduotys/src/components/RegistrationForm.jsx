import "../assets/css/RegistrationForm.css"
import { useState } from "react";

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState();

  const appointFirstName = (f) => {
    return setFirstName(f);
  };

  const [lastName, setLastName] = useState();

  const appointLastName = (l) => {
    return setLastName(l);
  };

  const [email, setEmail] = useState();

  const appointEmail = (e) => {
    return setEmail(e);
  };

  return (
    <section className="component registration-form_component">
      <div className="registration-form_inputs_allignment">
        <h3>Registration Form</h3>
        <div>
          <label>First name:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            className="input1"
            onChange={(f) => appointFirstName(f.target.value)}
          />
        </div>
        <div>
          <label>Last name:</label>
          <input
            type="text"
            id="lname"
            name="lname"
            className="input1"
            onChange={(l) => appointLastName(l.target.value)}
          />
        </div>
        <div>
          <label className="mr-8.5">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            className="input1"
            onChange={(e) => appointEmail(e.target.value)}
          />
        </div>
      </div>
      <div>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
      </div>
    </section>
  );
};

export default RegistrationForm;
