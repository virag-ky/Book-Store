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
      <h2>{title}</h2>
      <h3>{author}</h3>
      <div className="buttonsDiv">
        <button type="button">Comments</button>
        <button id={id} type="button" onClick={() => deleteBook(id)}>
          Remove
        </button>
        <button type="button">Edit</button>
      </div>
    </li>
  );
};
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Book;
