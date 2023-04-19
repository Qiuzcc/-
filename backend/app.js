var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs')
var FileStreamRotator = require('file-stream-rotator')

var indexRouter = require('./routes/index');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// 生产环境下使用，请求记录打印到日志
// 将日志打印到本地文件，并按天分割日志文件 https://www.cnblogs.com/chyingp/p/node-learning-guide-express-morgan.html
// var logDirectory = path.join(__dirname, 'access_logs')
// fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
// var accessLogStream = FileStreamRotator.getStream({
//   date_format: 'YYYYMMDD',
//   filename: path.join(logDirectory, 'access-%DATE%.log'),
//   frequency: 'daily',
//   verbose: false
// })
// app.use(logger('short',{stream: accessLogStream}))

// 开发环境使用，访问记录输出到控制台
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/********************** 需要修改的部分 Start *********************/

// 实验一和实验二，不需要做任何CORS配置

// 实验三：手动配置CORS实现跨域资源请求
// var customCORS = require(path.join(__dirname, 'CORS/custom_cors.js'))
// app.use(customCORS)


// 实验四：使用cors库实现跨域资源请求
// var cors = require(path.join(__dirname, 'CORS/npm_cors.js'))
// app.use(cors)


/********************** 需要修改的部分 End *********************/


app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// process.env.PORT = 3001;

module.exports = app;
