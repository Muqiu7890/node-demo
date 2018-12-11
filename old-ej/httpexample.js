var https = require('https');
var options = {
    host: 'www.baidu.com',
    port: 80,
    path: '/upload',
    method: 'POST',
};
var req = https.request(options,function (res) {
    console.log('status:' + res.statusCode);
    console.log('headers' + JSON.stringify(res.headers));
    res.setEncoding('utf-8');
    res.on('data', function (chunk) {
        console.log('body:' + chunk);
    });
});
req.on('error',function (e) {
    console.log('problem with request: ' + e.message);
});

req.write('data\n');
req.end();
// http is not defined

//解决添加超过10个侦听器导致内存泄露的警告。调用
//emitter.setMaxListeners(0);
console.log('Server running at https://www.baidu.com:80/');


