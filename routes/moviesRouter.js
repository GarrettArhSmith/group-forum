const express = require("express")
const moviesRouter = express.Router()
const MovieComment = require("../models/movieComments")

//get all route
moviesRouter.get("/", (req, res, next) => {
    MovieComment.find((err, comments) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})

moviesRouter.post("/", (req, res, next) => {
    const newMovieComment = new MovieComment(req.body)
    newMovieComment.save((err, savedComment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedComment)
    })
})

moviesRouter.delete("/:movieCommentId", (req, res, next) => {
    MovieComment.findOneAndDelete({_id: req.params.movieCommentId}, (err, deletedComment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send("deleted")
    })
})

moviesRouter.put("/:movieCommentId", (req, res, next) => {
    MovieComment.findOneAndUpdate(
        {_id: req.params.movieCommentId},
        req.body,
        {new: true},
        (err, updatedComment) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedComment)
        }
    )
})

module.exports = moviesRouter