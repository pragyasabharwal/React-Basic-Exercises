import React from "react";
import { useState } from "react";

export const ShowPassword = () => {
  const [input, setInput] = useState("");
  const [pw, setPw] = useState("password");
  const [buttonText, setButtonText] = useState("Show");

  function inputHandler(e) {
    setInput(e.target.value);
  }
  function ShowHandle() {
    buttonText === "Show" ? setButtonText("Hide") : setButtonText("Show");
    buttonText === "Show" ? setPw("text") : setPw("password");
  }

  return (
    <div className="ShowPassword">
      <h1> Show Password </h1>
      Enter your password
      <input
        type={pw}
        onChange={inputHandler}
        style={{ margin: "1em" }}
      ></input>
      <br />
      <button onClick={ShowHandle}>{buttonText}</button>
    </div>
  );
};
