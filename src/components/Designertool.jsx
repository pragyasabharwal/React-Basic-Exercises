import React, { useState } from "react";

export const DesignerTool = () => {
  const [change, setChange] = useState(12);
  const [color, setColor] = useState("red");

  function incFontSize() {
    setChange(change + 8);
  }
  function decFontSize() {
    setChange(change - 8);
  }
  function Black() {
    setColor("black");
  }
  function Pink() {
    setColor("pink");
  }

  return (
    <div className="figma">
      <h1> Figma </h1>
      <input style={{ fontSize: `${change}px`, color: color }}></input>
      <button onClick={incFontSize}> Increase Font Size </button>
      <button onClick={decFontSize}> Decrease Font Size </button>
      <button onClick={Black}> Change color to black </button>
      <button onClick={Pink}> Change color to pink </button>
    </div>
  );
};
