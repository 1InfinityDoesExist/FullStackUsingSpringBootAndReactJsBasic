import { combineReducers } from "redux";
import errorReducers from "./errorReducers";
import buildingProjectTaskReducers from "./buildingProjectReducers";

export default combineReducers({
  errors: errorReducers,
  building_task: buildingProjectTaskReducers
});
