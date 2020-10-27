const mongoose = require("mongoose")
const Schema = mongoose.Schema

const movieCommentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    user: {
        type: String
    }
})

module.exports = mongoose.model("MovieComment", movieCommentSchema)