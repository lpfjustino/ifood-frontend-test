import { SET_ACCESS_TOKEN } from "../../javascript/constants";
import spotifyActions from "../../javascript/actions/spotify";

describe("The filters action creators", () => {
    it("should return action", () => {
        const mockToken = "foo";
        const actionCreator = spotifyActions.setAccessToken(mockToken);
        expect(actionCreator).toEqual({
            type: SET_ACCESS_TOKEN,
            payload: {
                token: mockToken,
            },
        });
    });
})