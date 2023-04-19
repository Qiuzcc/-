// 手动配置CORS实现跨域资源请求
function customCORS(req, res, next) {
    // 指定允许的源可以跨域访问，如果指定具体的源，只能指定一个。
    // 可以设置为 * ，表示允许所有源跨域访问，但这样做存在安全风险，不建议这样做！
    res.header("Access-Control-Allow-Origin", 'http://localhost:5173');

    // 表示何种跨域请求方式可以请求这台服务器
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')

    res.header('Access-Control-Content-Type', 'application/json')

    //如果要在跨域请求的响应中加入头，则需要设置这个字段
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Access-Token')

    next()
}

// 动态指定允许的源
function customCORS2(req, res, next) {
    const corsFilter = ["https://timegogo.top", 'http://localhost:5173']
    const origin = req.get('Origin')
    const allowOrigin = corsFilter.includes(origin) ? origin : corsFilter[0]
    res.header("Access-Control-Allow-Origin", allowOrigin);

    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
    res.header('Access-Control-Content-Type', 'application/json')
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Access-Token')

    next()
}

module.exports = customCORS
