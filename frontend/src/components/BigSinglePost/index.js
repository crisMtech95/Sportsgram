import './BigSinglePost.css'
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux'
import { getSinglePost } from '../../store/images'
import EditComment from '../EditComment'
import { delCom, getComments } from '../../store/comments'

export default function BigSinglePost () {
    const sessionUser = useSelector(state => state.session.user)
    const allImages = useSelector((state) => state.images)
    const { id } = useParams()
    const image = allImages[id];
    // const allComments = useSelector(state => state.images[id]?.comments)
    // console.log("YEAH THAT RIGHT",allComments)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSinglePost(id))
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
                <h1 className="singpost__username">{image?.User?.username}</h1>
                <button id="singpost__followBtn">+ Follow</button>
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
