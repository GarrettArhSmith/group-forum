import React, { useState } from 'react';
import './PostForm.css'

function PostForm(props) {
    const [value, setValue] = useState({
        topic: props.topic,
        title: "",
        body: ""
    })

    function handleChange(e) {
        const { name, value } = e.target
        setValue(prevValue => ({...prevValue, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(value)
        setValue({title: "", body: ""})
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="title" 
                id="title" 
                placeholder="Title..."
                value={value.title}
                onChange={handleChange}
            />
            <textarea 
                name="body" 
                id="body" 
                placeholder="Start writing your post..."
                value={value.body}
                onChange={handleChange}
            />
            <button>POST</button>
        </form>
    );
}

export default PostForm;