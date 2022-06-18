//importing library property / methodes
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useNavigate } from "react-router-dom";

//importing components
import { ActionCreators } from "../dataStore/store/actionCreator";

//render function for search card
export const Card = ({ data, i }) => {
  console.log(data);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { SingleData } = bindActionCreators(ActionCreators, dispatch);

  let id = "detail_" + i;
  let ingredients = [...data.recipe.ingredients];

  //navigation function
  function navigateToDetailPage() {
    nav("/view");
    SingleData({ data, status: true });
  }

  const nullImage =
    "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg";
  let Lable = data.recipe.label.split(" ");

  return (
    <div
      className="card  card_user"
      onClick={() => {
        navigateToDetailPage();
      }}
    >
      <img
        src={data.recipe.images.REGULAR.url || nullImage}
        className="card-img-top user_image"
        alt="meal image"
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
            title={"Calories" + "  " + Math.round(data.recipe.calories)}
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
