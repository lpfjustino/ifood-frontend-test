import { combineReducers } from "redux";

import filters from "./filters";
import auth from "./spotify";

export default combineReducers({
    filters,
    auth,
});