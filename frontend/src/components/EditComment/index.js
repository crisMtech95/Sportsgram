import "./EditComment.css"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editComment } from "../../store/comments"


export default function EditComment ({ comment }) {
    const sessionUser = useSelector(state => state.session.user)
    const [co, setComment] = useState(comment.comment)
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(comment.id)
         dispatch(editComment({co, id: comment.id}));
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
                        <label /> Comment
                    </div>
                        <textarea className="edit__textarea"
                        type="text"
                        required
                        value={co}
                        onChange={e => setComment(e.target.value)}
                        />
                    <button type="submit" className="edit__btn">Edit Post</button>
                </form>
            </div>
    )
}
