const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    username : {type: String, required: true},
    password : {type: String, required: true},
    phone : {type: String, required: true},
    account : {type: String, required: true},
    type: {type: String, required: true},
    article_count: {type: Number, required: true},
    description: {type: String, required: true},
    team: {type: String, required: false}
})

var User = mongoose.model('user', userSchema)

module.exports = User