import _ from "lodash";
import {
    GET_TRENDING_PLAYLISTS_FILTERS,
    SET_FILTER,
} from "../constants/index.json";
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

        case SET_FILTER:
        const { field, value } = action.payload;
        return {
            ...state,
            [field]: value,
        }
        
        case `${GET_TRENDING_PLAYLISTS_FILTERS}_REJECTED`:
        default:
            return { ...state };
    }
};