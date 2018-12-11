/*
  数据操作文件模块
  只处理数据
 */
const fs = require('fs')

const dbPath = './db.json'

/*
 * 获取学生列表
 */
exports.find = function (callback) {
    fs.readFile(dbPath,'utf8',function (err,data) {
        if(err) {
            return callback(err)
        }
        callback(null,JSON.parse(data).students)
    })
}

/*
 * 根据学生id获取学生信息
 */
exports.findById = function (id,callback) {
    fs.readFile(dbPath,'utf8',function (err,data) {
        if(err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        var result = students.find(function (item) {
            return item.id === id
        })

        callback(null,result)
    })
}

/*
 * 添加学生
 */
exports.save = function (student,callback) {
    fs.readFile(dbPath,'utf8',function (err,data) {
        if(err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        student.id = students[students.length - 1].id + 1
        students.push(student)
        var result = JSON.stringify({
            students: students
        })

        fs.writeFile(dbPath,result,function () {
            if(err) {
                return callback(err)
            }
            callback(null)
        })
    })
}

/*
 * 更新学生
 */
exports.updateById = function (student,callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        student.id = parseInt(student.id)
        //要被操作的学生
        var stu = students.find(function (item) {
            return item.id === student.id
        })
        //遍历更新内容
        for(let key in student) {
            stu[key] = student[key]
        }
        var result = JSON.stringify({
            students: students
        })

        fs.writeFile(dbPath,result,function () {
            if(err) {
                return callback(err)
            }
            callback(null)
        })
    })
}

/*
 * 删除学生
 */
exports.deleteById = function (id,callback) {
    fs.readFile(dbPath,'utf8',function (err,data) {
        var students = JSON.parse(data).students
        var deteleId = students.findIndex(function (item) {
            return item.id === parseInt(id)
        })
        students.splice(deteleId,1)
        var result = JSON.stringify({
            students: students
        })

        fs.writeFile(dbPath,result,function () {
            if(err) {
                return callback(err)
            }
            callback(null)
        })
    })
}