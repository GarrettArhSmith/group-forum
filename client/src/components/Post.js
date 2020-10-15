import React from 'react';
import './Post.css';


function Post(props) {
    return (
        <div className="post">
            <p className="title">This is a title</p>
            <p className="replies">5</p>
            <p className="date">10/15/2020</p>
        </div>
    );
}

export default Post;