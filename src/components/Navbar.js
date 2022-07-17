import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import '../styles/navbar.css';

const Navbar = () => (
  <nav>
    <div className="navLinksContainer">
      <h1>
        <Link to="/">Bookstore CMS</Link>
      </h1>
      <ul className="navLinks">
        <li>
          <Link to="/">BOOKS</Link>
        </li>
        <li>
          <Link to="/categories">CATEGORIES</Link>
        </li>
      </ul>
    </div>
    <Avatar
      src="/broken-image.jpg"
      sx={{
        bgcolor: '#fff',
        color: '#0290ff',
        border: 'thin solid #e8e8e8',
        width: '50px',
        height: '50px',
      }}
      className="avatar"
    />
  </nav>
);

export default Navbar;
