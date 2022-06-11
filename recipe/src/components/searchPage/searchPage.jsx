//importing from library
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

//importing components
import { Card } from "../card/card";

//main render function
export const SearchPage = () => {
  const temp = useSelector((state) => state.AllDataReducer);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([...temp]);
  }, [temp]);

  function getAllData(setData) {
    setData([1, 4, 5, 8, 6, 9, 5]);
  }

  return (
    <>
      <div className="food_container_user">
        {data.length != 0 &&
          data.map((ele, i) => <Card key={i} data={ele} i={i} />)}
        {data.length == 0 && <h1>please search for meal</h1>}
      </div>
    </>
  );
};
