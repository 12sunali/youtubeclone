import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [sidebar, setSidebar] = useState(true);

  // 🌗 Apply theme to the whole body
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <div className={`app-container ${darkMode ? "dark" : "light"}`}>
      <Navbar
        setSidebar={setSidebar}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Routes>
        <Route
          path="/"
          element={<Home sidebar={sidebar} darkMode={darkMode} />}
        />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
}

export default App;
