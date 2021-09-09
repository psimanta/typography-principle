import * as ACTION_TYPES from "./actionTypes";

const initState = {
    introImageUrl: null
}

const rootReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ACTION_TYPES.SET_INTRO_IMAGE:
            return {
                ...state,
                introImageUrl: payload
            }
        default:
            return state
    }
}

export default rootReducer;