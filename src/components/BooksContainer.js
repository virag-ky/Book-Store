import React from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';
import Book from './Book';

const BooksContainer = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="booksPage">
      <ul className="booksContainer">
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
          />
        ))}
      </ul>
      <Form />
    </div>
  );
};

export default BooksContainer;
