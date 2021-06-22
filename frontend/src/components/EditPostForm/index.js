import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Redirect, useHistory } from "react-router-dom"
import  { editPost } from '../../store/images'

export default function EditPostForm ({img}) {
    const sessionUser = useSelector(state => state.session.user)
    const [imageUrl, setImageUrl] = useState("")
    const [content, setContent] = useState("")
    const [sport, setSport] = useState("")
    const [newImg, setnewImg] = useState("")
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch()
    const history = useHistory();
    const onSubmit = (e) => {
        e.preventDefault()
         dispatch(editPost({ userId: sessionUser.id, imageUrl, content, sport, id: img.id}));
                    // .catch(async (res) => {
                    // const data = await res.json()
                    // if (data && data.errors) setErrors(data.errors)
        // })
        history.push("/")
    }
    if (!sessionUser) return <Redirect to="/login"/>

    return (
            <div className="form_container">
                <form onSubmit={onSubmit} className="signup">
                    <ul>
                        {errors.map((err, i) => <li key={i}>{err}</li>)}
                    </ul>
                    <label /> Image Url
                        <input className="signup_input"
                        type="text"
                        required
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                        />
                    <label /> content
                        <textarea className="signup_input"
                        type="text"
                        required
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        />
                    <label /> sport/title
                        <input className="signup_input"
                        type="text"
                        required
                        value={sport}
                        onChange={e => setSport(e.target.value)}
                        />
                    <button type="submit" className="signup_btn">Edit Post</button>
                </form>
            </div>
    )
}
