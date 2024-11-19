import React, { useState } from "react";
import Feed from "./components/Feed";
import Friends from "./components/Friends";
import Navigation from "./components/Navigation";
import BottomNav from "./components/BottomNav";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <>
      <div
        className={`flex min-h-screen w-full items-center justify-center transition-colors duration-300 md:flex-row ${
          darkMode ? "bg-black" : "bg-white"
        }`}
      >
        <main className="flex min-h-screen w-full">
          <Navigation toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          <Feed />
          <Friends />
          <BottomNav toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        </main>
      </div>
    </>
  );
}

export default App;
