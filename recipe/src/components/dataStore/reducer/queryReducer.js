//query reducer
export const QueryReducer = (state = [], action) => {
  if (action.type === "QUERY") {
    return [...action.payload];
  } else return state;
};
