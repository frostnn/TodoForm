import React from 'react';

const NavBar: React.FunctionComponent = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo right">React + TypeScript</a>
        <ul className="left hide-on-med-and-down">
          <li><a href="/">Список дела</a></li>
          <li><a href="/">Ирформация</a></li>
        </ul>
      </div>
  </nav>
  );
}

export default NavBar;