import React, { useState, useEffect } from "react";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const { email, password, password2 } = formData;

  const handleInput = (e) => {
    setFormData((prevState) => ({
      ...prevState, 
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <p>register component here</p>
      <section>
        <h2>Register</h2>
      </section>
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="enter email"
            onChange={handleInput}
          />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="enter password"
            onChange={handleInput}
          />
         <input
            type="password"
            name="password2"
            id="password2"
            value={password2}
            placeholder="confirm password"
            onChange={handleInput}
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default Register;
