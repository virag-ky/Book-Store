import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const id = useSelector((state) => state.books).length + 1;

  const addNewBook = () => {
    dispatch(addBook({ title, author, id }));
    setTitle('');
    setAuthor('');
  };

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <form>
      <h2>ADD NEW BOOK</h2>
      <input
        type="text"
        placeholder="Book title"
        name="title"
        value={title}
        onChange={changeTitle}
      />
      <input
        type="text"
        placeholder="Author"
        name="author"
        value={author}
        onChange={changeAuthor}
      />
      <button type="button" onClick={addNewBook}>
        Add Book
      </button>
    </form>
  );
};

export default Form;
