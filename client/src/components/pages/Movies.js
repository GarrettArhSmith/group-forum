import React, {useState, useEffect} from 'react';
import axios from "axios"
import PostForm from '../PostForm'
import Post from '../Post'

function Movies(props) {
    const [movieComments, setMovieComments] = useState([])
  
    const getMovieComments = () => {
        axios.get("/movies")
        .then(res => setMovieComments((res.data)))
        .catch(err => console.log())
    }
    
    const addMovieComment = (savedComment) => {
        axios.post("/movies", savedComment)
        .then(res => {
            setMovieComments(prevComments => [...prevComments, res.data])
        })
        .catch(err => console.log(err))
    }

    const deleteMovieComment = (commentId) => {
        axios.delete(`/movies/${commentId}`)
        .then(res => {setMovieComments(prevComments => prevComments.filter(comment => comment._id !== commentId))})
        .catch(err => console.log(err))
    }

    const editMovieComment = ( updatedComemnt, commentId) => {
        axios.put(`/movies/${commentId}`, updatedComemnt)
          .then(res => {
            setMovieComments(prevComments => prevComments.map(comment => comment._id !== commentId ? comment : res.data))
          })
          .catch(err => console.log(err.response.data.errMsg))
      }
    
    useEffect(() => {
        getMovieComments()
    }, [])

    return (
        <div className="movies">
            <div className="header">
                <h1>Movies</h1>

                <PostForm 
                    submit={addMovieComment}
                    btnText="POST" />

                <PostForm topic="movies" />

            </div>
            <div className="labels">
                <p className="title">Title</p>
                <p className="replies">Replies</p>
                <p className="date">Post Date</p>
            </div>
            { movieComments.map(movieComment => 
                <Post 
                    {...movieComment}
                    key={movieComment._id}
                    deleteComment={deleteMovieComment}
                    editComment={editMovieComment}
                     />)}
        </div>
    );
}

export default Movies;