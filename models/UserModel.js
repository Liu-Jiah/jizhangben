// 导入mongoose
const mongoose = require('mongoose')
// 创建文档的结构对象
// 设置集合中文档的属性以及属性值的类型
let Userchema = new mongoose.Schema({
    username: String,
    password:  String
});

// 创建模型对象  对文档操作的封装对象
let UserModel = mongoose.model('users', Userchema);

// 暴露模型对象
module.exports = UserModel;