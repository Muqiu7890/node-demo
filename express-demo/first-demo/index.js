const express = require('express')

//1.创建httpServer服务器

const app = express()

//2。当服务器受到get请求时执行回调函数
app.get('/',function (req,res) {
    //获取查询字符串参数
    //console.log(res.query)
    res.send("hell world")
})

//设置公共目录
//当以/pubilc/开头(标识)的时候 去./public/ 目录中找对应资源
app.use('/public/',express.static('./public/'))
// app.use(express.static('./public/'))  第一个参数默认为 ‘/’ 127.0.0.1:3000/main.js
// app.use('/a/',express.static('./public/')) 127.0.0.1:3000/a/main.js

app.get('/about',function (req,res) {
    res.send(`<p>hello experss</p>`)
})


//3.监听端口
app.listen(3000,function () {
    console.log('app running at port 3000')
})