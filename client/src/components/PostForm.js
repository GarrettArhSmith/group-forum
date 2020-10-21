import React, {useState} from 'react';
import './PostForm.css'

//removed input for title
function PostForm(props) {
    const initInputs = {comment: ""}
    const [inputs, setInputs] = useState(initInputs)

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.submit(inputs)
        setInputs(initInputs)
    }
    return (
        <form onSubmit={handleSubmit}>
            {/* <input type="text" name="title" id="title" placeholder="Title..."/> */}
            <textarea name="comment" id="body" 
                value={inputs.comment} 
                onChange={handleChange} 
                placeholder="Start writing your post..."/>
            <button>POST</button>
        </form>
    );
}

export default PostForm;