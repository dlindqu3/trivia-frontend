import React, { useState, useEffect } from 'react'

function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

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
      <p>login component here</p>
      <section>
        <h2>Login</h2>
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
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default Login
