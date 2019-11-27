const router = require('koa-router')()

const User = require('../database/models/user')

router.prefix('/users')

router.get('/', function (ctx, next) {
  let oneUser = new User({userName:'huanggua',password:'123456'})
  oneUser.save().then(()=>{
    console.log('插入成功')
  })
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
