import { GET_TRENDING_PLAYLISTS_FILTERS } from "../../javascript/constants";
import reducer from "../../javascript/reducers/filters.js";

describe("The filters action creators", () => {
    it("should return the filters array when request is successful", () => {
        const response = { data: { filters: [] } };
        const action = { 
            type: `${GET_TRENDING_PLAYLISTS_FILTERS}_FULFILLED`,
            payload: response,
        };
        
        const newState = reducer({}, action);
        expect(newState.filters).toEqual(response.data.filters);
    });

    it("should not change state otherwise", () => {
        const response = { data: {} };
        const action = { 
            type: `${GET_TRENDING_PLAYLISTS_FILTERS}_REJECTED`,
            payload: response,
        };
        const state = { filters: {} }
        
        const newState = reducer(state, action);
        expect(newState).toEqual(state);
    });
})