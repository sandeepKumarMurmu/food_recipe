//importinf components
import { Bulets } from "../view/bulets";

//view card for view page
export const ViewCard = ({ singleData }) => {
  return (
    <>
      <div className="card_container_view">
        <div className="image_container_view">
          <img src={singleData.recipe.images.REGULAR.url} alt="" style={{}} />
        </div>
        <div>
          <h5>{singleData.recipe.label}</h5>
          <ul>
            <li>
              <Bulets
                key_1={"Calories"}
                value={Math.round(singleData.recipe.calories)}
              />
            </li>
            <li>
              <Bulets key_1={"Caution"} value={singleData.recipe.cautions[0]} />
            </li>
            <li>
              <Bulets
                key_1={"Cuisine Type"}
                value={singleData.recipe.cuisineType[0]}
              />
            </li>
            <li>
              <Bulets
                key_1={"DietLabels"}
                value={singleData.recipe.dietLabels[0]}
              />
            </li>
            <li>
              <Bulets
                key_1={"Meal Type"}
                value={singleData.recipe.mealType[0]}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
