import "./styles.css";
import { DesignerTool } from "./components";
import { Cart } from "./components";
import Router from "./Router";
import { useState } from "react";

export default function App() {
  const [route, setRoute] = useState("main");
  const [theme, setTheme] = useState(true);

  const color = {
    dark: {
      color: "white",
      backgroundColor: "black"
    },
    light: {
      color: "black",
      backgroundColor: "white"
    }
  };

  function themeHandler() {
    setTheme(!theme);
  }

  return (
    <div className="App" style={theme === false ? color.dark : color.light}>
      <button onClick={() => setRoute("main")}> Main </button>
      <button onClick={() => setRoute("figma")}> Figma </button>
      <button onClick={() => setRoute("cart")}> Cart </button>
      <button onClick={themeHandler}> Change Theme </button>
      <br />
      {route === "main" && <Router />}
      {route === "figma" && <DesignerTool />}
      {route === "cart" && <Cart />}
    </div>
  );
}
