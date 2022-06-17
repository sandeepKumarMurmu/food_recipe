// importing form library
import { useSelector } from "react-redux";

//importing css file
import "./view.css";

//importing components
import { ViewCard } from "../card/viewCard";
import { RecipeDetail } from "./recipeDetail";

export const ViewPage = () => {
  const { SingleReducer: singleData } = useSelector((state) => state);
  console.log(singleData.data);
  // return <h1>connected view</h1>;

  return (
    <>
      <div className="view_container">
        <ViewCard singleData={singleData.data} />

        <div className="ingrident_container">
          <h4 style={{ width: "100%", textAlign: "center" }}>Ingredients</h4>
          <RecipeDetail singleData={singleData.data} />
        </div>
      </div>
    </>
  );
};
