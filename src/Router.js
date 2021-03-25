import "./styles.css";
import { Counter } from "./components";
import { CharacterCount } from "./components";
import { PasswordMatch } from "./components";
import { AlphanumericPass } from "./components";
import { ShowPassword } from "./components";
import { ToDo } from "./components";
import { LikeList } from "./components";

export default function Router() {
  return (
    <div className="App">
      <h1>React Practice</h1>
      <Counter />
      <CharacterCount />
      <PasswordMatch />
      <AlphanumericPass />
      <ShowPassword />
      <ToDo />
      <LikeList />
    </div>
  );
}
