/*
 * app.js 入口模块
 * 职责：
 *   创建服务
 *   做一些服务相关配置
 *     模板引擎
 *     body-parser 解析表单 post 请求体
 *     提供静态资源服务
 *   挂载路由
 *   监听端口启动服务
 */
const express = require('express')
const router = require('./router')
const bodyParser = require('body-parser')

const app = new express()

app.use('/node_modules/',express.static('./node_modules/'))
app.use('/public/',express.static('./public/'))

app.engine('html',require('express-art-template'))

//配置模版引擎和 body-parser 一定要在 app.use(router) 之前
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//router 挂载到app服务上
app.use(router)

app.listen(3000,function () {
    console.log('running at port 3000')
})

module.exports = app