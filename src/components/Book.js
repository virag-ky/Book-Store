import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <li className="book" style={{ border: 'solid black' }}>
    <h3>{title}</h3>
    <h4>{author}</h4>
    <button type="button">Delete</button>
  </li>
);
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
