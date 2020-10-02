const mongoose = require("mongoose")
const Schema = mongoose.Schema

const gameCommentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("GameComment", gameCommentSchema)