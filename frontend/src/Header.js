import React from 'react';
import { Link } from 'react-router-dom'

import header_icon from './images/TopPage/header.png';
import profile_icon from './images/TopPage/profile.png';
import daily_icon from './images/TopPage/daily.png';

export const Header = () => {
  return (
    <div className="header-container">
      <div className="header-icon">
        <Link to="/">
          <img src={header_icon} alt="{header}" />
        </Link>
      </div>
      <div className="header-menu">
      <ul>
        <li>
          <Link to="/profile">
            <img src={profile_icon} alt="{profile}" />
          </Link>
        </li>
        <li>
          <Link to="/daily">
            <img src={daily_icon} alt="{daily}" />
          </Link>
        </li>
        </ul>
        </div>
    </div>
  );
}
