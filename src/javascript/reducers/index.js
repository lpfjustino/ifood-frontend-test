import { combineReducers } from "redux";

import filters from "./filters";
import auth from "./auth";

export default combineReducers({
    filters,
    auth,
});