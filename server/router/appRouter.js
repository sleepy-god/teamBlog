const express = require('express')
const router = express.Router()
const App = require('../db/model/appModel')
const moment = require('moment');

router.post('/visit', (req, res) => {
    let count = 0;
    let {username} = req.body
    let now = moment().format('MM-DD')
    App.findOne({username}, (err, doc) => {
        if (!err) {
            let date = doc.date;
            let count = doc.count;
            let index = date.indexOf(now)
            if(index === -1) {
                if(date.length === 5) {
                    date.splice(0,1);
                    count.splice(0,1);
                }
                date.push(now);
                count.push(0)
            } else {
                count[index] = count[index] + 1;
            }
            App.updateOne({username}, {
                    $set: {
                        date: date,
                        count: count
                    }
                })
                .then((data) => {
                    res.send({
                        'count': count
                    })
                })
        } else {
            res.status(500).send('服务器错误')
            console.log(err)
        }
    })
})

router.post('/getVisit', (req, res) => {
    let {username} = req.body;
    App.findOne({username}, (err, doc) => {
        if (!err) {
            res.send({
                'date': doc.date,
                'count': doc.count
            })
        } else {
            res.send({err: 0})
        }
    })
})

module.exports = router