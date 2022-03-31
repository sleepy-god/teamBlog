const mongoose = require('mongoose')

var articleSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    article: {type: String, required: true},
    author: {type: String, required: true},
    title: {type: String, required: true},
    date: {type: String, required: true},
    cate: {type: String, required: true},
    tags: {type: Array, required: true},
    brief: {type: String, required: true},
    imgUrl: {type: String, required: true},
    type: {type: String, required: true}
})

var Article = mongoose.model('article', articleSchema)

module.exports = Article