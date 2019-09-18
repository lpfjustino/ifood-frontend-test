import _ from "lodash";
import { GET_TRENDING_PLAYLISTS_FILTERS } from "../constants/index.json";
import { groupById } from "../utils";

const defaultState = {
}

export default (state = defaultState, action) => {

    switch (action.type) {
        case `${GET_TRENDING_PLAYLISTS_FILTERS}_FULFILLED`:
        const filters = _.get(action, "payload.data.filters", defaultState.filters);
        return {
            ...state,
            ...groupById(filters),
        };
        
        case `${GET_TRENDING_PLAYLISTS_FILTERS}_REJECTED`:
        default:
            return { ...state };
    }
};