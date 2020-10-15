import React from 'react';
import './PostForm.css'

function PostForm(props) {
    return (
        <form>
            <input type="text" name="title" id="title" placeholder="Title..."/>
            <textarea name="body" id="body" placeholder="Start writing your post..."/>
            <button>POST</button>
        </form>
    );
}

export default PostForm;