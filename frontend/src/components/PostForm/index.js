import './PostForm.css'
import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Redirect } from "react-router-dom"
import * as sessionActions from '../../store/session'

export default function PostForm () {
    const sessionUser = useSelector(state => state.session.user)
    const [fullName, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch()

    if (sessionUser) return <Redirect to="/"/>

    const onSubmit = (e) => {
        e.preventDefault()

       
    }

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
                    <button type="submit" className="signup_btn">Sign Up</button>
                </form>
            </div>
        </div>
    )
}
