import './MainPage.css'
import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getimagesThunk } from '../../store/images'
import Post from '../Post';

export default function MainPage () {
    const sessionUser = useSelector(state => state.session.user)
    const allImages = useSelector((state) => Object.values(state.images))
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getimagesThunk())
    }, [dispatch])

    console.log(allImages)

    if (!sessionUser) return (
        <Redirect to="/explore"/>
    )

    return (
        <div className="bigContainer">
            <h2>Post will go here</h2>
            <button >Make a post</button>
            <div className="postContainer">
                {/* {allImages.map((img) =>
                    <div key={img.id}>
                        <img src={img.imageUrl} />
                    </div>
                )} */}
                {allImages.map(img => (
                    <Post key={img.id} img={img}/>
                ))}
            </div>
        </div>
    )
}
