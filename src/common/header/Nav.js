import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <ul className="mainmenu">
      <li>
        <Link to="/">Asosiy sahifa</Link>
      </li>

      <li>
        <Link to="/lessons">Darslar</Link>
      </li>

      <li>
        <Link to="#">Imtihon</Link>
      </li>

      <li>
        <Link to="/">Kerakli dasturlar</Link>
      </li>
    </ul>
  );
};
export default Nav;
