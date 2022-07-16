import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { addNewBook } from '../redux/books/books';
import '../styles/form.css';

const categories = [
  'Computer Programming',
  'Action',
  'Adventure',
  'Fantasy',
  'Horror',
  'Classic',
  'History',
  'Detective and Mystery',
  'Romance',
  'Sci-Fi',
  'Humor',
  'Tragedy',
  'Documentary',
];

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const id = uuidv4();

  const addBookToList = () => {
    dispatch(
      addNewBook({
        title,
        author,
        id,
        category: categoryName,
      }),
    );
    setTitle('');
    setAuthor('');
    setCategoryName('');
  };

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <form>
      <div className="componentDivider" />
      <h2 className="addBook">ADD NEW BOOK</h2>
      <div className="inputsContainer">
        <TextField
          helperText=" "
          id="demo-helper-text-aligned-no-helper"
          label="Book title"
          placeholder="Book title"
          name="title"
          value={title}
          onChange={changeTitle}
          className="inputs"
        />
        <TextField
          helperText=" "
          id="demo-helper-text-aligned-no-helper"
          label="Author"
          placeholder="Author"
          name="author"
          value={author}
          onChange={changeAuthor}
          className="inputs"
        />
        <div>
          <Autocomplete
            value={categoryName}
            onChange={(event, newValue) => {
              setCategoryName(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={categories}
            sx={{ width: 300 }}
            /* eslint-disable */
            renderInput={(params) => (
              <TextField {...params} placeholder="Category" />
            )}
            /* eslint-enable */
          />
        </div>
        <button type="button" onClick={addBookToList} className="addBookBtn">
          ADD BOOK
        </button>
      </div>
    </form>
  );
};

export default Form;
