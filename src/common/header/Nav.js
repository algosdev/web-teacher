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
        <Link to="/quizzes">Sinov testlari</Link>
      </li>

      <li>
        <Link to="/useful-links">Foydali havolalar</Link>
      </li>
    </ul>
  );
};
export default Nav;
