import React from 'react';

const NavBar: React.FunctionComponent = () => {
  return (
    <nav>
      <div className="nav-wrapper teal darken-1">
        <ul className="left hide-on-med-and-down">
          <li>
            <a href="/">Список дела</a>
          </li>
          <li>
            <a href="/">Ирформация</a>
          </li>
        </ul>
        <a href="/" className="brand-logo right">React + TypeScript</a>
      </div>
  </nav>
  );
}

export default NavBar;