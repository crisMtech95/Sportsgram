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
