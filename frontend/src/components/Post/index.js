import "./Post.css"

export default function Post ({ img }) {
    return (
        <div className="singlePost">
            <p>{img.userId}</p>
            <img src={img.imageUrl} className="post__image"/>
            <h4>{img.sport}</h4>
            <p>{img.content}</p>
        </div>
    )
}
