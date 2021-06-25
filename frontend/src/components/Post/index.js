import "./Post.css"
import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { delPost } from '../../store/images'
import { useDispatch, useSelector } from "react-redux"
// import { NavLink } from "react-router-dom"
import { addComment } from '../../store/comments'
import EditPostForm from '../EditPostForm'

export default function Post ({ img }) {
    const sessionUser = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const [comment, setComment] = useState("")
    const history = useHistory()

  const openMenu = () => {
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

    const delImg = (e) => {
        e.preventDefault()
        dispatch(delPost(img))
    }

    const commentSubmit = (e) => {
        e.preventDefault();
        dispatch(addComment({comment, imageId: img.id, userId: sessionUser.id}))
        history.push(`/images/${img.id}`)
    }


    return (
        <div className="singlePost">
            <div className="post__top">
                <p>{img?.User?.username}</p>
                {sessionUser.id === img.userId &&
                <div>
                    <button onClick={!showMenu ? openMenu : closeMenu }>
                    <i alt="you'll never know" className="fas fa-ellipsis-v"></i>
                    </button>
                    {showMenu && (
                        <div className="post__editDelbtns">
                            <button type="submit" onClick={delImg} className="post__del">Delete</button>
                            <EditPostForm img={img}/>
                        </div>
                    )}
                </div>
                    }
            </div>
            <a href={`/images/${img.id}`}>
                <img alt="you'll never know"  src={img.imageUrl} className="post__image"/>
                <div className="post__sportTitle">
                    <h4>{img.sport}</h4>
                </div>
            </a>
            <div className="post__content">
                <p>{img.content}</p>
            </div>
            <div className="post__comment">
                    <div className="post__commentSmileyContainer">
                        <div className="post__commentSmiley"/>
                    </div>
                <form className="post__commentForm" onSubmit={commentSubmit}>
                    <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Add a Comment"
                    />
                    <button type="submit">Post</button>
                </form>
            </div>
        </div>
    )
}
