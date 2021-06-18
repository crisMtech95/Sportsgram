import './LoginForm.css'
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import * as sessionActions  from '../../store/session'


export default function LoginFormPage() {
    const sessionUser = useSelector(state => state.session.user)
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = ([]);
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
        <form onSubmit={onSubmit}>
            <ul>
                {errors && errors.map((err, i) => <li key={i}>{err}</li>)}
            </ul>
            <div>
                <label> Username or Email
                    <br />
                    <input
                        type="text"
                        required
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label> Password
                    <br />
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                </label>
            </div>
            <button type="submit">Log In</button>
        </form>
    )
}
