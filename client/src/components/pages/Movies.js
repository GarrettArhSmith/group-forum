import React from 'react';
import PostForm from '../PostForm'
import Post from '../Post'

function Movies(props) {
    return (
        <div className="movies">
            <div className="header">
                <h1>Movies</h1>
                <PostForm />
            </div>
            <div className="labels">
                <p className="title">Title</p>
                <p className="replies">Replies</p>
                <p className="date">Post Date</p>
            </div>
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Movies;