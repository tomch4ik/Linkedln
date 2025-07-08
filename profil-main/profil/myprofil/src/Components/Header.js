import './Header.css'
import React from 'react';
import { NavLink } from 'react-router-dom';

export function Header(){
    return(
        <header>
            <div className="header_logo">
                <img src='./Logo.png' alt='logo' className='logo'/>
            </div>
            <div className="header_frame">

                <form role="search" className="header_input">
                    <input name="search" type="search" placeholder="Search"/>
                    <img src='./8.png' className='header_icon' alt='group'/>
                </form >

                <nav className='header_nav'>
                    <NavLink to="/" className="nav-link">
                        <img src='./home.png' alt='Home'/>
                        <span>Home</span>
                    </NavLink>
                    <NavLink to="/network" className="nav-link">
                        <img src='./10.png' alt='Network'/>
                        <span>Network</span>
                    </NavLink>
                    <NavLink to="/vacancies" className="nav-link">
                        <img src='Header_img/Suitcase.svg' alt='Vacancies'/>
                        <span>Vacancies</span>
                    </NavLink>
                    <NavLink to="/messages" className="nav-link">
                        <img src='Header_img/ChatCircleDots.svg' alt='Messages'/>
                        <span>Messages</span>
                    </NavLink>
                    <NavLink to="/notification" className="nav-link">
                        <img src='Header_img/BellRinging.svg' alt='Notification'/>
                        <span>Notification</span>
                    </NavLink>
                </nav>

            </div>
            <div className="header_group">
                <img src='Header_img/Ellipse.svg' alt='group'/>
                <span>My Profile</span>
            </div>
        </header>
    );
}
