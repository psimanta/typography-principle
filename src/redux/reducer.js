import * as ACTION_TYPES from "./actionTypes";

const initState = {
    introImageUrl: null,
    gallery: []
}

const rootReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ACTION_TYPES.SET_INTRO_IMAGE:
            return {
                ...state,
                introImageUrl: payload
            }
        case ACTION_TYPES.SET_GALLERY_IMAGE:
            return {
                ...state,
                gallery: payload
            }
        default:
            return state
    }
}

export default rootReducer;