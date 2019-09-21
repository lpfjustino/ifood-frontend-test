import { SET_ACCESS_TOKEN } from "../../javascript/constants";
import reducer from "../../javascript/reducers/spotify.js";

describe("The filters action creators", () => {
    it("should return the filters array when request is successful", () => {
        const action = { 
            type: SET_ACCESS_TOKEN,
            payload: { token: "token" },
        };
        
        const newState = reducer({}, action);
        expect(newState.accessToken).toEqual(action.payload.token);
    });
})