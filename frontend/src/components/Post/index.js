import "./Post.css"
import { useState } from "react"
import { delPost, editPost } from '../../store/images'
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

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
                    <div className="post__editDelbtns">
                        <button type="submit" onClick={delImg} className="post__del">Delete</button>
                        <EditPostForm img={img}/>
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
