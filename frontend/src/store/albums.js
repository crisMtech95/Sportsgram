import { csrfFetch } from "./csrf";

const GET__USERALBUMS = "get/user/albums"
const CREATE__ALBUM = "create/albums"

export const getAlbums = (albums) => {
    return {
        type: GET__USERALBUMS,
        albums
    }
}
export const addAlbum = album => {
    return {
        type: CREATE__ALBUM,
        album
    }
}

export const getAlbumsThunk = (id) => async(dispatch) => {
    const res = await fetch(`/api/albums/${id}`)
    if (res.ok) {
        const albums = await res.json()
        dispatch(getAlbums(albums))
    }
}

export const createAlbumsThunk = (album) => async(dispatch) => {
    const res = await csrfFetch("/api/albums", {
        method: "POST",
        body: JSON.stringify(album)
    })
    if (res.ok) {
        const data = await res.json()
        dispatch(addAlbum(data))
        return data
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
        case CREATE__ALBUM:
            return {...state, [action.album.id] : action.album }
        default:
            return state;
    }
}

export default albumsReducer;
