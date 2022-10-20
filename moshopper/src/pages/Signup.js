 import "./Form.css";
import Button from "../components/Button";
import { useState } from "react";

function Singup({ onLogin }) {
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((r) => r.json())
      .then(onLogin);
   }

  return (
    <div className="form">
      <div className="form__container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password_confirmation">Confirm Password:</label>
          <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <Button
            onClick={handleSubmit}
            name="Sign up"
            bgColor="red"
            color="white"
            padding="8px"
            radius="10px"
            fontSize="20px"
          />
        </form>
      </div>
      <span>
        hava an account? please <a href="/login">login</a>
      </span>
    </div>
  );
}
export default Singup;
