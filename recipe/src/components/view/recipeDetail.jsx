export const RecipeDetail = ({ singleData }) => {
  return (
    <>
      <ul>
        {singleData.recipe.ingredients.map((ele, i) => (
          <li key={i}>{ele.text}</li>
        ))}
      </ul>
    </>
  );
};
