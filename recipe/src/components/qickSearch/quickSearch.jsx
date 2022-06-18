//importing quick search Data
import { QuickSearchData } from "../importantData/quickSearch";

//import component
import { SearchCard } from "../card/searchCards";

export const SearchComponent = () => {
  return (
    <div className="quickSeacrchContainer">
      {QuickSearchData.map((ele, i) => (
        <SearchCard key={"ls" + i} data_1={ele} />
      ))}
    </div>
  );
};
