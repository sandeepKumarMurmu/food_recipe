//single reducer
export const SingleReducer = (state = { data: {}, status: false }, action) => {
  if (action.type === "SINGLE") {
    return { ...action.payload };
  } else return state;
};
