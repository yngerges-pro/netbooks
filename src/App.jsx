import React from "react";
import "./App.css";
import { Link, useRoutes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Login />,
    },
  ]);

  return (
    <div className="App">
      <div className="nav-bar">
        <div className="nav-title">
          <h5>NetBooks</h5>
        </div>

        <ul className="nav-links">
          <Link className="link" to="/">
            <li>
              <h6>Login</h6>
            </li>
          </Link>
        </ul>
      </div>
      {element}
    </div>
  );
}

export default App;
