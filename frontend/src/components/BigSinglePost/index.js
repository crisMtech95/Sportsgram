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

    useEffect(() => {
        dispatch(getSinglePost(id))
    }, [dispatch])

    return (
        <div className="SinglePost__mainContainer">
            <h1>Single post goes here</h1>
        </div>
    )


}
