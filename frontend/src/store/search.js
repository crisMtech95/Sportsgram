import { csrfFetch } from "./csrf"

const GET_SEARCH = "get/search"

export const getSearch = (images) => {
    return {
        type: GET_SEARCH,
        images,
    }
}

// export const getimagesThunk = () => async(dispatch) => {
//     const res = await fetch('/api/images');

//     if (res.ok) {
//         const images = await res.json();
//         dispatch(getSearch(images));
//     }
// }

export const getSearchThunk = (obj) => async(dispatch) => {
    const res = await csrfFetch("/api/search", {
        method: "PATCH",
        body: JSON.stringify(obj)
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(getSearch(data))
        return data
    }
}



let initialState = {};

const SearchReducer = (state = initialState, action) => {
    let newState = {};
    switch(action.type) {
        case GET_SEARCH:
            // action.images.forEach((img) => {
            //     console.log(img)
            //     newState[img.id] = img;
            // })
            newState = action.images
            return newState;
        default:
            return state;
    }
}


export default SearchReducer;
