import { GET_TRENDING_PLAYLISTS_FILTERS } from "../../javascript/constants";
import filterActions from "../../javascript/actions/filters.js";

describe("The filters action creators", () => {
    it("should return action", () => {
        const actionCreator = filterActions.getFilters();
        expect(actionCreator).toEqual({
            type: GET_TRENDING_PLAYLISTS_FILTERS,
            payload: {
                promise: jasmine.any(Object)
            },
        });
    });
})