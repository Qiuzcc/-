var cors = require('cors')

// 用法一：允许所有跨源请求，不推荐使用
// app.use(cors())

// 用法二：指定单一的允许源
// var corsOptions = {
//     origin: 'http://localhost:5173',
// }

// 用法三：动态指定允许源
var whitelist = ['http://localhost:5173', 'https://timegogo.top']
var corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

module.exports = cors(corsOptions)
