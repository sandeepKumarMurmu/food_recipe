// importing form library
import { useSelector } from "react-redux";

//importing css file
import "./view.css";

//importing components
import { ViewCard } from "../card/viewCard";
import { RecipeDetail } from "./recipeDetail";

export const ViewPage = () => {
  const { SingleReducer: singleData } = useSelector((state) => state);

  return (
    <>
      <div className="view_container">
        <ViewCard singleData={singleData} />

        <div className="ingrident_container">
          <h4>Ingredients</h4>
          <RecipeDetail singleData={singleData} />
        </div>
      </div>
    </>
  );
};
