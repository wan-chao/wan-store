<template>
  <div class="container">
    <Swiper :autoplay="false" :autoHeight="true" :picArray="detailInfo.privewImgs"></Swiper>
    <div class="detail-content">
      <ul class="detail-info">
        <li class="goods-price price-color">￥<span>{{detailInfo.price}}</span></li>
        <li class="goods-title">{{detailInfo.title}}</li>
        <li class="goods-model">{{detailInfo.msg}}</li>
      </ul>

      <van-tabs v-model="active" sticky swipeable line-height="2">
        <van-tab title="商品详情">
          <img  v-for="(img,index) in detailInfo.picArray" :key="img" v-lazy="img" width="100%">
        </van-tab>
        <van-tab title="评价">
          评价正在开发中...
        </van-tab>
      </van-tabs>
    </div>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" @click="goToCart" text="购物车"/>
      <van-goods-action-button  type="warning" @click="onPutCart" text="加入购物车" />
      <van-goods-action-button  type="danger" @click="onBuyGoods" text="立即购买" />
    </van-goods-action>

    <MSku ref="sku" :showCart="showCart"></MSku>
  </div>
</template>

<script>
import Swiper from '../components/swiper'
import MSku from '../components/mSku'
export default {
  data() {
    return {
      active:0,
      showCart:true, //显示加入购物车按钮
      detailInfo:{title:'新边界五色葡萄干250g',msg:'80g×1袋',price:'6.9',
        privewImgs:[require('../assets/images/goods03.png')],
        picArray:[
          require('../assets/images/detail01.png'),
          require('../assets/images/detail02.png'),
          require('../assets/images/detail03.png'),
          require('../assets/images/detail04.png'),
          require('../assets/images/detail05.png'),
          require('../assets/images/detail06.png'),
        ]
      },
    }
  },
  components:{
    Swiper,MSku
  },
  computed:{
  },
  methods:{
    //加入购物车
    onPutCart(){
      this.showCart = true
      this.$refs.sku.toggleShow(true)
    },
    //购买商品
    onBuyGoods(){
      this.showCart = false
      this.$refs.sku.toggleShow(true)
    },
    //跳转到购物车页面
    goToCart(){
      this.$router.push('/cart')
    }
  },
  mounted() {
  },
}
</script>

<style scoped lang="less">
.detail-content{
  width: 100%;
  padding-bottom: 120px;
  text-align: left;
}
.detail-info{
  width: 95%;
  margin: 0px auto;
}
.goods-price{
  font-size: 36px;
  padding: 15px 0;
  &>span{
    font-size: 48px;
    font-weight: normal;
  }
}
.goods-title{
  margin-top: 10px;
  font-size: 28px;
  color: #051B28;
}
.goods-model{
  font-size: 24px;
  line-height: 60px;
  color: #999;
}
</style>
