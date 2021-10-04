import './DemoLogin.css'
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import * as sessionActions  from '../../store/session'


export default function DemoLogin() {
    const sessionUser = useSelector(state => state.session.user)
    let credential = "Demo"
    let password = "password"
    const dispatch = useDispatch()


    if (sessionUser) return (
        <Redirect to="/"/>
    )

    const onSubmit = (e) => {
        e.preventDefault();
        return dispatch(sessionActions.login({ credential, password }))
    }

    return (
        <div className="login__mainContainer" id="bcimglogin">
            <div className="form_container">
                <form onSubmit={onSubmit} className="signup">
                    <p className="Demo__pTag">Browse around the site as a Demo user and try all of our cool features.</p>
                    <button type="submit" className="signup_btn">Demo login</button>
                </form>
            </div>
        </div>
    )
}
