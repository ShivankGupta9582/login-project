import React from 'react'
import { useState } from "react";
import { ReactDOM } from 'react';
import './login.css'
import { useGoogleOneTapLogin } from 'react-google-one-tap-login';
import logo from "./Expedia_Group_logo.svg.png"
const Login = () => {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }
  
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <img className='logo' src={logo} alt={"Logo Image"} height="300" width="380" />
        <br />
        <label className='label'>Enter your email id:
          <input className='input'
            type="text"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className='label'>Enter your password:
          <input className='input'
            type="password"
            name="pass"
            value={inputs.pass || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <input activeClassName="active" className='input' type="submit" />
      </form>
    </div>
  )
}



export default Login