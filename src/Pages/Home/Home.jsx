import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";
import "./Home.css";

const Home = ({ sidebar, darkMode }) => {
  const [category, setCategory] = useState(0);

  return (
    <div className={`home-container ${darkMode ? "dark" : "light"}`}>
      <Sidebar
        setCategory={setCategory}
        sidebar={sidebar}
        category={category}
        darkMode={darkMode}
      />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed category={category} darkMode={darkMode} sidebar={sidebar} />
      </div>
    </div>
  );
};

export default Home;
