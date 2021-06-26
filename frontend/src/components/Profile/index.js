import './Profile.css'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { getProfileImages } from '../../store/images'
import { getAlbumsThunk } from '../../store/albums'

export default function Profile () {
    const [showPhotos, setShowPhotos] = useState("photos");
    const allPhotos = useSelector(state => Object.values(state.images))
    const dispatch = useDispatch()
    const { id } = useParams()


    useEffect(() => {
        dispatch(getProfileImages(id))
        dispatch(getAlbumsThunk(id))
    }, [dispatch])

    const openPhotos = () => {
        if (showPhotos === "photos") return;
        setShowPhotos("photos");
      };
    const openAlbums = () => {
        if (showPhotos === "albums") return;
        setShowPhotos("albums");
      };

    return (
        <div className="profile__mainContainer">
            <div className="profile__bigContainer">
                <div className="profile__bgContainer"></div>
                <div className="profile__userStatsContainer">
                    <div className="profile__userToggle">
                        <button onClick={openPhotos}>Photos</button>
                        <button onClick={openAlbums}>Albums</button>
                    </div>
                </div>
                {showPhotos === "photos" &&
                    <div className="profile__mainPhotosContainer">
                        <div className="profile__photosContainer">
                            {allPhotos && allPhotos.map(img => (
                                <div key={img.id} className="profile__postImageContainer">
                                    <a href={`/images/${img.id}`}>
                                            <img alt="you'll never know"  src={img.imageUrl} className="profile__postImage"/>
                                            <button className="profile__AddAlbumBtn">Add to Album</button>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                }
                {showPhotos === "albums" &&
                    <div className="profile__mainAlbumsContainer">
                        <div className="profile__albumsContainer">

                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
