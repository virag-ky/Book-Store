import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooksToDisplay } from '../redux/books/books';
import Form from './Form';
import Book from './Book';

const BooksContainer = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksToDisplay(books));
  }, [dispatch]);

  return (
    <div className="booksPage">
      <ul className="booksContainer">
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </ul>
      <Form />
    </div>
  );
};

export default BooksContainer;
