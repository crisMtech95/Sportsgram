import "./Post.css"
import { useState, useEffect } from "react"
import { Redirect, useHistory } from "react-router-dom"
import { delPost, editPost } from '../../store/images'
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { addComment } from '../../store/comments'

function EditPostForm ({img}) {
    const sessionUser = useSelector(state => state.session.user)
    const [imageUrl, setImageUrl] = useState("")
    const [content, setContent] = useState("")
    const [sport, setSport] = useState("")
    const [newImg, setnewImg] = useState("")
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


export default function Post ({ img }) {
    const sessionUser = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const [comment, setComment] = useState("")
    const history = useHistory()

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);


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
                    <button onClick={openMenu}>
                    <i className="fas fa-ellipsis-v"></i>
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
                <img src={img.imageUrl} className="post__image"/>
                <div className="post__sportTitle">
                    <h4>{img.sport}</h4>
                </div>
            </a>
            <div className="post__content">
                <p>{img.content}</p>
            </div>
            <div className="post__comment">
                    <img />
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
