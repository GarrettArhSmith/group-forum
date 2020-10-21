import React, {useState} from "react"
import axios from "axios"

const CommentContext = React.createContext()

function CommentContextProvider(props){
    const [comments, setComments] = useState([])

    const getComments =(endpoint) => {
        axios.get(`/${endpoint}`)
        .then(res => setComments(res.data))
        .catch(err => console.log(err))
    }
      
      //add comments
    const addComment = (endpoint, savedComment) => {
    axios.post(`/${endpoint}`, savedComment)
        .then(res => {
        setComments(prevComments => [...prevComments, res.data])
        })
        .catch(err => console.log(err))
    }
      
    const deleteComment = (endpoint, commentId) => {
    axios.delete(`/${endpoint}/${commentId}`)
        .then(res => {setComments(prevComments => prevComments.filter(comment => comment._id !== commentId))})
        .catch(err => console.log(err.response.data.errMsg))
    
    }
    return(
        <CommentContext.Provider value={{comments, getComments, addComment, deleteComment}}>
            {props.children}
        </CommentContext.Provider>
    )
}



export {CommentContextProvider, CommentContext}