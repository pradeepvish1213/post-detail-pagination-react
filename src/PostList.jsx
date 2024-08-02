import React from "react";

const PostList = ({posts, selectPost}) => {
    return (
        <ul className="list-group mb-4">
            {posts.map(post => (
                <li key={post.id} className="list-group-item cursor-pointer" onClick={() => selectPost(post)}>
                    <div className={'content-center'}>
                        <img src={post.thumbnail} alt={'post'} height={50} width={50} loading={"lazy"}/>
                        <span>{post.title}</span>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default PostList;