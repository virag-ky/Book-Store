import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFromList } from '../redux/books/books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();
  const deleteBook = (id) => {
    dispatch(removeBookFromList(id));
  };
  return (
    <li id={id} className="book" style={{ border: 'solid black' }}>
      <h3>{title}</h3>
      <h4>{author}</h4>
      <button id={id} type="button" onClick={() => deleteBook(id)}>
        Delete
      </button>
    </li>
  );
};
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Book;
