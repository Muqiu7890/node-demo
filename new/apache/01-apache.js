var http = require('http')
var fs = require('fs')

var server = http.createServer()

server.on('request',function (req,res) {
    console.log('success')

     var url = req.url
     var wwwDir = './www'
     var pathFile = '/index.html'
    if(url !== '/') {
        pathFile = url
    }

      console.log(pathFile,wwwDir + pathFile)

    fs.readFile(wwwDir + pathFile,function (err,data) {
        if(err) {
            return res.end('404 not found')
        }

         res.end(data)
    })

})


server.listen(3000,function () {
    console.log('run at ...')
})