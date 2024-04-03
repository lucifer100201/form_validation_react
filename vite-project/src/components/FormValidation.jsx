import React from "react";
import "./style.css";
const FormValidation = () => {


  const handleChange = (e) =>{
    const data = e.target.value;
    console.log(data)
    const { name,value} = e.target;
    console.log(name,value)
  }
  return (
    <>
      <section id="form_section">
        <form id="form_fields">
          <h2>Sign Up</h2>
          <div className="input_field">
            <label for="name">Username:</label>
            <input type="text" id="name" name="username" placeholder="username" onChange={handleChange} autoComplete="off" />
            
          </div>

          <div className="input_field">
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              onChange={handleChange}

            />
          </div>

          <div className="input_field">
            <label for="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="******"
              onChange={handleChange}
            />
          </div>

          <div className="input_field">
            <label for="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="******"
              onChange={handleChange}
            />
          </div>
          <button type="submit" id="btn">
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default FormValidation;
