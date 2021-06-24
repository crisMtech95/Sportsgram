import './BigSinglePost.css'
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux'
import { getSinglePost } from '../../store/images'

export default function BigSinglePost () {
    const sessionUser = useSelector(state => state.session.user)
    const allImages = useSelector((state) => Object.values(state.images))
    const image = allImages[0];
    const { id } = useParams()
    const dispatch = useDispatch();
    // console.log(image)

    useEffect(() => {
        dispatch(getSinglePost(id))
    }, [dispatch])

    return (
        <div className="singlePost__mainContainer">
            <div className="singleImage__container">
                <div className="singlePost__image">
                    <img src={image?.imageUrl} className="singlePost__imgTag"/>
                </div>
            </div>
            <div className="singlePost__userInfo">
                <div className="singpost__userLogo"></div>
                <h1 className="singpost__username">{image?.User?.username}</h1>
                <div className="singpost__follow">+ Follow</div>
            </div>
            <div className="singlePost__contentBigContainer">
                <div className="singlePost__contentContainer">
                    <h2 className="singlePost__title">{image?.sport}</h2>
                    <div className="singlePost__content">{image?.content}</div>
                </div>
            </div>
            <div className="singlePost__commentsBigContainer">
                <div className="singlePost__commentsContainer">
                <h3>Comments</h3>
                    {image?.comments?.map(comment => (
                        <div key={comment.id} className="singlePost__comment">
                            <p>{comment?.comment}</p>
                            <button>Delete</button>
                            <button>Edit</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )


}
