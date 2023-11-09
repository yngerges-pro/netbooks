import React from "react";
import "./App.css";
import { Link, useRoutes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { useState } from "react";
import Catalog from "./pages/Catalog";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const manageSession = () => {
    setAuthenticated(!authenticated);
    console.log("it worked?");
  };

  let element = useRoutes([
    {
      path: "/",
      element: <Login loginUser={manageSession} />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/catalog",
      element: <Catalog />,
    },
  ]);

  return (
    <div className="App">
      <div className="nav-bar">
        <div className="nav-title">
          <h5>NetBooks</h5>
        </div>

        <ul className="nav-links">
          {authenticated ? (
            <li>
              <Link to="/">
                <h6 className="login-link" onClick={manageSession}>
                  Logout
                </h6>
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/">
                <h6 className="login-link">Login</h6>
              </Link>
            </li>
          )}
        </ul>
      </div>
      {element}
    </div>
  );
};

export default App;
