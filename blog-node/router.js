const express = require('express')
const User = require('./models/user')
const md5 = require('blueimp-md5')

const router = express.Router()

router.get('/',function (req,res) {
    res.render('index.html',{
        user: req.session.user
    })
})

router.get('/login',function (req,res) {
    res.render('login.html')
})

router.post('/login',function (req,res) {
    //1.拿到请求数据
    //console.log(req.body)
    var body = req.body
    body.password = md5(md5(body.password))
    //console.log(body.password)
    User.findOne({
        email: body.email,
        password: body.password
    },function (err,user) {
        if(err) {
            return res.status(500).json({
                err_code: 500,
                message: 'server error'
            })
        }
        if(!user) {
            return res.status(200).json({
                err_code: 1,
                message: 'email or password error'
            })
        }

        req.session.user = user

        res.status(200).json({
            err_code:  0,
            message: 'login success'
        })

     })

})

router.get('/register',function (req,res) {
    res.render('register.html')
})

router.post('/register',function (req,res) {
    //1.拿到请求数据
    //console.log(req.body)
    const body = req.body
    //2.数据处理 若用户已存在 不允许注册 若不存在 允许注册
    User.findOne({
        $or: [
            {
                email:body.email
            },
            {
                nickname: body.nickname
            }
        ]
    },function (err,data) {
        if(err) {
            return res.status(500).json({
                success: false,
                message: '服务端错误'
            })
        }
        if(data) {
            return res.status(200).json({
                err_code: 1,
                message: 'email or nickname already exist.'
            })
        }

        body.password = md5(md5(body.password))
        //不存在 注册
        new User(body).save(function (err,user) {
            if(err) {
                return res.status(500).json({
                    err_code: 500,
                    message: 'server error.'
                })
            }

            //注册成功 使用session记录用户登陆状态
            req.session.user = user

                 res.status(200).json({
                    err_code:  0,
                    message: 'register success'
                })

        })
    })
})

router.get('/logout',function (req,res) {
    //清除登陆状态
    req.session.user = null
    //重定向
    res.redirect('/')
})




module.exports = router