import "./Post.css"
import { delPost, editPost } from '../../store/images'
import { useDispatch, useSelector } from "react-redux"

export default function Post ({ img }) {
    const sessionUser = useSelector(state => state.session.user)
    const dispatch = useDispatch();


    const delImg = (e) => {
        e.preventDefault()
        dispatch(delPost(img))
    }
    const editImg = (e) => {
        e.preventDefault()
        // dispatch(editPost(img))
    }

    return (
        <div className="singlePost">
            <div className="post__top">
                <p>{img.userId}</p>
                {sessionUser.id === img.userId && <div>
                    <button type="submit" onClick={delImg}>Delete</button>
                    <button type="submit" onClick={editImg}>Edit</button>
                    </div>
                    }

            </div>
            <img src={img.imageUrl} className="post__image"/>
            <div className="post__sportTitle">
                <h4>{img.sport}</h4>
            </div>
            <div className="post__content">
                <p>{img.content}</p>
            </div>
            <div className="post__comment">
                <form className="post__commentForm">
                    <img />
                    <textarea placeholder="Add a Comment"/>
                    <button type="submit">Post</button>
                </form>
            </div>
        </div>
    )
}
