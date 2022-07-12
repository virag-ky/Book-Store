import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author, id }) => (
  <li id={id} className="book" style={{ border: 'solid black' }}>
    <h3>{title}</h3>
    <h4>{author}</h4>
    <h5>{id}</h5>
    <button type="button">Delete</button>
  </li>
);
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Book;
