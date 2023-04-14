import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// context is parent class providers currentState and methods
const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [search, setSearch] = useState("dan pena");
  const body = document.querySelector('body')

  const toggleTheme = () =>{
    
    setTheme(theme === "dark" ? "light" : "dark")
    body.classList.toggle('dark-theme')
    
  };

  return (
    <AppContext.Provider value={{ toggleTheme, setSearch, theme, search }}>
      {children}
    </AppContext.Provider>
  );
};
