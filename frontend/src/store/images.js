const GET_IMAGES = "get/images"
const POST_IMAGE = "post/image"
const DEL_IMAGE = "del/image"
const UPDATE_IMAGE = "update/image"


export const getImages = (images) => {
    return {
        type: GET_IMAGES,
        images,
    }
}
export const postImage = post => {
    return {
        type: POST_IMAGE,
        post,
    }
}

export const getimagesThunk = () => async(dispatch) => {
    console.log("YOU ARE HITTING THIS")
    const res = await fetch('/api/images');

    if (res.ok) {
        const images = await res.json();
        dispatch(getImages(images));
    }
}



let initialState = {};

const imagesReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_IMAGES:
            const newState = {};
            action.images.forEach((img) => {
                newState[img.id] = img;
            })
            return {...state, ...newState}
        default:
            return state;
    }
}


export default imagesReducer;
