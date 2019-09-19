import { SET_ACCESS_TOKEN } from "../constants/index.json";

const actionCreators = {
    setAccessToken(token) {
        return {
            type: SET_ACCESS_TOKEN,
            payload: { token },
        };
    },
}

export default actionCreators;