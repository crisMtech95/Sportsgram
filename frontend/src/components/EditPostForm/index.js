import "./EditPostForm.css"
import { useState } from "react"
import { editPost } from '../../store/images'
import { useDispatch, useSelector } from "react-redux"


export default function EditPostForm ({img}) {
    const sessionUser = useSelector(state => state.session.user)
    const [imageUrl, setImageUrl] = useState("")
    const [content, setContent] = useState("")
    const [sport, setSport] = useState("")
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
         dispatch(editPost({ userId: sessionUser.id, imageUrl, content, sport, id: img.id}));
                    // .catch(async (res) => {
                    // const data = await res.json()
                    // if (data && data.errors) setErrors(data.errors)
        // })

    }

    return (
            <div className="mainEdit__container">
                <form onSubmit={onSubmit} className="edit__form">
                    <ul>
                        {errors.map((err, i) => <li key={i}>{err}</li>)}
                    </ul>
                    <div className="editPost__labels">
                        <label /> Image Url
                    </div>
                        <input className="edit__input"
                        type="text"
                        required
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                        />
                    <div className="editPost__labels">
                        <label /> content
                    </div>
                        <textarea className="edit__textarea"
                        type="text"
                        required
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        />
                        <div className="editPost__labels">
                            <label /> sport/title
                        </div>
                        <input className="edit__input"
                        type="text"
                        required
                        value={sport}
                        onChange={e => setSport(e.target.value)}
                        />
                        <div className="edit__btndiv">
                    <button type="submit" className="edit__btn">Edit Post</button>
                        </div>
                </form>
            </div>
    )
}
