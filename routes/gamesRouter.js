const express = require("express")
const gamesRouter = express.Router()
const GameComment = require("../models/gameComments")

//get all route
gamesRouter.get("/", (req, res, next) => {
    GameComment.find((err, comments) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})

gamesRouter.post("/", (req, res, next) => {
    const newGameComment = new GameComment(req.body)
    newGameComment.save((err, savedComment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedComment)
    })
})

gamesRouter.delete("/:gameCommentId", (req, res, next) => {
    GameComment.findOneAndDelete({_id: req.params.gameCommentId}, (err, deletedComment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send("deleted")
    })
})

gamesRouter.put("/:gameCommentId", (req, res, next) => {
    GameComment.findOneAndUpdate(
        {_id: req.params.gameCommentId},
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

module.exports = gamesRouter