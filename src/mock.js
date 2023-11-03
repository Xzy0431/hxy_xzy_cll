//引入mockjs
const Mock = require('mockjs')
//获取mock.Random对象
//使用mockjs模拟数据
Mock.mock('api/users/', () => {//当post或get请求到/api/users/路由时Mock会拦截请求并返回上面的数据
    var list = [
        { "username": "aaaaaa", "email": "", },
        { "username": "somenzz", "email": "", },
        { "username": "admin", "email": "admin²example.com", }
    ]
    return list
})