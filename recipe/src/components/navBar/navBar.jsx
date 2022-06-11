// importing library
//importing library property / methodes
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useNavigate } from "react-router-dom";
//importing components
import { Button } from "../button/filterAction";
import { Colapse } from "../poper/colaplse";
import { ActionCreators } from "../dataStore/store/actionCreator";

//important Datas
import { health, mealType, dishType, diet } from "../importantData/importanT";

//renderning function
export const NavBar = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { AllData } = bindActionCreators(ActionCreators, dispatch);
  const [filter, setFilter] = useState({});

  const [timeOut, setTimeOut] = useState();

  //handel Change Function
  function handelChange(e) {
    clearTimeout(timeOut);
    setFilter({ q: e.target.value });

    const timeOutId = setTimeout(() => {
      axios
        .get(
          `https://api.edamam.com/api/recipes/v2?type=public&q=${e.target.value}&app_id=f7048fdb&app_key=%205e15ab95d8a05906e2b81cd43d450fc5`
        )
        .then(({ data }) => {
          AllData([...data.hits]);
        });
    }, 500);
    setTimeOut(timeOutId);
  }

  //condition for filter button

  return (
    <nav className="navbar navbar-light bg-light user_nav">
      <div className="container-fluid">
        <div
          className="logo_container"
          onClick={() => {
            nav("/");
          }}
        >
          <img
            className="logo_image"
            src="https://freesvg.org/img/Gerald_G_Fast_Food_Lunch_Dinner_(FF_Menu)_6.png"
            alt=""
          />
          <p>Recipe Search</p>
        </div>

        <input
          className="form-control input_user"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => {
            handelChange(e);
          }}
        />

        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          Filter
        </button>
        <div
          className="offcanvas offcanvas-end offcanvas_user "
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel">Filter</h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body ">
            <div className="d-grid gap-2">
              <Colapse props={health} filter={filter} setFilter={setFilter} />
              <Colapse props={mealType} filter={filter} setFilter={setFilter} />
              <Colapse props={diet} filter={filter} setFilter={setFilter} />
              <Colapse props={dishType} filter={filter} setFilter={setFilter} />
              <Button filter={filter} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

//https://api.edamam.com/api/recipes/v2?type=public&q=chiken&app_id=f7048fdb&app_key=%205e15ab95d8a05906e2b81cd43d450fc5&diet=balanced&cuisineType=Nordic&dishType=Bread
