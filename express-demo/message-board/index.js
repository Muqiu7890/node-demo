const express = require('express')
var bodyParser = require('body-parser')

const app = new express()

var comments = [{
    name: '张三',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
},
    {
        name: '张三2',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三3',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三4',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三5',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    }
]

// 配置使用art-template 模版引擎
// 第一个参数表示，当渲染以 .art 结尾的文件的时候，使用 art-template 模板引擎
// express-art-template 是专门用来在 Express 中把 art-template 整合到 Express 中
// 虽然外面这里不需要记载 art-template 但是也必须安装
// 原因就在于 express-art-template 依赖了 art-template
app.engine('html', require('express-art-template'));

app.use('/public/',express.static('./public/'))
app.use('/views/',express.static('./views/'))

// Express 为 Response 相应对象提供了一个方法：render
// render 方法默认是不可以使用，但是如果配置了模板引擎就可以使用了
// res.render('html模板名', {模板数据})
// 第一个参数不能写路径，默认会去项目中的 views 目录查找该模板文件
// 也就是说 Express 有一个约定：开发人员把所有的视图文件都放到 views 目录中

// 如果想要修改默认的 views 目录，则可以
// app.set('views', render函数的默认路径)

//配置 bodyParser 用来解析 post 提交请求体
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/',(req,res) => {
    res.render('index.html',{
        comments: comments
    });

})

app.get('/post',(req,res) => {
    res.render('post.html')
})

// app.get('/pinglun',(req,res) => {
//     // console.log(req.query);
//     var comment = req.query
//     comment.dateTime = '2017-9-15'
//     comments.unshift(comment)
//     res.redirect('/')
//     // res.statusCode = 302
//     // res.setHeader('Location','/')
// })

// 当以 POST 请求 /post 的时候，执行指定的处理函数
app.post('/post',function (req,res) {
    //1. 获取post请求体数据
    //2. 处理
    //3. 发送响应
    var comment = req.body  //类似与 get 请求的 query 属性
    comment.dateTime = '2017-9-15'
     comments.unshift(comment)
     res.redirect('/')
})


app.listen(3000,function () {
    console.log('running at 3000')
})