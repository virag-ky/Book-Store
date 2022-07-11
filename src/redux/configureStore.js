import { combineReducers } from 'redux';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const configureStore = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

export default configureStore;
