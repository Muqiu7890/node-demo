var http = require('http')

var server = http.createServer()

//客户端发请求 服务器 接受请求 处理请求 发送响应
//注册request请求事件 当客户端发起请求时 自动触发该事件 执行回调函数
//接受两个参数 request 请求对象用来获取客户端的一些请求信息 eg：请求路径
//           response 用来给客户端发送响应消息
server.on('request',function (req,res) {
    // console.log('收到客户端请求, 请求路径为' + req.url)

    var url = req.url;
    if(url === '/index') {
        res.end('index')
    } else if(url === '/login') {
        res.end('login')
    } else {
        res.end('hello world')


    //手动end 否着浏览器会一直等待

})

//绑定端口号 启动服务器
server.listen(3000,function () {
    console.log('Server running at http://127.0.0.1:3000/')
})