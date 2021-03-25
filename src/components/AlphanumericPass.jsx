import React from "react";
import { useState } from "react";

export const AlphanumericPass = () => {
  const [pass, setPass] = useState("");
  const [display, setDisplay] = useState("");

  function inputHandler(e) {
    setPass(e.target.value);
  }
  function aplhaCheck() {
    /\d/.test(pass)
      ? setDisplay("contains a number")
      : setDisplay("pls add a number");
  }
  return (
    <div className="PasswordMatch">
      <h3> alphanumeric password </h3>
      <input onChange={inputHandler}></input>
      <button onClick={aplhaCheck}>Check</button>
      {display}
    </div>
  );
};
