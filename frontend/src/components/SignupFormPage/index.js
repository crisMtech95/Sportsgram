import './SignupForm.css';
import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Redirect } from "react-router-dom"
import * as sessionActions from '../../store/session'

export default function SignupFormPage () {
    const sessionUser = useSelector(state => state.session.user)
    const [fullName, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [image, setImage] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch()

    if (sessionUser) return <Redirect to="/"/>

    const onSubmit = (e) => {
        e.preventDefault()
        if (password === confirmPassword) {
            return dispatch(sessionActions.signupUser({email, username, password, fullName, image}))
                .catch(async (res) => {
                    const data = await res.json()
                    if (data && data.errors) setErrors(data.errors)
                })
        }
        return setErrors(["Confirm Password field must be the same as the Password field"])
    }

    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) setImage(file);
    };

    return (
        <div className="login__mainContainer" id="bcimgsignup">
            <div className="form_container">
                <form onSubmit={onSubmit} className="signup">
                    <ul>
                        {errors.map((err, i) => <li key={i}>{err}</li>)}
                    </ul>
                    <label /> Username
                        <input className="signup_input"
                        type="text"
                        required
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        />
                    <label /> Full Name
                        <input className="signup_input"
                        type="text"
                        required
                        value={fullName}
                        onChange={e => setName(e.target.value)}
                        />
                    <label /> Email
                        <input className="signup_input"
                        type="text"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                    <label /> Password
                        <input className="signup_input"
                        type="password"
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        />
                    <label>
                        <input type="file" onChange={updateFile} />
                    </label>
                    {/* <label>
                        Multiple Upload
                        <input
                        type="file"
                        multiple
                        onChange={updateFiles} />
                    </label> */}
                    <label /> Confirm Password
                        <input className="signup_input"
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        />
                    <button type="submit" className="signup_btn">Sign Up</button>
                </form>
            </div>
        </div>
    )
}
