import { csrfFetch } from "./csrf";

const GET__USERALBUMS = "get/user/albums"


export const getAlbums = (albums) => {
    return {
        type: GET__USERALBUMS,
        albums
    }
}

export const getAlbumsThunk = (id) => async(dispatch) => {
    const res = await fetch(`/api/albums/${id}`)
    if (res.ok) {
        const albums = await res.json()
        dispatch(getAlbums(albums))
    }
}






const initialState = {};

const albumsReducer = (state = initialState, action) => {
    let newState = {};
    switch(action.type) {
        case GET__USERALBUMS:
            action.albums.forEach((album) => {
                newState[album.id] = album;
            })
            return {...state, ...newState}

        default:
            return state;
    }
}

export default albumsReducer;
