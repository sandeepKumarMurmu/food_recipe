// importing from library
import { combineReducers } from "redux";
// importing components
import { AllDataReducer } from "./allDataReducer";
import { SingleReducer } from "./singleData";

//reducer function
export const Reducers = combineReducers({
  AllDataReducer,
  SingleReducer,
});
