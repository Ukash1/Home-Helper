import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="App">
      <form action="">
        <h3>LOGIN</h3>
        <br></br>
        <div className="input-box">
          <input type="text" placeholder="Username" required/>
        </div>
        <br></br>
        <div className="input-box">
          <input type="password" placeholder="Password" required/>
        </div>
        <br></br>
        <button type="submit">Login</button>
        <div className="register">
          <p>Don't have an account ? <a href="#">Register Now</a></p>
        </div>
      </form>
    </div>
  );
}

export default Login;