import { remove } from "js-cookie";
import { csrfFetch } from "./csrf";


const LOGIN = "session/login"
const LOGOUT = "session/logout"

export const loginUser = user => {
    return {
        type: LOGIN,
        payload: user,
    };
};

export const logoutUser = () => {
    return {
        type: LOGOUT,
    }
}

export const login = user => async(dispatch) => {
    const { credential, password} = user;
    const response = await csrfFetch("/api/session", {
        method: "POST",
        body: JSON.stringify({ credential, password })
    })
    const data = await response.json();
    dispatch(loginUser(data.user));
    return response;
}

export const restoreUser = () => async (dispatch) => {
    const res = await csrfFetch("/api/session");
    const data = await res.json();
    dispatch(loginUser(data.user));
    return res;
}

export const signupUser = (user) => async(dispatch) => {
    const { email, username, password, fullName } = user;
    const res = await csrfFetch("/api/users", {
        method: "POST",
        body: JSON.stringify({email, username, password, fullName})
    })
    const data = await res.json();
    dispatch(loginUser(data.user));
    return res
}

export const logout = () => async(dispatch) => {
    const res = await csrfFetch("/api/session", { method: "DELETE" });
    dispatch(logoutUser())
    return res;
}

const initialState = { user: null};

const sessionReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case LOGIN:
            newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        case LOGOUT:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState
        default:
            return state
    }
};



export default sessionReducer;
