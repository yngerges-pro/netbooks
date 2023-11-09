import React from "react";
import "./Login.css";
function Login() {
  return (
    <div className="Login">
      <div className="login-container">
        <h1>Login</h1>

        <form className="login-form">
          <input type="text" name="username" placeholder="Username"></input>
          <input type="text" name="password" placeholder="Password"></input>

          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
