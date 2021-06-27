import { csrfFetch } from "./csrf";


const GET_IMAGES = "get/images"
const ADD_IMAGE = "add/image"
const DEL_IMAGE = "del/image"
const GET_IMG = "get/img"
// const UPDATE_IMAGE = "update/image"


export const getImages = (images) => {
    return {
        type: GET_IMAGES,
        images,
    }
}

export const bigSingleImg = (image) => {
    return {
        type: GET_IMG,
        image,
    }
}

export const postImage = img => {
    return {
        type: ADD_IMAGE,
        img,
    }
}

export const delImage = img => {
    return {
        type: DEL_IMAGE,
        img,
    }
}

export const getimagesThunk = () => async(dispatch) => {
    const res = await fetch('/api/images');

    if (res.ok) {
        const images = await res.json();
        dispatch(getImages(images));
    }
}

export const getSinglePost = (id) => async(dispatch) => {
    const res = await fetch(`/api/images/${id}`)
    if(res.ok) {
        const image = await res.json();
        dispatch(bigSingleImg(image))
    }

}

export const getProfileImages = (id) => async(dispatch) => {
    const res = await fetch(`/api/images/profile/${id}`)
    if (res.ok) {
        const images = await res.json()
        dispatch(getImages(images))
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
    const data = await res.json()
    // console.log("RES FROM THE FETCH", res)
    // console.log("RES FROM THE JSON", data)
    dispatch(delImage(img.id))

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

export const addImgToAlbum = img => async(dispatch) => {
    console.log("THIS IS THE IMAGE OBJ ON THE THUNK", img)
    const res = await csrfFetch("/api/images", {
        method: "PATCH",
        body: JSON.stringify(img)
    })
    if (res.ok) {
        console.log("result form REST ", res)
        const data = await res.json();
        console.log("result form DATA ", data)
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
            return {...state, ...newState};

        case GET_IMG:
            newState[action.image.id] = action.image
            return {...state, ...newState};
        case ADD_IMAGE:
            newState = {...state, [action.img.id]: action.img}
            return newState;
        case DEL_IMAGE:
            newState = {...state}
            delete newState[action.img.id]
            return newState;
        default:
            return state;
    }
}


export default imagesReducer;
