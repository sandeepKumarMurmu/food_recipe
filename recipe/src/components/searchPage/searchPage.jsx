//importing from library
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

//importing components
import { Card } from "../card/card";
import { SearchComponent } from "../qickSearch/quickSearch";

//main render function
export const SearchPage = () => {
  const temp = useSelector((state) => state.AllDataReducer);

  const [data, setData] = useState({
    data: [],
    status: false,
    message: "Please search for recipe ...",
  });

  useEffect(() => {
    setData(temp);
  }, [temp]);

  return (
    <>
      <div className="food_container_user">
        {data.status ? (
          data.data.map((ele, i) => <Card key={i} data={ele} i={i} />)
        ) : (
          <div>
            <h1 style={{ width: "98%", textAlign: "center", margin: "auto" }}>
              {data.message}
            </h1>
            <br />
            <SearchComponent />
          </div>
        )}
      </div>
    </>
  );
};
