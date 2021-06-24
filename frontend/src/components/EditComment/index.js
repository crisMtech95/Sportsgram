import "./EditComment.css"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editComment } from "../../store/comments"


export default function EditComment ({ id }) {
    const sessionUser = useSelector(state => state.session.user)
    const [comment, setComment] = useState("")
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
         dispatch(editComment({comment, id}));
                    // .catch(async (res) => {
                    // const data = await res.json()
                    // if (data && data.errors) setErrors(data.errors)
        // })
    }

    return (
            <div className="mainEditComment__container">
                <form onSubmit={onSubmit} className="editComment__form">
                    <ul>
                        {errors.map((err, i) => <li key={i}>{err}</li>)}
                    </ul>
                    <div className="editPost__labels">
                        <label /> comment
                    </div>
                        <textarea className="edit__textarea"
                        type="text"
                        required
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        />
                    <button type="submit" className="edit__btn">Edit Post</button>
                </form>
            </div>
    )
}
