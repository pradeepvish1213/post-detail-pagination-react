import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Pagination from "./Pagination";
import PostList from "./PostList";
import PostDetail from "./PostDetails";

const App = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('https://jsonplaceholder.org/posts');
            setPosts(res.data);
        };

        fetchPosts();
    }, []);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const selectPost = (post) => setSelectedPost(post);

    const backToList = () => setSelectedPost(null);

    return (
        <div className="container">
            <h1 className="my-3">Posts</h1>
            {selectedPost ? (
                <PostDetail post={selectedPost} backToList={backToList}/>
            ) : (
                <>
                    <PostList posts={currentPosts} selectPost={selectPost}/>
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={posts.length}
                        paginate={paginate}
                        currentPage={currentPage}
                    />
                </>
            )}
        </div>
    );
};

export default App;
