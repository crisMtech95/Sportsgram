import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router"
import { getProfileImages } from '../../store/images'

export default function Profile () {
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getProfileImages(id))
    }, [dispatch])

    return (
        <div>
            <h1>RIGHTLY CENTER</h1>
        </div>
    )
}
