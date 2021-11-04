import { useState } from "react";
import { NavLink } from "react-router-dom";

function SignUp({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        passwordConfirmation,
        img_url: image,
      }),
    })
      .then((resp) => resp.json())
      .then(onLogin);
  }
  function refreshPage(){
    setTimeout(() => {
    window.location.reload()}, 1000)
} 

  return (
    <div className="card shadow-lg w-25 position-absolute top-50 start-50 translate-middle">
      <NavLink className="btn btn-outline-dark" to="/">Home</NavLink>
      <div className="card-header fs-3 text-center bg-info">Signup</div>
      <form
        onSubmit={handleSubmit}
        className="list-group list-group-flush"
        autoComplete="on"
      >
        <input
          className="list-group-item"
          type="text"
          id="username"
          autoComplete="on"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="list-group-item"
          type="password"
          id="password"
          autoComplete="on"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="list-group-item"
          type="password"
          id="password_confirmation"
          placeholder="One more time"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <input
          className="list-group-item"
          type="img"
          id="imageUrl"
          placeholder="Img Url here for profile"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <div onClick={refreshPage}>
          <button className="btn btn-outline-info w-100" type="submit">
            Sign up
          </button>
        </div>
      </form>
      <NavLink to="/login" className="btn btn-outline-info">Already a user login here.</NavLink>
    </div>
  );
}

export default SignUp;
