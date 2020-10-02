const mongoose = require("mongoose")
const Schema = mongoose.Schema

const musicCommentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("MusicComment", musicCommentSchema)