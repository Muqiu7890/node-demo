const mongoose = require('mongoose')
var Schema = mongoose.Schema

// 连接本机test数据库
mongoose.connect('mongodb://localhost/test')

// 设置集合结构
// 字段名称就是表结构中的属性名称
// 约束的目的是为了保证数据的完整性，不要有脏数据
var useSchema = new Schema({
    userName: {
        type: String,
        required: true //该值不为空
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
})

//    将文档结构发布为模型
//    mongoose.model 方法就是用来将一个架构发布为 model
//    第一个参数：传入一个大写名词单数字符串用来表示你的集合名称
//                 mongoose 会自动将大写名词的字符串生成 小写复数 的集合名称
//                 例如这里的 User 最终会变为 users 集合名称
//    第二个参数：架构 Schema
//
//    返回值：模型构造函数
var User = mongoose.model('User',useSchema)

/*
 *新增数据
 */
// var admin = new User({
//     userName: 'qj',
//     password: '123456',
//     email: 'admin@qq.com'
// })
//
// admin.save(function (err,ret) {
//     if(err) {
//         console.log('保存失败')
//     } else {
//         console.log('保存成功')
//         console.log(ret) //新增的数据
//     }
//
// })

/*
 * 查询
 */
//1.查询所有(若用 findOne 只查询第一条）
// User.find(function (err,ret) {
//     if(err) {
//         console.log('查询失败')
//     } else {
//         console.log('查询成功')
//         console.log(ret) //新增的数据
//     }
// })

//2.条件查询
// User.find({
//     userName: 'qj'
// },function (err,ret) {
//     if(err) {
//         console.log('查询失败')
//     } else {
//         console.log('查询成功')
//         console.log(ret) //新增的数据
//     }
// })

// User.findOne({
//     userName: 'admin'
// },function (err,ret) {
//     if(err) {
//         console.log('查询失败')
//     } else {
//         console.log('查询成功')
//         console.log(ret) //新增的数据
//     }
// })


/*
 * 删除
 */
// User.remove({
//     userName: 'qj'
// },function (err,ret) {
//     if(err) {
//         console.log('删除失败')
//     } else {
//         console.log('删除成功')
//     }
// })

/*
 * 更新
 */
User.findByIdAndUpdate('5c07b3a4c2f6ef1ce3306284',{
    password: '12345678'
},function (err,ret) {
    if(err) {
    console.log('更新失败')
    } else {
        console.log('更新成功')
    }
})
