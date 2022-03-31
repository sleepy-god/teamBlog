const express = require('express')
const router = express.Router()
const Article = require('../db/model/articleModel')
const User = require('../db/model/userModel')

router.post('/addArticle', (req, res) => {
    let {username, type, content, title, date, cate, tags, brief, imgUrl} = req.body;
    tags = req.body.tags
    Article.find()
    .then((data) => {
        let id
        if(data.length > 0) {
            id = data[data.length -1].id + 1;
        } else {
            id = 1;
        }
        // tags = tags.split(',')
        Article.insertMany({
            author: username,
            id: id,
            article: content,
            title: title,
            date: date,
            cate: cate,
            tags: tags,
            type: type,
            brief: brief,
            imgUrl: imgUrl
        })
    })
    res.send({msg: 'success'})
})

router.post('/getArticles', (req, res) => {
    let {username} = req.body;
    console.log(username)
    let articles = [];
    User.findOne({username})
    .then((data) => {
        if(data.type === 'personal'){
            Article.find({ $and: [
                { $or: [{author: username}, {author: data.team}] }
            ]
        }).then((data) => {
                articles = data;
                res.send({"articles" : data})
            })
        } else {
            Article.find({ $and: [
                { $or: [{author: username}] }
            ]
        }).then((data) => {
                articles = data;
                res.send({"articles" : data})
            })
        }
    })
    .catch((err) => {
        res.status(500).send(err)
    })


})

router.post('/getArticle', (req, res) => {
    let {index} = req.body;
    Article.findOne({id: index})
    .then((data) => {
        res.send(data)
    })
})

router.post('/getCates', (req, res) => {
    let {username} = req.body;
    User.findOne({username})
    .then((data) => {
        let cates = [];
        if(data.type === 'personal'){
            Article.find({ $and: [
                { $or: [{author: username}, {author: data.team}] }
            ]})
            .then((data) => {
                data.forEach(item  => {
                    let index = cates.findIndex(cate => {
                        return cate.name === item.cate
                    })
                    if(index === -1) {
                        let artIds = [];
                        artIds.push(item.id)
                        cates.push({name: item.cate, imgUrl: item.imgUrl, artIds})
                    } else {
                        cates[index].artIds.push(item.id)
                    }
                })
                res.send({'cate' : cates})
            })
        } else {
            Article.find({ $and: [
                { $or: [{author: username}] }
            ]})
            .then((data) => {
                data.forEach(item  => {
                    let index = cates.findIndex(cate => {
                        return cate.name === item.cate
                    })
                    if(index === -1) {
                        let artIds = [];
                        artIds.push(item.id)
                        cates.push({name: item.cate, imgUrl: item.imgUrl, artIds})
                    } else {
                        cates[index].artIds.push(item.id)
                    }
                })
                res.send({'cate' : cates})
            })
        }
    })
})

router.post('/getTags', (req, res) => {
    let {username} = req.body;
    User.findOne({username})
    .then((data) => {
        let tags = [];
        if(data.type === 'personal'){
            Article.find({ $and: [
                { $or: [{author: username}, {author: data.team}] }
            ]})
            .then((data) => {
                data.forEach(item  => {
                    item.tags.forEach(tagItem => {
                        let index = tags.findIndex(tag => {
                            return tag.name === tagItem
                        })
                        if(index === -1) {
                            let artIds = [];
                            artIds.push(item.id)
                            tags.push({name: tagItem, artIds})
                        } else {
                            tags[index].artIds.push(item.id)
                        }
                    })
                })
                res.send({'tags' : tags})
            })
        } else {
            Article.find({ $and: [
                { $or: [{author: username}] }
            ]})
            .then((data) => {
                data.forEach(item  => {
                    item.tags.forEach(tagItem => {
                        let index = tags.findIndex(tag => {
                            return tag.name === tagItem
                        })
                        if(index === -1) {
                            let artIds = [];
                            artIds.push(item.id)
                            tags.push({name: tagItem, artIds})
                        } else {
                            tags[index].artIds.push(item.id)
                        }
                    })
                })
                res.send({'tags' : tags})
            })
        }
    })
})

module.exports = router