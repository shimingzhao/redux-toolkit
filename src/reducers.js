import { combineReducers } from "redux";
import dataReducer from "./slices/dataSlice";

export default combineReducers({
  data: dataReducer
});
