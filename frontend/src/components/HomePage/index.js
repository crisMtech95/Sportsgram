import './HomePage.css'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { NavLink } from 'react-router-dom';

export default function HomePage () {
    const sessionUser = useSelector(state => state.session.user)

    if (sessionUser) return (
        <Redirect to="/"/>
    )

    return (
        <div className ="homePage__mainContainer bcimg3">
            <div id="homePage__h1">
                <h1 >Find your inspiration</h1>
            </div>
            <div id="homePage__h2">
                <h2 >Join in the community,
                home to tens of billions of
                photos and 2 million groups </h2>
            </div>
            <div id="homePage__btn">
                <NavLink to="/signup">Sign Up</NavLink>
            </div>
        </div>
    )
}
