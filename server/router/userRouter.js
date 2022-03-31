const express = require('express')
const router = express.Router()
const User = require('../db/model/userModel')
const App = require('../db/model/appModel')
const Article = require('../db/model/articleModel')
const moment = require('moment');

router.post('/checkName', (req, res) => {
    let {username} = req.body
    User.find({username})
        .then((data) => {
            if(data.length > 0) {
                res.send({state: 0, msg: '用户名已存在'})
            } else {
                res.send({state: 1})
            }
        })
})

router.post('/reg', (req,res)=> {
    // 获取数据
    let {username, password, phone, type, team} = req.body

    if(username && password && phone) {
        if(type === 'team') {
            User.insertMany({
                username: username,
                password: password, 
                phone: phone, 
                account: phone, 
                type: type,
                article_count: 0,
                description: '追出梦想，杨帆起航'})
            .then(() => {
                let date = [];
                let count = [];
                date.push(moment().format('MM-DD'));
                count.push(0)
                App.insertMany({
                    username: username,
                    count: count,
                    date: date
                }).then(() => {
                    res.send({err:0, msg: '注册成功'})
                })
            })
            .catch((err) => {
                res.send({err: -1, msg: '注册失败'})
            })
        } else {
            User.insertMany({
                username: username,
                password: password, 
                phone: phone, 
                account: phone, 
                team: team,
                type: type,
                article_count: 0,
                description: '追出梦想，杨帆起航'})
            .then(() => {
                let date = [];
                let count = [];
                date.push(moment().format('MM-DD'));
                count.push(0)
                App.insertMany({
                    username: username,
                    count: count,
                    date: date
                }).then(() => {
                    res.send({err:0, msg: '注册成功'})
                })
            })
            .catch((err) => {
                res.send({err: -1, msg: '注册失败'})
            })
        }
    } else {
        return res.send({err: -1, msg:'参数错误'})
    } 
    // 数据处理
    // 返回数据
    // res.send('test ok')
})
// 登录接口
router.post('/login', (req, res)=> {
    let {account, password} = req.body
    if(!account && !password) {
        return res.send({err: -1, msg:'参数错误'})
    }
    User.findOne({account, password})
    .then((data) => {
        if(data) {
            res.cookie("user", data.username, {maxAge: 60000000})
            Article.find({author: data.username}).then(re => {
                data.article_count = re.length;
                // console.log(data)
                res.send({err: 0, msg :'登录成功', user: data})
            })
        } else {
            res.send({err: 1,msg :'用户名或密码不正确'}) 
        }
        
    })
    .catch((err) => {
        return res.status(500).send({err: -1, msg:'参数错误'})
    })
})

// 获取当前用户信息
router.post('/getUser', (req, res) => {
    let {username} = req.body
    User.findOne({username})
    .then(data => {
        if(data) {
            Article.find({author: username}).then(re => {
                data.article_count = re.length;
                // console.log(data);
                res.send({err: 0, user: data})
            })
        } else {
            res.send({err: -1,msg :'登录信息过期'}) 
        }
    })
})

module.exports = router