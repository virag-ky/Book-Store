import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1>Bookstore CMS</h1>
    <ul>
      <li>
        <Link to="/">Books</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
    <img alt="" />
  </nav>
);

export default Navbar;
