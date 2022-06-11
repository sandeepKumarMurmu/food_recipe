// all data reducer
export const AllDataReducer = (state = [], action) => {
  if (action.type === "ALLDATA") {
    return [...action.payload];
  } else return state;
};
