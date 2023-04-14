import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useAppContext } from "./context";

export function ToggleTheme() {

  const { toggleTheme,theme } = useAppContext();

  return (
    <section>
      <button className="toggle-theme" onClick={toggleTheme}>
        {theme === "dark" ? <FaMoon className="icon-moon" /> : <FaSun className="icon-sun"/>}
      </button>

      <h1>Unsplash Images</h1>
    </section>
  );
}
