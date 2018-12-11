//node没有全局作用域 只有模块
//用户自己编写的文件模块 相对路径过必须加 ./ 不能省略 省略会被当作核心模块
// var os = require('os')
//获取机器信息
console.log(os.cpus()) //   获取cpu信息


console.log(os.totalmem()) // 获取内存大小 mem-> memory

// var http = require('http')
//
// var server = http.createServer()
//
// server.on('request',function (req, res) {
//     res.setHeader('Content-Type','text/plain; charset=utf-8') ///plain 普通文本
//     res.end('nihao 中国\n')
// })
//
// server.listen(3000,function () {
//     console.log('Server running at http://127.0.0.1:3000/')
// })

//若使用无分号的代码风格 需要加分号的情况 以 ( [ ` 开头的代码
