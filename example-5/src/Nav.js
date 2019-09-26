import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return(
      <nav className="navbar navbar-expand-sm bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav;

// https://pastebin.com/yMhBCdXW
