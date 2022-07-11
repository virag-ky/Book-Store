const ADD = "ADD";
const REMOVE = "REMOVE";

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD:
      let booksArray = [...state, action.book];
      return booksArray;
    case REMOVE:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length),
      ];
    default:
      return state;
  }
}

export const addBook = (book) => {
  return {
    type: ADD,
    book,
  };
};

export const removeBook = (index) => {
  return {
    type: REMOVE,
    index,
  };
};
