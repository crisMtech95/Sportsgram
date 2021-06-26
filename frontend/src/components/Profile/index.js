import './Profile.css'
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router"
import { getProfileImages } from '../../store/images'
import { getAlbumsThunk } from '../../store/albums'

export default function Profile () {
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getProfileImages(id))
        dispatch(getAlbumsThunk(id))
    }, [dispatch])


    return (
        <div className="profile__mainContainer">
            <div className="profile__bigContainer">
                <div className="profile__bgContainer"></div>
                <div className="profile__userStatsContainer"></div>
                <div className="profile__mainContentContainer">
                    <div className="profile__contentContainer">

                    </div>
                </div>
            </div>
        </div>
    )
}
