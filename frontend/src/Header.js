import React from 'react';
import { Link } from 'react-router-dom'

import header_icon from './images/TopPage/header.png';
import profile_icon from './images/TopPage/profile.png';
import daily_icon from './images/TopPage/daily.png';

import './Header.css'

export const Header = () => {
  return (
    <div className="header-container">
      <div className="header-icon">
        <Link to="/">
          <img src={header_icon} alt="{header}" className="header-img" />
        </Link>
      </div>
      <div className="header-menu">
        <ul className="header-ul">
          <li className="header-li">
            <Link to="/profile">
              <img src={profile_icon} alt="{profile}" className="header-img" />
            </Link>
          </li>
          <li className="header-li">
            <Link to="/daily">
              <img src={daily_icon} alt="{daily}" className="header-img" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
