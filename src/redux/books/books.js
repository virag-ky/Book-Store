const ADD = 'ADD';
const REMOVE = 'REMOVE';

const booksReducer = (state = [], action) => {
  let booksArray;
  switch (action.type) {
    case ADD:
      booksArray = [...state, action.book];
      return booksArray;
    case REMOVE:
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

export default booksReducer;
