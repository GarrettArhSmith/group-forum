
import React, {useState} from 'react';
// import PostForm from "./PostForm"
import './Post.css';


function Post(props) {
    const {comment, _id} = props
    const [onEdit, setOnEdit] = useState(false)
    const [editValue, setEditValue] = useState({comment})

    const handleOnEdit = () => {
        setOnEdit(true)
    }

    const handleChange = (e) => {
        setEditValue(e.target.value)
    }

    const handleSave = () => {
        setOnEdit(false)
        props.submit(editValue,_id)
        console.log(editValue)
    }

    return (
        <div className="post">
            { !onEdit ? 
                <>
                    <p className="title">{comment}</p>
                    <button className="replies" onClick={() => props.deleteComment(_id)}>X</button>
                    <button className="editbtn" onClick={handleOnEdit}>edit</button>
                </>
            :
                <>
                    <input 
                        type="text" 
                        id="editValue"
                        value={editValue.comment}
                        name="editValue"
                        onChange={handleChange} />
                    <button onClick={handleSave}>SAVE</button>
                    <button onClick={() => setOnEdit(prevOnEdit => !prevOnEdit)}>close</button>
                </>
            }
            
            {/* <p className="date">10/15/2020</p> */}
        </div>
    );
}

export default Post;