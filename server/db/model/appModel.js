const mongoose = require('mongoose')

var appSchema = new mongoose.Schema({
    count: {type: Array, required: true},
    username: {type: String, required: true},
    date: {type: Array, required: true}
})

var App = mongoose.model('app', appSchema)

module.exports = App