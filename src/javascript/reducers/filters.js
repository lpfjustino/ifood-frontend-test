import { GET_TRENDING_PLAYLISTS_FILTERS } from "../constants/index.json";
import _ from "lodash";

const defaultState = {
    filters: [],
}

export default (state = defaultState, action) => {

    switch (action.type) {
        case `${GET_TRENDING_PLAYLISTS_FILTERS}_FULFILLED`:
        return {
            ...state,
            filters: _.get(action, "payload.data.filters", defaultState.filters),
        };
        
        case `${GET_TRENDING_PLAYLISTS_FILTERS}_REJECTED`:
        default:
            return { ...state };
    }
};