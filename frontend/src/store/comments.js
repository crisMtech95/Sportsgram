import { csrfFetch } from "./csrf";

const ADD__COMMENT = "add/comment"
const DEL__COMMENT = "del/comment"

export const postComment = (commentInfo) => {
    return {
        type: ADD__COMMENT,
        commentInfo
    }
}

export const delComment = (id) => {
    return {
        type: DEL__COMMENT,
        id
    }
}

export const addComment = (commentInfo) => async(dispatch) => {
    const res = await csrfFetch("/api/comments", {
        method: "POST",
        body: JSON.stringify(commentInfo)
    })
    const data = await res.json();
    dispatch(postComment(data))
    return data;
}
export const editComment = (commentInfo) => async(dispatch) => {
    const res = await csrfFetch("/api/comments", {
        method: "PATCH",
        body: JSON.stringify(commentInfo)
    })
    const data = await res.json();
    dispatch(postComment(data))
    return data;
}

export const delCom = (id) => async(dispatch) => {
    const res = await csrfFetch("/api/comments", {
        method: "DELETE",
        body: JSON.stringify({id})
    })
    const data = await res.json()
    dispatch(delComment(data))
}

const initialState = {}

export default function commentsReducer (state = initialState, action) {
    let newState = {};
    switch(action.type) {
        case ADD__COMMENT:
            newState = {...state, [action.commentInfo.id]: action.commentInfo}
            return newState;
        case DEL__COMMENT:
            newState = {...state};
            delete newState[action.id]
            return newState;
        default:
            return state;
    }
}
