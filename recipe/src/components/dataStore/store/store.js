//importing from library
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//inporting reducer function
import { Reducers } from "../reducer/reducers";

//making reducer data global for the app
export const Store = createStore(Reducers, {}, applyMiddleware(thunk));
