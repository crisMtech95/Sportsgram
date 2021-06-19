import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'

export default function MainPage () {
    const sessionUser = useSelector(state => state.session.user)
    if (!sessionUser) return (
        <Redirect to="/explore"/>
    )
    return (
        <div>Post will go here</div>
    )
}
