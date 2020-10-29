const mongoose = require("mongoose")
const Schema = mongoose.Schema

const movieCommentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    user: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("MovieComment", movieCommentSchema)