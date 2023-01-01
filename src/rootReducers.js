import { combineReducers } from "redux";
import cardReducer from "./data/reducers/card-reducers";

const rootReducers = combineReducers({
  Card: cardReducer,
});

export default rootReducers;
