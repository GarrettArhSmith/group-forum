

import React, { useState } from 'react';

import './PostForm.css'

//removed input for title
function PostForm(props) {

    const initInputs = { comment:props.comment || ""}
    const [inputs, setInputs] = useState(initInputs)

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.submit(inputs, props._id)
        // props.edit()
        setInputs(initInputs)
    }
    return (
        <form onSubmit={handleSubmit}>
            {/* <input type="text" name="title" id="title" placeholder="Title..."/> */}
            <textarea name="comment" id="body" 
                value={inputs.comment} 
                onChange={handleChange} 
                placeholder="Start writing your post..."/>
            <button>{props.btnText}</button>


    );
}

export default PostForm;
