import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { addNewBook } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  // const [category, setCategory] = useState('');
  const [categoryName, setCategoryName] = useState([]);
  const theme = useTheme();
  const dispatch = useDispatch();

  const id = useSelector((state) => state.books).length + 1;

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  function getStyles(category, categoryName, theme) {
    return {
      fontWeight:
        categoryName.indexOf(category) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const addBookToList = () => {
    dispatch(
      addNewBook({
        title,
        author,
        id,
        categoryName,
      }),
    );
    setTitle('');
    setAuthor('');
    setCategoryName([]);
    // setCategory('');
  };

  const categories = [
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
    'Computer Programming',
    'Documentary',
  ];

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCategoryName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',').join('') : value,
    );
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
      <div>
        <FormControl
          sx={{ m: 1, width: 300 }}
          categoryName={categoryName}
          categories={categories}
          handleChange={handleChange}
        >
          <InputLabel id="demo-multiple-name-label">Category</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={categoryName}
            onChange={handleChange}
            input={<OutlinedInput label="Category" />}
            MenuProps={MenuProps}
          >
            {categories.map((category) => (
              <MenuItem
                key={category}
                value={category}
                style={getStyles(category, categoryName, theme)}
              >
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <button type="button" onClick={addBookToList}>
        Add Book
      </button>
    </form>
  );
};

export default Form;
