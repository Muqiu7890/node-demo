// var fs = require('fs');
//
// fs.readdir('./www',function (err,files) {
//     if(err) {
//         return console.log('not exist')
//     }
//     console.log(files)
// })

var http = require('http')
var fs = require('fs')
var template = require('art-template')

var wwwDir = './www'

http.createServer(function (req, res) {

    var url = req.url

    //1.获得响应页面内容
    fs.readFile('./temple.html', function (err, data) {
        if (err) {
            return res.end('404 not found')
        }

        //2.得到目录列表
        fs.readdir(wwwDir, function (err, files) {
            if (err) {
                return console.log('not exist')
            }

            // var content = ''

//             files.forEach(function (item) {
//                 content += `<tr>
// <td data-value="apple/"><a class="icon dir" href="">${item}</a></td>
// <td class="detailsColumn" data-value="0"></td>
// <td class="detailsColumn" data-value="1536750277">9/12/18, 7:04:37 PM</td>
// `
//             })

            //3.目录中的内容替换页面中需要替换的内容
            data = template.render(data.toString(),{
                files: files
            })      //错误： var data

            //将替换后的结果响应给浏览器
            res.end(data)
        })
    })
}).listen(3000,function () {
    console.log('run at http://127.0.0.1:3000')
})
