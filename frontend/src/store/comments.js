import { csrfFetch } from "./csrf";

const GET__COMMENTS = "get/comments"
const ADD__COMMENT = "add/comment"
// const EDIT__COMMENT = "edit/Comment"
const DEL__COMMENT = "del/comment"

export const getComments = comments => {
    return {
        type: GET__COMMENTS,
        comments
    }
}

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

export const getImageComments = id => async(dispatch) => {
    const res = await fetch(`/api/comments/${id}`)
    if (res.ok) {
        const comments = await res.json()
        dispatch(getComments(comments))
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
    if (res.ok) {
        dispatch(delComment(id))
    }
}

const initialState = {}

export default function commentsReducer (state = initialState, action) {
    let newState = {};
    switch(action.type) {
        case GET__COMMENTS:
            action?.comments?.forEach(co => {
                newState[co.id] = co
            })
            return newState;
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
