const express = require('express')
const path = require('path')
var session = require('express-session')
const Router = require('./router')
var bodyParser = require('body-parser')

const app = express()

app.use('/public/',express.static(path.join(__dirname,'./public')))
app.use('/node_modules/',express.static(path.join(__dirname,'./node_modules/')))

app.engine('html', require('express-art-template'));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    // 配置加密字符串，它会在原有加密基础之上和这个字符串拼起来去加密
    // 目的是为了增加安全性，防止客户端恶意伪造
    secret: 'keyboard cat',
    resave: false,
    // 无论你是否使用 Session ，我都默认直接给你分配一把钥匙
    saveUninitialized: true
}))

//路由挂载到app上
app.use(Router)

app.listen(3000,function () {
    console.log('running...')
})

// console.log(__dirname)
// console.log(__filename)
