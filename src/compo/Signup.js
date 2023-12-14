import React from 'react';
import './Signup.css';
const Signup = () =>  {
  return (
    <div className="App">
      <form action="">
        <h3>REGISTER</h3>
        <br></br>
        <div className="input-box">
          <input type="text" placeholder="FirstName" required/>
        </div>
        <br></br>
        <div className="input-box">
          <input type="text" placeholder="LastName" required/>
        </div>
        <br></br>
        <div className="input-box">
          <input type="text" placeholder="Mobile Number" required/>
        </div>
        <br></br>
        <div className="input-box">
          <input type="email" placeholder="Email address" required/>
        </div>
        <br></br>
        <div className="input-box">
          <input type="password" placeholder="password" required/>
        </div>
        <br></br>
        <button type="submit">Sign Up</button>
        <div className="register">
          <p>Already have an account ? <a href="#">Login</a></p>
        </div>
      </form>
    </div>
  );
}

export default Signup;