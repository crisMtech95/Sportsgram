import './Profile.css'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { getProfileImages } from '../../store/images'
import { getAlbumsThunk } from '../../store/albums'

export default function Profile () {
    const [showPhotos, setShowPhotos] = useState("photos");
    const [title, setTitle] = useState("");
    const [sport, setSport] = useState("");
    const sessionUser = useSelector(state => state.session.user)
    const allPhotos = useSelector(state => Object.values(state.images))
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getProfileImages(id))
        dispatch(getAlbumsThunk(id))
    }, [dispatch])

    const onSubmit = (e) => {
        e.preventDefault();

    }
    const openPhotos = () => {
        if (showPhotos === "photos") return;
        setShowPhotos("photos");
      };
    const openAlbums = () => {
        if (showPhotos === "albums") return;
        setShowPhotos("albums");
      };
    const openCreateAlbum = () => {
        if (showPhotos === "createAlbum") return;
        setShowPhotos("createAlbum")
    };

    return (
        <div className="profile__mainContainer">
            <div className="profile__bigContainer">
                <div className="profile__bgContainer"></div>
                <div className="profile__userStatsContainer">
                    <div className="profile__userToggle">
                        <button onClick={openPhotos}>Photos</button>
                        <button onClick={openAlbums}>Albums</button>
                        <button onClick={openCreateAlbum}>Create an Album</button>
                    </div>
                </div>
{/* This is for the photos */}
                {showPhotos === "photos" &&
                    <div className="profile__mainPhotosContainer">
                        <div className="profile__photosContainer">
                            {allPhotos && allPhotos.map(img => (
                                <div key={img.id} className="profile__postImageContainer">
                                    <a href={`/images/${img.id}`}>
                                            <img alt="you'll never know"  src={img.imageUrl} className="profile__postImage"/>
                                    </a>
                                {sessionUser?.id === img.userId &&
                                    <button className="profile__AddAlbumBtn">Add to Album</button>
                                }
                                </div>
                            ))}
                        </div>
                    </div>
                }
{/* This is for the Albums */}
                {showPhotos === "albums" &&
                    <div className="profile__mainAlbumsContainer">
                        <div className="profile__albumsContainer">

                        </div>
                    </div>
                }
{/* This is for the Crate Albums form */}
                {showPhotos === "createAlbum" &&
                    <div className="profile__mainCreateAlbumContainer">
                        <div className="profile__createAlbumContainer">
                            <form onSubmit={onSubmit} className="">
                            {/* <ul>
                                {errors.map((err, i) => <li key={i}>{err}</li>)}
                            </ul> */}
                            <label /> Title
                                <textarea className=""
                                type="text"
                                required
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                />
                            <label /> Sport
                                <input className=""
                                type="text"
                                required
                                value={sport}
                                onChange={e => setSport(e.target.value)}
                                />
                            <button type="submit" className="">Add Album</button>
                            </form>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
