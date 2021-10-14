import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from '../Post';

export default function Search() {
    const dispatch = useDispatch()
    
    // const sessionUser = useSelector(state => state.session.user)

    // if (sessionUser) return (
    //     <Redirect to="/"/>
    // )
    const allImages = useSelector(state => Object.values(state.search))


    useEffect(() => {

    }, [])

    return (
        <div className="search__mainContainer">
            <div className="search__container">
                {allImages && allImages.map(img => (
                    <Post key={img.id} img={img}/>
                ))}
            </div>
        </div>
    )
}
