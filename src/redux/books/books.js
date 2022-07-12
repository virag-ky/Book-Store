const ADD = 'ADD';
const REMOVE = 'REMOVE';

const booksReducer = (
  state = [
    {
      title: 'Clean Code',
      author: 'Robert C. Martin',
      id: 1,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt & David Thomas',
      id: 2,
    },
    {
      title: 'The Art of Computer Programming',
      author: 'Donald E. Knuth',
      id: 3,
    },
  ],

  action,
) => {
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
