var http = require('http')
var fs = require('fs')

var server = http.createServer()

server.on('request',function (req, res) {

    var url = req.url

    if(url === '/') {
        fs.readFile('./index.html', function (err, data) {
            if (err) {
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end('res fail, please again')
            } else {
                res.setHeader('Content-Type', 'text/html; charset=utf-8')
                res.end(data)
            }
        })
    } else if(url === '/pic') {
        fs.readFile('./4631036-77e761fc020d461f.png', function (err, data) {
            if (err) {
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end('res fail, please again')
            } else {
                res.setHeader('Content-Type', 'image/png; charset=utf-8')
                res.end(data)
            }
        })
    } else if(url === '/style') {
        fs.readFile('./style.css', function (err, data) {
            if (err) {
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end('res fail, please again')
            } else {
                res.setHeader('Content-Type', 'text/css; charset=utf-8')
                res.end(data)
            }
        })
    }

})


server.listen(3000,function () {
    console.log('Server running at http://127.0.0.1:3000/')
})