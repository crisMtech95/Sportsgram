import { csrfFetch } from "./csrf";

const GET_IMAGES = "get/images"
const ADD_IMAGE = "add/image"
const DEL_IMAGE = "del/image"
// const UPDATE_IMAGE = "update/image"


export const getImages = (images) => {
    return {
        type: GET_IMAGES,
        images,
    }
}
export const postImage = img => {
    return {
        type: ADD_IMAGE,
        img,
    }
}
export const delImage = image => {
    return {
        type: DEL_IMAGE,
        image,
    }
}

export const getimagesThunk = () => async(dispatch) => {
    const res = await fetch('/api/images');

    if (res.ok) {
        const images = await res.json();
        dispatch(getImages(images));
    }
}

export const createPost = (imgInfo) => async(dispatch) => {
    // const { userId, imageUrl, content, sport } = imgInfo;
    const res = await csrfFetch('/api/images', {
        method: "POST",
        body: JSON.stringify(imgInfo)
    })
    const data = await res.json();
    dispatch(postImage(data))
    return data;
}

export const delPost = (img) => async(dispatch) => {
    const res = await csrfFetch("/api/images", {
        method: "DELETE",
        body: JSON.stringify(img)
    })
    dispatch(delImage(img))

}

export const editPost = (img) => async(dispatch) => {
    const res = await csrfFetch("/api/images", {
        method: "PUT",
        body: JSON.stringify(img)
    })
    if(res.ok) {
        const data = await res.json()
        dispatch(postImage(data))
        return data
    }
}

let initialState = {};

const imagesReducer = (state = initialState, action) => {
    let newState = {};
    switch(action.type) {
        case GET_IMAGES:
            action.images.forEach((img) => {
                newState[img.id] = img;
            })
            return {...state, ...newState}
        case ADD_IMAGE:
            newState = {...state, [action.img.id]: action.img}
            return newState;
        case DEL_IMAGE:
            newState = {...state}
            delete newState.images[action.image.id]
            return newState;
        default:
            return state;
    }
}


export default imagesReducer;
