//action to get all data
export const AllData = (x) => {
  return (dispatch) => {
    dispatch({
      type: "ALLDATA",
      payload: x,
    });
  };
};
//action for single data
export const SingleData = (x) => {
  return (dispatch) => {
    dispatch({
      type: "SINGLE",
      payload: x,
    });
  };
};

//query management
export const queryManagement=(x) => {
  return (dispatch) => {
    dispatch({
      type: "QUERY",
      payload: x,
    });
  };
};