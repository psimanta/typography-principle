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

const setGalleryImage = payload => {
    return {
        type: ACTION_TYPES.SET_GALLERY_IMAGE,
        payload: payload
    }
}

export const getIntroImage = () => dispatch => {
    axios.get(`${URLS.UNSPLASH_IMAGE_URL}/vyPVtz5p8D4`, {
        headers: {
            "Authorization": `Client-ID ${CLIENT_ID}`
        }
    })
        .then(response => {
            dispatch(setIntroImage(response.data.urls.regular))
        })
}

export const getGalleryImage = () => dispatch => {
    const rq1 = axios.get(`${URLS.UNSPLASH_IMAGE_URL}/Ud24XR0PZMA`, {
        headers: {
            "Authorization": `Client-ID ${CLIENT_ID}`
        }
    })
    const rq2 = axios.get(`${URLS.UNSPLASH_IMAGE_URL}/6xT7BZ38Vuk`, {
        headers: {
            "Authorization": `Client-ID ${CLIENT_ID}`
        }
    })

    const rq3 = axios.get(`${URLS.UNSPLASH_IMAGE_URL}/5EUh-tq31eA`, {
        headers: {
            "Authorization": `Client-ID ${CLIENT_ID}`
        }
    })

    const rq4 = axios.get(`${URLS.UNSPLASH_IMAGE_URL}/Db6GsqG1mxs`, {
        headers: {
            "Authorization": `Client-ID ${CLIENT_ID}`
        }
    })

    axios.all([rq1, rq2, rq3, rq4])
        .then(axios.spread((...responses) => {
            const imageList = [
                responses[0].data.urls.regular,
                responses[1].data.urls.regular,
                responses[2].data.urls.regular,
                responses[3].data.urls.regular
            ]
            dispatch(setGalleryImage(imageList))
        }))
}