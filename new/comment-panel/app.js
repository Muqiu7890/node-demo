var http = require('http')
var fs = require('fs')
var url = require('url')
var template = require('art-template')

var content = [
    {
        name: '张三',
        message: '米纳桑',
        dataTime: '2015-9-10'
    },
    {
        name: '张三1',
        message: '米纳桑',
        dataTime: '2015-9-10'
    },
    {
        name: '张三2',
        message: '米纳桑',
        dataTime: '2015-9-10'
    },
    {
        name: '张三3',
        message: '米纳桑',
        dataTime: '2015-9-10'
    }
]

http.createServer(function (req, res) {

    var parseObj = url.parse(req.url, true)

    pathname = parseObj.pathname

    console.log(parseObj);

    if (pathname === '/') {
        fs.readFile('./views/index.html', function (err, data) {
            if (err) {
                return console.log('404 not exist')
            }

            var htmlRes = template.render(data.toString(), {
                content: content,
            })

            res.end(htmlRes)
        })
    } else if (pathname === '/post') {
        fs.readFile('./views/post.html', function (err, data) {
            if (err) {
                return console.log('404 not exist')
            }
            res.end(data)
        })
    }
    else if (pathname.indexOf('/public/') === 0) {
        fs.readFile('.' + pathname, function (err, data) {
            if (err) {
                return console.log('404 not exist')
            }
            res.end(data)
        })

    } else if (pathname === '/pinglun') {
        //1.获取表单提交的数据 parseObj.query
        //2.获取当前时间添加到数组对象中，并存储在数组中
        //3.重定向到首页
        var comment = parseObj.query
        comment.dataTime = '2019-2-12'
        content.push(comment)
        //    如何重定向？
        //    1. 状态码设置为302临时重定向 statusCode  301永久重定向
        //    2. 在响应头中通过 Location 告诉客户端往哪重定向 setHeader
        res.statusCode = 302
        res.setHeader('Location','/')
        res.end()
    }
    else {
        fs.readFile('./views/false.html', function (err, data) {
            if (err) {
                return console.log('404 not exist')
            }
            res.end(data)
        })
    }
}).listen(3000, function () {
    console.log('run at ...')
})
