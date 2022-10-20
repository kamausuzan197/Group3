import "./Form.css";
import Button from "../components/Button";
import { useState } from "react";

function Login({ onLogin }) {
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");

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
          <Button
            onClick={handleSubmit}
            name="log in"
            bgColor="red"
            color="white"
            padding="8px"
            radius="10px"
            fontSize="20px"
          />
        </form>
      </div>
    </div>
  );
}
export default Login;