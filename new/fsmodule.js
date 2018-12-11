//采用EcmaScript编写 没有BOM DOM

// console.log(window) //window is not define

//fs file-system文件系统
var fs = require('fs')
//读文件
//参数 文件路径 回调函数
//若成功 data->数据 error->null
//若失败 error 错误对象 data undefined
// fs.readFile('../read.txt', 'utf-8', function (error,data) {
//     //console.log(data.toString())
//     if(error) {
//         console.log('出错了')
//     } else  {
//         console.log(data)
//     }
// })


//写文件
//参数 文件路径 文件内容 回调函数
//若成功 文件写入成功 失败 error->null 若失败 文件写入失败 error->错误对象
// fs.writeFile('./data.md', '你好吗 hhh', function (error) {
//     if(error) {
//         console.log('写入失败',error)
//     } else {
//         console.log('写入成功',error)
//     }
// })

//文件目录
fs.readdir('./www',function (err,file) {
    if(err) {
        return console.log('not exist')
    }
    console.log(file)
})

