const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

//在koa2里解决跨域的中间件
const cors = require('koa2-cors')

const mongoose = require('mongoose')
const dbConfig = require('./database/config')

const index = require('./routes/index')
const users = require('./routes/users')
const goods = require('./routes/goods')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(cors())

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(goods.routes(), goods.allowedMethods())

//连接mongodb数据库
mongoose.connect(dbConfig.dbs,{
  useNewUrlParser:true
})

//mongodb打开的时候
mongoose.connection.once('open',()=>{
  console.log('MongoDB Connected successfully!')
})

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
