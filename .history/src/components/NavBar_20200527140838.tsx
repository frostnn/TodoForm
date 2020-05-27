import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar: React.FunctionComponent = () => {
  return (
    <nav>
      <div className="nav-wrapper teal darken-1">
        <NavLink to="/" className="brand-logo">React + TypeScript</NavLink>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">Список дела</NavLink>
          </li>
          <li>
            <NavLink to="/About">Ирформация</NavLink>
          </li>
        </ul>
      </div>
  </nav>
  );
}

export default NavBar;