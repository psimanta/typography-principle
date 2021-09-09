import axios from "axios";
import * as ACTION_TYPES from "./actionTypes";
import * as URLS from "./urls";
import { CLIENT_ID } from "./key"

const setIntroImage = payload => {
    return {
        type: ACTION_TYPES.SET_INTRO_IMAGE,
        payload: payload
    }
}

export const getIntroImage = () => dispatch => {
    axios.get(URLS.INTRO_IMAGE_URL, {
        headers: {
            "Authorization": `Client-ID ${CLIENT_ID}`
        }
    })
        .then(response => {
            console.log(response.data.urls.raw)
            dispatch(setIntroImage(response.data.urls.raw))
        })
}