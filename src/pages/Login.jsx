import React from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();

    console.log("this ran");
    props.loginUser();
    navigate("/Catalog");
  };

  return (
    <div className="Login">
      <div className="login-container">
        <h1>Login</h1>

        <form className="login-form">
          <input type="text" name="username" placeholder="Username"></input>
          <input type="text" name="password" placeholder="Password"></input>
          <button onClick={handleLogin}>Login</button>
        </form>

        <div>
          <p>
            New to us?{" "}
            <Link className="link" to="/signup">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
