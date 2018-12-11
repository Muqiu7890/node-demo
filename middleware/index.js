var express = require('express')

const app = express()

app.use(function (req,res,next) {
    console.log('time ' + Date.now())
    next()
})

app.use(function (req,res,next) {
    console.log("Q")
    next()
})

app.use('/',function (req,res) {
    console.log(req.method)
    res.send('index.js')
})

app.listen(3000,function () {
    console.log('running at ...')
})