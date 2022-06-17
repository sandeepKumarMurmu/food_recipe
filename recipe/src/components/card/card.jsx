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
    <div className="card card_user">
      <img
        src={data.recipe.images.REGULAR.url || nullImage}
        className="card-img-top user_image"
        alt="meal image"
        onClick={() => {
          navigateToDetailPage();
        }}
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

        <div className="card-text ">
          <button className="btn btn-secondary button_user">Detail</button>
        </div>
      </div>
    </div>
  );
};
