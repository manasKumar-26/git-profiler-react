import { combineReducers } from "redux";
import Auth from "./Auth";
import Search from "./Search";
import Repo from "./Repo";
export default combineReducers({
  Auth,
  Search,
  Repo,
});
