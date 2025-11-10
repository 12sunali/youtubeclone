import React, { useEffect } from 'react';
import './Navbar.css';
import menu_icon from '../../assets/menu.png';
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notification_icon from '../../assets/notification.png';
import sunali_img from '../../assets/sunali.jpg';
import { Link } from 'react-router-dom';

const Navbar = ({ setSidebar, darkMode, setDarkMode }) => {
  const sidebar_toggle = () => {
    setSidebar(prev => !prev);
  };

  // 🌓 Apply theme class to body when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, [darkMode]);

  return (
    <nav className={`navbar flex-div ${darkMode ? 'dark' : 'light'}`}>
      <div className="nav-left flex-div">
        <img
          src={menu_icon}
          alt="menu"
          className="menu-icon"
          onClick={sidebar_toggle}
        />
        <Link to="/" className="brand-name">
          SunaliTube
        </Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={search_icon} alt="search" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <button
          className="mode-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
        <img src={upload_icon} alt="upload" />
        <img src={more_icon} alt="more" />
        <img src={notification_icon} alt="notification" />
        <img src={sunali_img} alt="user" className="user-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
