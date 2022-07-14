import axios from 'axios';

const ADD = 'book-store/books/ADD';
const REMOVE = 'book-store/books/REMOVE';
const GET = 'book-store/books/GET';
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/1nVmoPNiti78nPEDx5ys/books';

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
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length),
      ];

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
    item_id: id, title, author, category,
  };
  await axios.post(baseURL, newBook);
  dispatch(addBook(book));
};

export default booksReducer;
