import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';

const Header = () => {
    return (
        <div className="Header d-flex justify-content-center align-items-center">
            <Navbar/>
            <Profile/>
        </div>
    );
};

export default Header;