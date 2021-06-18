import './SignupForm.css';
import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Redirect } from "react-router-dom"
import * as sessionActions from '../../store/session'

export default function SignupFormPage () {
    const sessionUser = useSelector(state => state.session.user)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch()

    if (sessionUser) return <Redirect to="/"/>

    const onSubmit = (e) => {
        e.preventDefault()
        if (password === confirmPassword) {
            return dispatch(sessionActions.signupUser({email, username, password}))
                .catch(async (res) => {
                    const data = await res.json()
                    if (data && data.errors) setErrors(data.errors)
                })
        }
        return setErrors(["Confirm Password field must be the same as the Password field"])
    }

    return (
        <form onSubmit={onSubmit}>
            <ul>
                {errors.map((err, i) => <li key={i}>{err}</li>)}
            </ul>
            <label> Username
                <br />
                <input
                type="text"
                required
                value={username}
                onChange={e => setUsername(e.target.value)}
                />
            </label>
            <label> Email
                <br />
                <input
                type="text"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
            </label>
            <label> Password
                <br />
                <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
            </label>
            <label> Confirm Password
                <br />
                <input
                type="password"
                required
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                />
            </label>
            <button type="submit">Sign Up</button>
        </form>
    )
}
