import './Header.css'
import React from 'react';
import { NavLink } from 'react-router-dom';

export function Header({ maximal = false }) {
  return (
    <header>
      <div className="header_logo">
        <img src="Header_img/Logo.svg" alt="logo" />
      </div>

      {maximal ? (
        <>
          <div className="header_frame">
            <form role="search" className="header_input">
              <input name="search" type="search" placeholder="Search" />
              <img
                src="Header_img/search.svg"
                className="header_icon"
                alt="group"
              />
            </form>

            <nav className="header_nav">
              <NavLink to="/" className="nav-link">
                <img src="Header_img/home.svg" alt="Home" />
                <span>Home</span>
              </NavLink>
              <NavLink to="/network" className="nav-link">
                <img src="Header_img/users.svg" alt="Network" />
                <span>Network</span>
              </NavLink>
              <NavLink to="/vacancies" className="nav-link">
                <img src="Header_img/Suitcase.svg" alt="Vacancies" />
                <span>Vacancies</span>
              </NavLink>
              <NavLink to="/messages" className="nav-link">
                <img src="Header_img/ChatCircleDots.svg" alt="Messages" />
                <span>Messages</span>
              </NavLink>
              <NavLink to="/notification" className="nav-link">
                <img src="Header_img/BellRinging.svg" alt="Notification" />
                <span>Notification</span>
              </NavLink>
            </nav>
          </div>

          <nav className="header_iconsgroup">
            <NavLink to="/myProfilePortfolio" className="header_myprofileportfolio">
              <img src="Header_img/Ellipse.svg" alt="group" />
              <span>My Profile</span>
            </NavLink>
            <NavLink to="/Linkidin" className="header_logout"> {/* Могут быть проблемы с переадресацией клиента 11.07*/}
              <img src="Header_img/LogOut.svg" alt="logout" />
            </NavLink>
          </nav>
        </>
      ) : (
        <div className='header_btn'>
            <button className="btn_sing">Sign In</button>
            <button className="btn_sing">Sign Out</button>
        </div>
      )}
    </header>
  );
}

