import { createContext, useState } from "react";
import Header from "./components/Header/Header";

export const ThemeContext = createContext('ligth')

function App() {
  const [theme, setTheme] = useState('light')

  function toggleTheme() {
    setTheme(prev => (prev === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
        <Header />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
