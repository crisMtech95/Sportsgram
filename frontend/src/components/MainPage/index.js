import './MainPage.css'
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'


export default function MainPage () {
    const sessionUser = useSelector(state => state.session.user)
    if (!sessionUser) return (
        <Redirect to="/explore"/>
    )
    return (
        <div className="bigContainer">
            <h2>Post will go here</h2>
            <button >Make a post</button>
            <div className="postContainer">
                {/* post.map(post) */}
            </div>
        </div>
    )
}
