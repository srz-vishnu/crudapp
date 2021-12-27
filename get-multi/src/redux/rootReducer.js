import { combineReducers } from "redux";
import userReducer from "./User/userReducer";

const rootReducer = combineReducers({
  userInfo: userReducer,
})

export default rootReducer