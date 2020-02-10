const mongoose = require('mongoose')

const Post = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Posts', Post)