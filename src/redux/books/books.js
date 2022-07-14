import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD = 'book-store/books/ADD';
const REMOVE = 'book-store/books/REMOVE';
const GET = 'book-store/books/GET';
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HA4cMuf5KSIFoYMAQG5h/books';

const booksReducer = (state = [], action) => {
  let booksArray;
  switch (action.type) {
    case GET:
      return action.book;
    case ADD:
      booksArray = [...state, action.book];
      return booksArray;
    case REMOVE:
      if (state.length === 1) {
        return [];
      }
      return state.filter((book) => book.id !== action.index);
    default:
      return state;
  }
};

export const addBook = (book) => ({
  type: ADD,
  book,
});

export const removeBook = (index) => ({
  type: REMOVE,
  index,
});

export const getBook = (book) => ({
  type: GET,
  book,
});

export const addNewBook = (book) => async (dispatch) => {
  const {
    title, author, id, category,
  } = book;
  const newBook = {
    item_id: id,
    title,
    author,
    category,
  };
  // post the new book in the server
  await axios.post(baseURL, newBook);
  dispatch(addBook(book));
};

export const getBooksToDisplay = createAsyncThunk(GET, async () => {
  // get books from the server
  const books = await axios.get(baseURL);
  // returns an array of the main object's string-keyed [key, value] pairs
  /* example: {
    1: [{title, author}],
    2: [{title, author}],
  } */
  // and returns each book with it's id, title and author
  const objectOfBooks = Object.entries(books.data).map(([id, book]) => {
    const { title, author } = book[0];
    return { id, title, author };
  });

  return objectOfBooks;
});

export const removeBookFromList = (id) => async (dispatch) => {
  await axios.delete(`${baseURL}/${id}`);
  dispatch(removeBook(id));
};

export default booksReducer;
