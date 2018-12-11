/*
 * router.js 路由模块
 * 职责：
 *   处理路由
 *   根据不同的请求方法+请求路径设置具体的请求处理函数
 * 模块职责要单一，不要乱写
 * 我们划分模块的目的就是为了增强项目代码的可维护性
 * 提升开发效率
 */
const express = require('express')
const fs = require('fs')
const Student = require('./student')

//Express提供了一种更好的方式 专门由来包装路由
//1.创建一个路由容器
const router = express.Router()

//2.把路由都挂载到 router 路由容器中

/*
 *  渲染学生列表页面
 */
router.get('/students',function (req,res) {
    // fs.readFile('./db.json','utf8',function (err,data) {
    //     if(err) {
    //         return res.status(500).send('server error')
    //     } else {
    //         res.render('index.html',{
    //             star: [
    //                 '白','龙','冠','天'
    //             ],
    //             students: JSON.parse(data).students
    //         })
    //     }
    // })
    Student.find(function (err,students) {
        if(err) {
            return res.status(500).send('server error')
        } else {
            res.render('index.html',{
                star: [
                    '白','龙','冠','天'
                ],
                students: students
            })
        }

    }) //该函数即为callback

})

/*
 * 渲染添加学生页面
 */
router.get('/students/new',function (req,res) {
    res.render('update.html')

})

/*
 * 处理添加学生页面
 */
router.post('/students/new',function (req,res) {
    //获取表单数据
    const student = req.body

    new Student(student).save(function (err) {
        if(err) {
            return res.status(500).send('server error')
        }
        res.redirect('/students')
    })
})

/*
 * 渲染编辑学生页面
 */
router.get('/students/edit',function (req,res) {
    //console.log(req.query.id)
    //1。根据 id 拿到对应学生信息
    //2.将拿到的数据渲染到页面中
    Student.findById((req.query.id).replace(/"/g,''),function (err,student) {
        if(err) {
            return res.status(500).send('server error')
        }
        res.render('edit.html',{
            student: student
        })
    })

})

/*
 * 更新学生信息
 */
router.post('/students/edit',function (req,res) {
    //1.获取表单数据
    //2.将获取到的数据进行处理
    //3.定向到首页
    // console.log(req.body);
    //console.log(req.body.id)
    var id = (req.body.id).replace(/"/g,'')
    Student.findByIdAndUpdate(id,req.body,function (err) {
        if(err) {
            return res.status(500).send('server error')
        }
        res.redirect('/students')
    })
})

/*
 * 删除学生
 */
router.get('/students/delete',function (req,res) {
    Student.findByIdAndRemove((req.query.id).replace(/"/g,''),function (err) {
        if(err) {
            return res.status(500).send('server error')
        }
        res.redirect('/students')
    })
})

module.exports = router