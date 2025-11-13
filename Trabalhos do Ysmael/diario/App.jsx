import { useState, useEffect } from "react";
import WorldClock from "./WorldClock";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", darkMode ? "dark" : "light");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="app">
      <div className="main-clock">
        <h1>Brasília</h1>
        <WorldClock city="Brasília" timezone="America/Sao_Paulo" />
      </div>

      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "🌞 Modo Claro" : "🌙 Modo Escuro"}
      </button>
    </div>
  );
}

export default App;