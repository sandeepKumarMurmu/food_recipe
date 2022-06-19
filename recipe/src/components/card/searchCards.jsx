//importing library property / methodes
import axios from "axios";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

// impoting components
import { ActionCreators } from "../dataStore/store/actionCreator";

export const SearchCard = ({ data_1 }) => {
  const dispatch = useDispatch();
  const { AllData, queryManagement } = bindActionCreators(
    ActionCreators,
    dispatch
  );
  function handelClick() {
    AllData({ data: [], message: "Getting data .....", status: false });

    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${data_1.search}&app_id=f7048fdb&app_key=%205e15ab95d8a05906e2b81cd43d450fc5`
      )
      .then(({ data }) => {
        if (data.hits.length !== 0) {
          queryManagement({ q: data_1.search });
          AllData({
            data: [...data.hits],
            message: "Getting data .....",
            status: true,
          });
        } else {
          AllData({
            data: [],
            message:
              "No data found Please check spelling or try other Recipe .....",
            status: false,
          });
        }
      });
  }
  return (
    <div
      onClick={() => {
        handelClick();
      }}
      className="quiceSearchCard"
      id="x"
      style={{
        backgroundImage: `url(${data_1.image})`,
      }}
    >
      <p>{data_1.search.toUpperCase()}</p>
    </div>
  );
};
