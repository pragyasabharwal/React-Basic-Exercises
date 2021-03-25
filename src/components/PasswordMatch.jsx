import React from "react";
import { useState } from "react";

export const PasswordMatch = () => {
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");

  function inputHandler(e) {
    setInput(e.target.value);
  }
  function inputHandler2(e) {
    setInput2(e.target.value);
  }

  return (
    <div className="PasswordMatch">
      <h1> signup form </h1>
      Enter your password{" "}
      <input onChange={inputHandler} style={{ margin: "1em" }}></input>
      <br />
      Re-Enter your password <input onChange={inputHandler2}></input>
      <button disabled={input === input2 ? false : true}>Submit</button>
    </div>
  );
};
