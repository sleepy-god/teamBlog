const express = require('express')
const db = require('./db/connect')
const app = express()
const cors = require("cors")
const cookieParser = require('cookie-parser')

app.use(cookieParser())

app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}))

app.all("/*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next(); // 执行下一个路由
})

const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())
// 路由
const userRouter = require('./router/userRouter')
const appRouter = require('./router/appRouter')
const articleRouter = require('./router/articleRouter')
app.use('/user', userRouter)
app.use('/app', appRouter)
app.use('/article', articleRouter)


app.listen(3000, () => {
    console.log('server start!')
})