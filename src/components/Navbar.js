import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

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
    <Avatar
      src="/broken-image.jpg"
      sx={{ bgcolor: '#fff', color: '#0290ff', border: 'thin solid #e8e8e8' }}
    />
  </nav>
);

export default Navbar;
