import ROLE_SCOPE_GROUP_GET_DETAILS from "../constants";

const defaultState = {
    filters: [],
}

export default (state = defaultState, action) => {

    switch (action.type) {
        case `${ROLE_SCOPE_GROUP_GET_DETAILS}_FULFILLED`:
            console.log(action);
            return {
                ...state,
                filters: action.payload,
            };

        default:
            return { ...state };
    }
};