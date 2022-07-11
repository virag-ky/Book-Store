const UNDERCONSTRUCTION = "UNDERCONSTRUCTION";

export default function reducer(state = [], action) {
  switch (action.type) {
    case UNDERCONSTRUCTION:
      return "Under construction";
    default:
      return state;
  }
}

export const checkStatus = () => {
  return {
    type: UNDERCONSTRUCTION,
  };
};
