//query reducer
export const QueryReducer = (
  state = { data: [], message: "Search for Recipe .....", status: false },
  action
) => {
  if (action.type === "QUERY") {
    return { ...action.payload };
  } else return state;
};
