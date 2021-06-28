import './BigSinglePost.css'
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux'
import { getSinglePost } from '../../store/images'
import EditComment from '../EditComment'
import { delCom, getImageComments } from '../../store/comments'

export default function BigSinglePost () {
    const sessionUser = useSelector(state => state.session.user)
    const allImages = useSelector((state) => state.images)
    const allComments = useSelector((state) => Object.values(state.comments))
    const { id } = useParams()
    const image = allImages[id];
    const sillyStr = "Oops something went wrong!, please try again when we have a follow feature"
    // const allComments = useSelector(state => state.images[id]?.comments)
    // console.log("YEAH THAT RIGHT",allComments)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSinglePost(id))
        dispatch(getImageComments(id))
    }, [dispatch, id])

    // useEffect(() => {
    //      dispatch(getComments(allComments))
    // }, [dispatch, allComments])

    return (
        <div className="singlePost__mainContainer">
            <div className="singleImage__container">
                <div className="singlePost__image">
                    <img src={image?.imageUrl} alt="You'll never know" className="singlePost__imgTag"/>
                </div>
            </div>
            <div className="singlePost__userInfo">
                <div className="singpost__userLogo"></div>
                <a href={`/profile/${image?.userId}`}  className="singpost__userATag">
                    <h1 className="singpost__username">{image?.User?.username}</h1>
                </a>

                <div className="singpost__followBtn">
                    <button className="singpost__followBtn"
                        onClick={() => alert(sillyStr)}
                    >+   Follow</button>
                </div>
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
                    {allComments?.map(comment => (
                        <div key={comment.id} className="singlePost__comment">
                            <h4>{comment?.User?.username}</h4>
                            <p>{comment?.comment}</p>
                            {sessionUser.id === comment.userId &&
                            <div>
                                <button type="submit" onClick={() => dispatch(delCom(comment.id))}>Delete</button>
                                <EditComment co={comment}/>
                            </div>
                            }

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )


}
