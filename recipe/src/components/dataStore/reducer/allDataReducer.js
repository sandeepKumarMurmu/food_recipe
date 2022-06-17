// all data reducer
export const AllDataReducer = (
  state = { data: [], message: "Search for Recipe .....", status: false },
  action
) => {
  if (action.type === "ALLDATA") {
    return { ...action.payload };
  } else return state;
};
