<template>
  <div class="container">
    <Swiper :picArray="picArray"></Swiper>
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

      <Recommend :goodsList="hotGoods"></Recommend>

      <div class="goods-list">
        <h1>精品推荐</h1>
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-row gutter="10">
            <van-col span="12" v-for="(item,index) in goodsList" :key="index">
              <GoodsCard :goods="item"></GoodsCard>
            </van-col>
          </van-row>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from '../../components/swiper'
import GoodsCard from '../../components/goodsCard'
import Recommend from './recommend'
import {hotGoodsList,recommendGoodsList} from '@/api/goods'
export default {
  name: 'home',
  components: {
    Swiper,
    Recommend,
    GoodsCard
  },
  data(){
    return {
      hotGoods:[],
      page:1,
      loading: false,
      finished: false,
      picArray:[
        require('../../assets/images/img07.jpg'),
        require('../../assets/images/img08.jpg'),
        require('../../assets/images/img09.jpg'),
        require('../../assets/images/img10.jpg'),
        require('../../assets/images/img11.jpg'),
      ],
      goodsList:[]
    }
  },
  methods:{
    //获取首页热门商品
    getHotGoodsList(){
      this.loading = false
      this.finished = false
      hotGoodsList().then(res=>{
        // console.log(res)
        if(res.code === 200){
          this.hotGoods = res.data.slice(0,3)
        }
      })
    },
    //获取推荐商品
    getRecommendList(){
      recommendGoodsList(this.page).then(res=>{
        console.log(res)
        if(res.code==200 && res.data.length){
          this.page++
          this.goodsList = this.goodsList.concat(res.data)
        }else{
          this.finished = true
        }
        // 加载状态结束
        this.loading = false;
      })
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        this.getRecommendList()
      }, 1000);
    }
  },
  mounted(){
    this.page = Math.floor(Math.random()*50)
    this.getHotGoodsList()
    this.getRecommendList()
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
  margin: 0px auto;
  margin-bottom: 20px;
  text-align: left;
  &>h1{
    padding: 24px 0;
    font-size: 36px;
    color: #2A3145;
    font-weight: 700;
  }
}
</style>
