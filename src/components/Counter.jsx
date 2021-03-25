import React from "react";
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  function counterIncrement() {
    setCount((count) => count + 1);
  }

  return (
    <div className="Counter">
      <h1> Counter </h1>
      {count}
      <button onClick={counterIncrement}> + </button>
    </div>
  );
}
