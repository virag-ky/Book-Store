import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ books }) => {
  const { title, author } = books;
  return (
    <div className="book" style={{ border: 'solid black' }}>
      <h3>{title}</h3>
      <h3>{author}</h3>
      <button type="button">Delete</button>
    </div>
  );
};

Book.propTypes = {
  books: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Book;
