import React from 'react';

const NavBar: React.FunctionComponent = () => {
  return (
    <nav>
      <div className="nav-wrapper teal darken-1">
        <a href="/" className="brand-logo">React + TypeScript</a>
        <ul className="right hide-on-med-and-down">
          <li>
            <a href="/">Список дела</a>
          </li>
          <li>
            <a href="/">Ирформация</a>
          </li>
        </ul>
      </div>
  </nav>
  );
}

export default NavBar;