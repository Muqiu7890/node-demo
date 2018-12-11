const mongoose = require('mongoose');
//连接数据库
mongoose.connect('mongodb://localhost/test');

// 创建一个模型
// 就是在设计数据库
// MongoDB 是动态的，非常灵活，只需要在代码中设计你的数据库就可以了
// mongoose 这个包就可以让你的设计编写过程变的非常的简单
const Cat = mongoose.model('Cat', { name: String });

//实例化一个Cat
const kitty = new Cat({ name: 'Zildjian' });
//持久化保存kiity实例
kitty.save().then(() => console.log('meow'));