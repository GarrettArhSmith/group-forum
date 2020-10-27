
import React, {useState} from 'react';
import './Post.css';
import PostForm from './PostForm';


function Post(props) {
    const {comment, _id, date} = props
    const [onEdit, setOnEdit] = useState(false)

    const handleOnEdit = () => {
        setOnEdit(true)
    }

    return (
        <div className="post">
            { !onEdit ? 
                <>
                    <p className="title">{comment}</p>
                    <button className="replies" onClick={() => props.deleteComment(_id)}>X</button>
                    <button className="editbtn" onClick={handleOnEdit}>edit</button>
                    <p>{date}</p>
                </>
            :
                <>
                    <PostForm
                        comment={comment}
                        btnText="submit edit"
                        _id={_id}
                        submit={props.editComment}
                        edit={() => setOnEdit(prevOnEdit => !prevOnEdit)}  />
                    <button onClick={() => setOnEdit(prevOnEdit => !prevOnEdit)}>close</button>
                </>
            }
            
            {/* <p className="date">10/15/2020</p> */}
        </div>
    );
}

export default Post;