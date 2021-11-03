import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          console.log(user);
        });
      } else {
        r.json().then((err) => err.error);
      }
    });
  };

  return (
    <div className="card w-50 position-absolute top-50 start-50 translate-middle">
      <NavLink className="btn btn-outline-info" to="/">Home</NavLink>
      <div class="card-header fs-3 text-center">Login</div>
      <form
        onSubmit={handleSubmit}
        className="list-group list-group-flush"
        autoComplete="on"
      >
        <input
          className="list-group-item"
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="list-group-item"
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-outline-info" type="submit">
          Login
        </button>
      </form>
      <NavLink className="btn btn-outline-info" to="/Signup">
        Signup Here
      </NavLink>
    </div>
  );
}

export default Login;
