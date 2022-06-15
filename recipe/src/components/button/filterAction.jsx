//importing library property / methodes

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

// importing components
import { ActionCreators } from "../dataStore/store/actionCreator";

//Button for apply filter
export const Button = ({ filter }) => {
  const dispatch = useDispatch();
  const { QueryReducer } = useSelector((state) => state);
  const { queryManagement, AllData } = bindActionCreators(
    ActionCreators,
    dispatch
  );

  // query management
  function queryArrangement(filter) {
    let arr = [];
    for (var key in filter) {
      arr.push(key + "=" + filter[key]);
    }

    queryManagement(arr);
    console.log(QueryReducer);
  }

  //get on filter
  function getDataOnFilter() {
 
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&app_id=f7048fdb&app_key=%205e15ab95d8a05906e2b81cd43d450fc5&${QueryReducer.join(
          "&"
        )}`
      )
      .then(({ data }) => {
        AllData([...data.hits]);
      });
  }

  return (
    <>
      <button
        className="btn btn-success"
        data-bs-dismiss="offcanvas"
        onClick={() => {
          queryArrangement(filter);
          getDataOnFilter();
        }}
      >
        Apply Filter
      </button>
    </>
  );
};
