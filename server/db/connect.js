// 1、链接数据库
const mongoose = require('mongoose')

let userName = 'root';
let password = '123456';
let host = 'localhost'; // mongodb地址
let port = '27017'
let dbName = 'blog'

mongoose.connect(`mongodb://${userName}:${password}@${host}:${port}/${dbName}`);

// 添加成功与失败的警告
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("db ok")
});

// scheme 对象

// 创建一个和集合相关的schema对象