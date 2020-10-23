
import React, {useState} from 'react';
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
        setValue({topic: props.topic, title: "", body: ""})
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
