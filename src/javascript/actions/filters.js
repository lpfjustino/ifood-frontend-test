import ROLE_SCOPE_GROUP_GET_DETAILS from "../constants";
import { TRENDING_PLAYLIST_FILTERS } from "../constants/urls";
import axios from "axios";

const actionCreators = {
    getFilters() {
        return dispatch => {
            return dispatch({
                type: ROLE_SCOPE_GROUP_GET_DETAILS,
                payload: {
                    promise: axios.get(TRENDING_PLAYLIST_FILTERS)
                }
            });
        };
    },
}

export default actionCreators;