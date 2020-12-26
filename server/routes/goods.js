const router = require('koa-router')()
const fs = require("fs")
const Goods = require('../database/models/goods')
const Category = require('../database/models/category')
const CategorySub = require('../database/models/categorySub')

router.prefix('/goods')

hhhhhh
test1操作
ddddddddd
test2d操作

//导入本地json数据到数据库
router.get('/insertAllGoodsInfo', (ctx)=> {
  fs.readFile('./data_json/newGoods.json',(err,data)=>{
    data = JSON.parse(data)
    let saveCount = 0
    data.map(value=>{
      // console.log(value)
      let newGoods = new Goods(value)
      newGoods.save().then(()=>{
        saveCount++
        console.log('成功',saveCount)
      }).catch(error=>{
        console.log('失败',error)
      })
    })
  })
  ctx.body = '开始导入数据'
})


//导入商品大类
router.get('/insertAllCategory',(ctx)=>{
  fs.readFile('./data_json/category.json',(err,data)=>{
    data = JSON.parse(data)
    let saveCount = 0
    data.RECORDS.map(value=>{
      // console.log(value)
      let newCategory = new Category(value)
      newCategory.save().then(()=>{
        saveCount++
        console.log('成功',saveCount)
      }).catch(error=>{
        console.log('失败',error)
      })
    })
  })
  ctx.body = '开始导入大类数据'
})

//导入商品小类
router.get('/insertAllCategorySub',(ctx)=>{
  fs.readFile('./data_json/category_sub.json',(err,data)=>{
    data = JSON.parse(data)
    let saveCount = 0
    data.RECORDS.map(value=>{
      // console.log(value)
      let newCategorySub = new CategorySub(value)
      newCategorySub.save().then(()=>{
        saveCount++
        console.log('成功',saveCount)
      }).catch(error=>{
        console.log('失败',error)
      })
    })
  })
  ctx.body = '开始导入小类数据'
})


//读取大类数据的接口
router.get('/getCategoryList',async(ctx)=>{
  try{
    let result = await Category.find().exec()
    ctx.body = {code:200,data:result}
  }catch(error){
    ctx.body = {
      code:500,
      message:error
    }
  }
})

//读取小类的数据
router.post('/getCategorySubList',async(ctx)=>{
  try{
    let categoryId = ctx.request.body.categoryId
    let result = await CategorySub.find({MALL_CATEGORY_ID:categoryId}).exec()
    ctx.body = {code:200,data:result}
  }catch(error){
    ctx.body = {
      code:500,
      message:error
    }
  }
})

//通过商品ID获取商品信息
router.post('/getDetailGoodsInfo',async(ctx)=>{
  try{
    let goodsId = ctx.request.body.goodsId
    let result = await Goods.findOne({ID:goodsId}).exec()
    ctx.body={code:200,data:result}
  }catch(error){
    ctx.body = {
      code:500,
      message:error
    }
  }
})

//根据类别获取商品列表
router.post('/getGoodsListByCategorySubId',async(ctx)=>{
  try{
    let categorySubId = ctx.request.body.categorySubId
    let page = ctx.request.body.page
    let num = 10
    let start = (page-1)*num
    let result = await Goods.find({SUB_ID:categorySubId}).skip(start).limit(num).exec()
    ctx.body={code:200,data:result}
  }catch(error){
    ctx.body = {
      code:500,
      message:error
    }
  }
})

//获取首页推荐商品列表
router.post('/getRecommendGoodsList',async(ctx)=>{
  try{
    let page = ctx.request.body.page
    let num = 10
    let start = (page-1)*num
    let result = await Goods.find().skip(start).limit(num).exec()
    ctx.body={code:200,data:result}
  }catch(error){
    ctx.body = {
      code:500,
      message:error
    }
  }
})

//获取首页热门商品
router.get('/getHotGoodsList',async(ctx)=>{
  try{
    let start = Math.floor(Math.random()*500)
    let num = 20
    let result = await Goods.find().skip(start).limit(num).exec()
    ctx.body={code:200,data:result}
  }catch(error){
    ctx.body = {
      code:500,
      message:error
    }
  }
})


//通过商品ID数组获取多个商品
router.post('/getGoodsListByIdList',async(ctx)=>{
  try{
    let ids = ctx.request.body.ids
    let result = await Goods.find({ID:{"$in":ids}}).exec()
    ctx.body={code:200,data:result}
  }catch(error){
    ctx.body = {
      code:500,
      message:error
    }
  }
})


//关键字查询商品
router.get('/getGoodsListByKeyword',async(ctx)=>{
  try{
    let result = await Goods.find({NAME:{$regex: '牛奶'}}).exec()
    ctx.body={code:200,data:result}
  }catch(error){
    ctx.body = {
      code:500,
      message:error
    }
  }
})





module.exports = router



