const PostDetail = ({ post, backToList }) => {
    return (
        <div className="post-detail">
            <img src={post.image} alt={'post'} loading={"lazy"}/>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button className="btn btn-primary" onClick={backToList}>Back to List</button>
        </div>
    );
};

export default PostDetail;