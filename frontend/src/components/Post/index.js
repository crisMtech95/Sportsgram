import "./Post.css"
import { useState } from "react"
import { delPost, editPost } from '../../store/images'
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

export default function Post ({ img }) {
    const sessionUser = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    const [showForm, setForm] = useState(false)
    


    const delImg = (e) => {
        e.preventDefault()
        dispatch(delPost(img))
    }


    return (
        <div className="singlePost">
            <div className="post__top">
                <p>{img.userId}</p>
                {sessionUser.id === img.userId &&
                    <div class="post__editDelbtns">
                        <button type="submit" onClick={delImg}>Delete</button>
                        <NavLink to="/editPost" img={img}>Edit</NavLink>
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
