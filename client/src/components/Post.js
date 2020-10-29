
import React, {useState} from 'react';
import './Post.css';
import PostForm from './PostForm';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';



function Post(props) {
    const {comment, _id, date} = props
    const [onEdit, setOnEdit] = useState(false)

    const handleOnEdit = () => {
        setOnEdit(prevOnEdit => !prevOnEdit)
    }

    return (
        <div className="post">
            { !onEdit ? 
                <>
                    <p className="content">{comment}</p>
                    <p>{date?.substring(0, 10)}</p>
                    <div className="optionsContainer">
                        <button className="deletebtn" onClick={() => props.deleteComment(_id)}><AiOutlineDelete /></button>
                        <button className="editbtn" onClick={handleOnEdit}><AiOutlineEdit /></button>
                    </div>
                </>
            :
                <PostForm
                    comment={comment}
                    btnText="Edit"
                    _id={_id}
                    submit={props.editComment}
                    edit={handleOnEdit}  
                />             
            }
            
            {/* <p className="date">10/15/2020</p> */}
        </div>
    );
}

export default Post;