import { SET_ACCESS_TOKEN } from "../constants/index.json";

const defaultState = {
    accessToken: null,
}

export default (state = defaultState, action) => {

    switch (action.type) {
        case SET_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: action.payload.token,
            };

        default:
            return { ...state };
    }
};