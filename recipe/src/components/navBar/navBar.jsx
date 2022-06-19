// importing library
//importing library property / methodes
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { useNavigate } from "react-router-dom";

// dotenv.config();
//importing components
import { Button } from "../button/filterAction";
import { Colapse } from "../poper/colaplse";
import { ActionCreators } from "../dataStore/store/actionCreator";

//important Datas
import { health, mealType, dishType, diet } from "../importantData/importanT";
import { useEffect } from "react";

//renderning function
export const NavBar = () => {
  const check = useSelector((state) => state.SingleReducer);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { AllData, queryManagement, SingleData } = bindActionCreators(
    ActionCreators,
    dispatch
  );

  const [timeOut, setTimeOut] = useState();
  const [navState, setNavState] = useState(false);

  //handel Change Function
  function handelChange(e) {
    clearTimeout(timeOut);
    AllData({ data: [], message: "Getting data .....", status: false });
    const timeOutId = setTimeout(() => {
      axios
        .get(
          `https://api.edamam.com/api/recipes/v2?type=public&q=${e.target.value}&app_id=f7048fdb&app_key=%205e15ab95d8a05906e2b81cd43d450fc5`
        )
        .then(({ data }) => {
          if (data.hits.length !== 0) {
            queryManagement({ q: e.target.value });
            AllData({
              data: [...data.hits],
              message: "Getting data .....",
              status: true,
            });
          } else {
            AllData({
              data: [],
              message:
                "No data found Please check spelling or try other Recipe .....",
              status: false,
            });
          }
        });
    }, 500);
    setTimeOut(timeOutId);
  }

  useEffect(() => {
    setNavState(check.status);
  }, [check.status]);

  //condition for filter button

  return (
    <nav className="navbar navbar-light bg-dark user_nav">
      <div className="container-fluid ">
        <div
          className="logo_container"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Home"
          onClick={() => {
            nav("/");
            SingleData({ ...check, status: false });
          }}
        >
          <img
            className="logo_image"
            src="https://freesvg.org/img/Gerald_G_Fast_Food_Lunch_Dinner_(FF_Menu)_6.png"
            alt=""
          />
          <p>Recipe Search</p>
        </div>

        {!navState && (
          <input
            className="form-control input_user"
            type="search"
            placeholder="Search"
            aria-label="Search"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Enter Recipe"
            onChange={(e) => {
              handelChange(e);
            }}
          />
        )}

        {!navState && (
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            data-bs-placement="top"
            title="Filter"
          >
            Filter
          </button>
        )}

        <div
          className="offcanvas offcanvas-end offcanvas_user "
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header bg-dark">
            <h5 id="offcanvasRightLabel">Filter</h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body bg-dark">
            <div className="d-grid gap-2 bg-dark">
              <Colapse props={health} />
              <Colapse props={mealType} />
              <Colapse props={diet} />
              <Colapse props={dishType} />
              <Button />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

//https://api.edamam.com/api/recipes/v2?type=public&q=chiken&app_id=f7048fdb&app_key=%205e15ab95d8a05906e2b81cd43d450fc5&diet=balanced&cuisineType=Nordic&dishType=Bread
