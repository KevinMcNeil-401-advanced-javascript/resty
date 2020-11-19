import React from 'react';
import './sass/header.scss';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <Link to="/form">
          <li>Home</li>
        </Link>
        <Link to="/history">
          <li>History</li>
        </Link>
        <Link to="/help">
          <li>Help</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;