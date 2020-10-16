import React from 'react';
import PostForm from '../PostForm'
import Post from '../Post'

function Music(props) {
    return (
        <div className="music">
            <div className="header">
                <h1>Music</h1>
                <PostForm topic="music" />
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

export default Music;