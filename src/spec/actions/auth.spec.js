import { SET_ACCESS_TOKEN } from "../../javascript/constants";
import authActions from "../../javascript/actions/auth.js";

describe("The filters action creators", () => {
    it("should return action", () => {
        const mockToken = "foo";
        const actionCreator = authActions.setAccessToken(mockToken);
        expect(actionCreator).toEqual({
            type: SET_ACCESS_TOKEN,
            payload: {
                token: mockToken,
            },
        });
    });
})