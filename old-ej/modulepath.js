//console.log(module.paths);

//console.log(__filename);  //绝对路径

//console.log(__dirname);  //目录名

//文件读写
var fs = require('fs');

//同步
//读文件
// var readMe = fs.readFileSync("read.txt","utf-8");
//console.log(readMe);

//写文件
// fs.writeFileSync("wirte.txt",readMe);

//异步
//读写文件
// var readMe = fs.readFile("read.txt","utf-8",function (err,data) {
//     //console.log(data);
//     fs.writeFile("write1.txt",data,function () {
//         console.log('write has finished');
//     })
// });

//模块
// var events = require('events');
// var util = require('util');
//
// var Person = function (name) {
//     this.name = name;
// };
//
// util.inherits(Person,events.EventEmitter);
//
// var xiaoming = new Person('xiaoming');
// var lili = new Person('lili');
// var lucy = new Person('lucy');
//
// var person = [xiaoming,lili,lucy];
//
// person.forEach(function (person) {
//     person.on('speak',function(message) {
//         console.log(person.name + " say: " + message);
//     })
// })
//
// xiaoming.emit('speak','hi');
// lucy.emit('speak','nihao');


// var myEmitter = new events.EventEmitter();
//
// myEmitter.on('someEvent',function (message) {
//     console.log(message);
// });
//
// myEmitter.emit('someEvent','fdfds sddsds fddfdfsdsfs');

//读流
var myReadStream = fs.createReadStream(__dirname + '/read.txt');

// var data = "";
//
// myReadStream.on('data',function (chunk) {
//     data += chunk;
//     //console.log(data);
// })
//
// myReadStream.on('end',function (chunk) {
//     console.log(data);
// })

//用流写入文件
// var myWriteStream = fs.createWriteStream(__dirname + '/wirte3.txt');
//
// var writeData = "kkkkkkkkkkkkkkk";
// myWriteStream.write(writeData);
// myWriteStream.end();
// myWriteStream.on('finish',function () {
//     console.log('finished');
// })

//console.log(__dirname);

console.log(window)
console.log(document)