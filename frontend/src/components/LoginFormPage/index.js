import './LoginForm.css'
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import * as sessionActions  from '../../store/session'


export default function LoginFormPage() {
    const sessionUser = useSelector(state => state.session.user)
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch()


    if (sessionUser) return (
        <Redirect to="/"/>
    )

    const onSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
      });
    }

    return (
        <div className="login__mainContainer" id="bcimglogin">
            <div className="form_container">
                <form onSubmit={onSubmit} className="signup">
                    <ul>
                        {errors && errors.map((err, i) => <li key={i}>{err}</li>)}
                    </ul>
                        <label /> Username or Email
                            <input className="signup_input"
                                type="text"
                                required
                                value={credential}
                                onChange={(e) => setCredential(e.target.value)}
                            />
                        <label /> Password
                            <input className="signup_input"
                                type="password"
                                required
                                value={password}
                                onChange={(e)=> setPassword(e.target.value)}
                            />
                    <button type="submit" className="signup_btn">Log In</button>
                </form>
            </div>
        </div>
    )
}
