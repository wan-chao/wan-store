<template>
  <div class="container">
    <img :src="detailInfo.IMAGE1" alt="" class="detail-top-img">
    <div class="detail-content">
      <ul class="detail-info">
        <li class="goods-price price-color">￥<span>{{detailInfo.ORI_PRICE}}</span></li>
        <li class="goods-title">{{detailInfo.NAME}}</li>
        <!-- <li class="goods-model">{{detailInfo.msg}}</li> -->
      </ul>

      <van-tabs v-model="active" sticky swipeable line-height="2">
        <van-tab title="商品详情">
          <div v-html="detailInfo.DETAIL"></div>
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
import MSku from '../components/mSku'
import {detailGoodsInfo} from '@/api/goods'
export default {
  data() {
    return {
      active:0,
      showCart:true, //显示加入购物车按钮
      detailInfo:{},
    }
  },
  components:{
    MSku
  },
  computed:{
  },
  methods:{
    getGoodsInfo(){
      detailGoodsInfo(this.goodsId).then(res=>{
        console.log(res)
        if(res.code == 200){
          this.detailInfo = res.data
        }
      })
    },
    //加入购物车
    onPutCart(){
      // this.showCart = true
      // this.$refs.sku.toggleShow(true)
      let jsonDataGoods = localStorage.getItem('cartGoods')
      let cartGoodsList = jsonDataGoods?JSON.parse(jsonDataGoods):[]
      let index = cartGoodsList.findIndex(value=>{
        return value.ID == this.detailInfo.ID
      })
      if(index<0){
        cartGoodsList.push({
          ID:this.detailInfo.ID,
          NAME:this.detailInfo.NAME,
          ORI_PRICE:this.detailInfo.ORI_PRICE,
          IMAGE1:this.detailInfo.IMAGE1,
          NUM:1
        })
        new Promise((resolve, reject)=>{
          localStorage.setItem('cartGoods',JSON.stringify(cartGoodsList))
          setTimeout(()=>{
            resolve();
          },200)
        }).then(()=>{
          this.$toast.success('添加成功');
        })
      }else{
        this.$toast.fail('您已添加过该商品');
      }
    },
    //购买商品
    onBuyGoods(){
      // this.showCart = false
      // this.$refs.sku.toggleShow(true)
      this.$router.push({path:'/order',query:{ids:this.detailInfo.ID,price:this.detailInfo.ORI_PRICE}})
    },
    //跳转到购物车页面
    goToCart(){
      this.$router.push('/cart')
    }
  },
  mounted() {
    this.goodsId = this.$route.query.id?this.$route.query.id:null
    this.goodsId && this.getGoodsInfo()
  },
}
</script>

<style scoped lang="less">
.detail-content{
  width: 100%;
  padding-bottom: 120px;
  text-align: left;
}
.detail-top-img{
  width: 100%;
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
  padding: 10px 0;
  font-size: 28px;
  color: #051B28;
}
.goods-model{
  font-size: 24px;
  line-height: 60px;
  color: #999;
}
</style>
