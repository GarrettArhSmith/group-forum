import React, {useState, useEffect} from 'react';
import axios from "axios"
import PostForm from '../PostForm'
import Post from '../Post'

function Music(props) {
    const [musicComments, setMusicComments] = useState([])

    const getMusicComments = () => {
        axios.get("/music")
        .then(res => setMusicComments(res.data))
        .catch(err => console.log(err))
    }
    
    const addMusicComment = (savedComment) => {
        axios.post("/music", savedComment)
        .then(res => {
            setMusicComments(prevComments => [...prevComments, res.data])
        })
        .catch(err => console.log(err))
    }

    const deleteMusicComment = (commentId) => {
        axios.delete(`/music/${commentId}`)
        .then(res => {setMusicComments(prevComments => prevComments.filter(comment => comment._id !== commentId))})
        .catch(err => console.log(err))
    }

    const editMusicComment = (updatedComment, commentId) => {
        axios.put(`/music/${commentId}`, updatedComment)
          .then(res => {
            setMusicComments(prevComments => prevComments.map(comment => comment._id !== commentId ? comment : res.data))
          })
          .catch(err => console.log(err.response.data.errMsg))
      }
    
    useEffect(() => {
        getMusicComments()
    }, [])

    return (
        <div className="music">
            <div className="header">
                <h1>Music</h1>

                <PostForm 
                    submit={addMusicComment}
                    btnText="POST" />

                <PostForm topic="music" />

            </div>
            <div className="labels">
                <p className="title">Title</p>
                <p className="replies">Replies</p>
                <p className="date">Post Date</p>
            </div>
            { musicComments.map(musicComment => 
                <Post 
                {...musicComment} 
                key={musicComment._id}
                deleteComment={deleteMusicComment} 
                editComment={editMusicComment}
                />)}
        </div>
    );
}

export default Music;