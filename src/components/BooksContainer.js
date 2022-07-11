import React from 'react';
import Form from './Form';
import Book from '../redux/books/Book';

const BooksContainer = () => {
  const books = {
    title: '',
    author: '',
  };

  return (
    <div className="booksPage">
      <ul className="booksContainer">
        <Book books={books} />
      </ul>
      <Form />
    </div>
  );
};

export default BooksContainer;
