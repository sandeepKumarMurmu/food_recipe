//importing library property / methodes

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

// importing components
import { ActionCreators } from "../dataStore/store/actionCreator";

//Button for apply filter
export const Button = () => {
  const dispatch = useDispatch();
  const { QueryReducer } = useSelector((state) => state);
  const { AllData } = bindActionCreators(ActionCreators, dispatch);

  // query management
  function queryArrangement() {
    let arr = [];
    for (var key in QueryReducer) {
      arr.push(`${key}=${QueryReducer[key]}`);
    }
    return arr;
  }

  //get on filter
  function getDataOnFilter(str) {
    AllData({ data: [], message: "Getting data .....", status: false });
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&app_id=f7048fdb&app_key=%205e15ab95d8a05906e2b81cd43d450fc5&${str}`
      )
      .then(({ data }) => {
        if (data.hits.length !== 0)
          AllData({
            data: [...data.hits],
            message: "success full",
            status: true,
          });
        else
          AllData({
            data: [...data.hits],
            message: "Please enter valid filter .....",
            status: false,
          });
      });
  }

  return (
    <>
      <button
        className="btn btn-success btn-sm"
        data-bs-dismiss="offcanvas"
        onClick={() => {
          getDataOnFilter(queryArrangement().join("&"));
        }}
      >
        Apply Filter
      </button>
    </>
  );
};
