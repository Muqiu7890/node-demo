// class Polygon {
//     constructor(height, width) {
//         this.name = 'Polygon';
//         this.height = height;
//         this.width = width;
//     }
//     sayName() {
//         console.log('Hi, I am a ', this.name + '.');
//     }
// }
//
// class Square extends Polygon {
//     constructor(length) {
//         //this.height;  //this不允許使用在super前
//         super(length, length);
//         this.name = 'Square';
//     }
//
//     get area() {
//         return this.height * this.width;
//     }
//
//     set area(value) {
//         //this.area = value;
//         console.log(value);
//     }
// }

// var res = new Square(2);
// console.log(res,res.area); //Square { name: 'Square', height: 2, width: 2 } 4
// res.sayName(); //Hi, I am a  Square.

// class Human {
//     constructor() {}
//     static ping() {
//         return 'ping';
//     }
// }
//
// class Computer extends Human {
//     constructor() {}
//     static pingpong() {
//         return super.ping() + ' pong';
//     }
// }
// console.log(Computer.pingpong());  //ping pong


//继承
const EventEmitter = require('events');

class MyStream extends EventEmitter {
    write(data) {
        this.emit('data', data);
    }
}

const stream = new MyStream();

stream.on('data', (data) => {
    console.log(`接收的数据："${data}"`);
});
stream.write('使用 ES6');

