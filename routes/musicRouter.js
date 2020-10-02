const express = require("express")
const musicRouter = express.Router()
const MusicComment = require("../models/musicComments")

//get all route
musicRouter.get("/", (req, res, next) => {
    MusicComment.find((err, musicComments) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(musicComments)
    })
})

musicRouter.post("/", (req, res, next) => {
    const newMusicComment = new MusicComment(req.body)
    newMusicComment.save((err, savedComment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedComment)
    })
})

musicRouter.delete("/:musicCommentId", (req, res, next) => {
    MusicComment.findOneAndDelete({_id: req.params.musicCommentId}, (err, deletedComment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send("deleted")
    })
})

musicRouter.put("/:musicCommentId", (req, res, next) => {
    MusicComment.findOneAndUpdate(
        {_id: req.params.musicCommentId},
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

module.exports = musicRouter