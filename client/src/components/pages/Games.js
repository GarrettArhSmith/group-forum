import React, {useState, useEffect} from 'react';
import axios from "axios"
import PostForm from '../PostForm'
import Post from '../Post'

function Games(props) {
  const [gameComments, setGameComments] = useState([])
  
    //get comments
  const getGameComments =() => {
    axios.get("/games")
    .then(res => setGameComments(res.data))
    .catch(err => console.log(err))
  }
  
  //add comments
  const addGameComment = (savedComment) => {
    axios.post("/games", savedComment)
      .then(res => {
        setGameComments(prevComments => [...prevComments, res.data])
      })
      .catch(err => console.log(err))
  }
  
  const deleteGameComment = (commentId) => {
    axios.delete(`/games/${commentId}`)
      .then(res => {setGameComments(prevComments => prevComments.filter(comment => comment._id !== commentId))})
      .catch(err => console.log(err.response.data.errMsg))
  }

  const editGameComment = (updatedComment, commentId) => {
    axios.put(`/games/${commentId}`, updatedComment)
      .then(res => {
        setGameComments(prevComments => prevComments.map(comment => comment._id !== commentId ? comment : res.data))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  
  useEffect(() => {
    getGameComments()
  }, [])

    return (
        <div className="games">
            <div className="header">
                <h1>Games</h1>

                <PostForm 
                  submit={addGameComment}
                  btnText="POST" />

            </div>
            <div className="labels">
                <p className="title">Title</p>
                <p className="replies">Replies</p>
                <p className="date">Post Date</p>
            </div>
            { gameComments.map(gameComment => 
                <Post 
                    {...gameComment}
                    deleteComment={deleteGameComment}
                    submit={editGameComment}
                    editComment={editGameComment}
                    key={gameComment._id} />)}
        </div>
    );
}

export default Games;
