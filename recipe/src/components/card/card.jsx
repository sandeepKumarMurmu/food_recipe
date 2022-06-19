//importing library property / methodes
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useNavigate } from "react-router-dom";

//importing components
import { ActionCreators } from "../dataStore/store/actionCreator";

//render function for search card
export const Card = ({ data, i }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { SingleData } = bindActionCreators(ActionCreators, dispatch);

  //navigation function
  function navigateToDetailPage() {
    nav("/view");
    SingleData({ data, status: true });
  }

  let Lable = data.recipe.label.split(" ");

  return (
    <div
      className="card  card_user"
      onClick={() => {
        navigateToDetailPage();
      }}
    >
      <img
        src={data.recipe.images.REGULAR.url}
        className="card-img-top user_image"
        alt={Lable.join(" ")}
      />

      <div className="card-body">
        <h6 className="card-title">
          {Lable.length > 4
            ? Lable[0] +
              " " +
              Lable[1] +
              " " +
              Lable[2] +
              " " +
              Lable[3] +
              "..."
            : Lable.join(" ")}
        </h6>

        <div className="userContent">
          <span
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={"Calories  " + Math.round(data.recipe.calories)}
          >
            Calories
          </span>
          <span> || </span>
          <span
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={"Total ingredients " + data.recipe.ingredients.length}
          >
            Ingredients
          </span>
        </div>
      </div>
    </div>
  );
};

// button_user
