//importing from npm library
import { Route, Routes } from "react-router-dom";

//importing components
import { NavBar } from "../navBar/navBar";
import { ViewPage } from "../view/view";
import { SearchPage } from "../searchPage/searchPage";

//render function
export const AllRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/view" element={<ViewPage />} />
      </Routes>
    </>
  );
};
