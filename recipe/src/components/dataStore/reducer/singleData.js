//single reducer
export const SingleReducer = (state = {}, action) => {
  if (action.type === "SINGLE") {
    return { ...action.payload };
  } else return state;
};
