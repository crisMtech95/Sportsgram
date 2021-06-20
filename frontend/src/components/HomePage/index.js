import './HomePage.css'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react'

export default function HomePage () {
    const sessionUser = useSelector(state => state.session.user)


    useEffect(() => {
    let image = document.getElementById("homePage__mainContainer")
    const images = ["bcimg1", "bcimg2", "bcimg3", "bcimg4", "bcimg5", "bcimg6", "bcimg7", "bcimg8"]
    setInterval(function(){
        let random = Math.floor(Math.random() * 8);
        image.className = images[random]
    }, 2500);
    }, [])

    if (sessionUser) return (
        <Redirect to="/"/>
    )

    return (
        <div className ="bcimg8" id="homePage__mainContainer">
            <div id="homePage__h1">
                <h1 >Find your inspiration</h1>
            </div>
            <div id="homePage__h2">
                <h2 >Join in the community,
                home to tens of billions of
                photos and 2 million groups </h2>
            </div>
            <div id="homePage__btn">
                <NavLink to="/signup">Start for free</NavLink>
            </div>
        </div>
    )
}
