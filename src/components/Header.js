import "./Header.css";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";


export default function Header(props) {
  const { theme, SetTheme } = props;

  function ToggleTheme() {
    if (theme === "light") {
      SetTheme("dark");
    } else {
      SetTheme("light");
    }
  }
  return (
    <header>
      <div className="logo">
        <span>Task Management</span>
      </div>
      <div className="theme-container">
        <span>{theme === "light" ? "ໂຫມດກາງວັນ" : "ໂຫມດກາງຄືນ"}</span>
        <span className="icon" onClick={ToggleTheme}>
           {theme==="light"?<FaSun /> : <FaMoon />}
        </span>
      </div>
    </header>
  );
}
