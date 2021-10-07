import './Profile.css'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { getProfileImages, addImgToAlbum } from '../../store/images'
import { getAlbumsThunk, createAlbumsThunk } from '../../store/albums'

export default function Profile () {
    const sessionUser = useSelector(state => state.session.user)
    const allPhotos = useSelector(state => Object.values(state.images))
    const allAlbums = useSelector(state => Object.values(state.albums))
    const [showPhotos, setShowPhotos] = useState("photos");
    const [showAddToAlbum, setShowAddToAlbum] = useState(false);
    const [title, setTitle] = useState("");
    const [sport, setSport] = useState("");
    const [album, setAlbum] = useState();
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getProfileImages(id))
        dispatch(getAlbumsThunk(id))
    }, [dispatch])

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createAlbumsThunk({title, sport, userId: sessionUser.id}))
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
                        {sessionUser?.id === +id &&
                        <button onClick={openCreateAlbum}>Create an Album</button>
                        }
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
                                {sessionUser?.id === img.userId && img.albumId === null &&
                                    <div>
                                        <button onClick={() => setShowAddToAlbum(!showAddToAlbum)}
                                            className="profile__AddAlbumBtn">
                                            Add to Album
                                        </button>
                                        {showAddToAlbum === true &&
                                            <div className="profile__AddToAlbumFormDiv">
                                                <form onSubmit={(e) => {
                                                e.preventDefault()
                                                return dispatch(addImgToAlbum({id: img.id, albumId: album}))
                                            }} className="profile__AddToAlbumForm">
                                                    <select value={album} onChange={(e) =>
                                                        setAlbum(e.target.value)
                                                        }>
                                                        {allAlbums?.map(album => (
                                                                <option key={album.id} value={album.id}>{album.title}</option>
                                                        ))}
                                                    </select>
                                                    <button type="submit">Add</button>
                                                </form>
                                            </div>
                                        }
                                    </div>

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
                        <div className="profile__CollectionsTitle">
                            <h1>Collections</h1>
                        </div>
                            {allAlbums && allAlbums.map(alb => (
                                <div key={alb.id} className="profile__singleAlbum">
                                    <div className="profile__singleAlbumTitleDiv">
                                        <p className="profile__singleAlbumTitle">{alb.title}</p>
                                    </div>
                                    <div className="profile__singleAlbumImgDiv">
                                        <img src={alb?.images[0]?.imageUrl} className="profile__singleAlbumImg"></img>
                                    </div>
                                    <div className="profile__singleAlbumImgDiv">
                                        <img src={alb?.images[1]?.imageUrl} className="profile__singleAlbumImg"></img>
                                    </div>
                                    <div className="profile__singleAlbumImgDiv">
                                        <img src={alb?.images[2]?.imageUrl} className="profile__singleAlbumImg"></img>
                                    </div>
                                    <div className="profile__singleAlbumImgDiv">
                                        <img src={alb?.images[3]?.imageUrl} className="profile__singleAlbumImg"></img>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                }
{/* This is for the Crate Albums form */}
                {showPhotos === "createAlbum" &&
                    <div className="profile__mainCreateAlbumContainer">
                        <div className="form_container">
                            <form onSubmit={onSubmit} className="signup">
                                {/* <ul>
                                    {errors.map((err, i) => <li key={i}>{err}</li>)}
                                </ul> */}
                                    <label /> Title
                                        <input className=""
                                        type="text"
                                        required
                                        value={title}
                                        onChange={e => setTitle(e.target.value)}
                                        />
                                    <label /> Sport
                                        <textarea className="signup_input"
                                        type="text"
                                        required
                                        value={sport}
                                        onChange={e => setSport(e.target.value)}
                                        />
                                    <button type="submit" className="signup_btn">Add Album</button>
                            </form>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
