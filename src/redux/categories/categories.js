const UNDERCONSTRUCTION = 'UNDERCONSTRUCTION';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case UNDERCONSTRUCTION:
      return 'Under construction';
    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: UNDERCONSTRUCTION,
});

export default categoriesReducer;
