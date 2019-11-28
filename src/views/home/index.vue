<template>
  <div class="container">
    <Swiper></Swiper>
    <div class="content">

      <div class="content-top">
        <div>
          <a></a>
          <span>官方自营</span>
        </div>
        <div>
          <a></a>
          <span>天天平价</span>
        </div>
        <div>
          <a></a>
          <span>极速送达</span>
        </div>
        <div>
          <a></a>
          <span>一站购齐</span>
        </div>
      </div>

      <Recommend></Recommend>

      <div class="goods-list">
        <h1>精品推荐</h1>
        <van-row gutter="10">
          <van-col span="12" v-for="(item,index) in goodsList" :key="index">
            <GoodsCard :goods="item"></GoodsCard>
          </van-col>
        </van-row>
      </div>

    </div>
  </div>
</template>

<script>
import Swiper from '../../components/swiper'
import GoodsCard from '../../components/goodsCard'
import Recommend from './recommend'
export default {
  name: 'home',
  components: {
    Swiper,
    Recommend,
    GoodsCard
  },
  data(){
    return {
      goodsList:[
        {title:'',price:'54.9',img:require('../../assets/images/goods04.png')},
        {title:'',price:'54.9',img:require('../../assets/images/goods05.png')},
        {title:'',price:'54.9',img:require('../../assets/images/goods03.png')},
      ]
    }
  }
}
</script>

<style lang="less">
.content{
  position: relative;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 90px;
  background: #f6f6f6;
}
.content-top{
  position: absolute;
  top: -45px;
  display: flex;
  justify-content: space-around;
  height: 50px;
  width: 100%;
  color: #aaa;
  border-top-left-radius: 36px;
  border-top-right-radius: 36px;
  & span{
    line-height: 60px;
  }
  background: #f6f6f6;
}
.goods-list{
  width: 95%;
  margin: 20px auto;
  text-align: left;
  &>h1{
    padding: 24px 0;
    font-size: 36px;
    color: #2A3145;
    font-weight: 700;
  }
}
</style>
