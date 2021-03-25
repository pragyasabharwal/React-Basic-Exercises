import React from "react";
import { useState } from "react";

export const CharacterCount = () => {
  const [count, setCount] = useState(0);
  function CountHandler(e) {
    var userInput = e.target.value;
    setCount(userInput.length);
  }
  return (
    <div className="CharacterCount">
      <h1> Character Count </h1>
      Enter your input <input onChange={CountHandler}></input>
      {count}/140
    </div>
  );
};
