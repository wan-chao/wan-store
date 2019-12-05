<template>
  <div class="container">
    <div class="order-content" id="orderContent">

      <Address :address="address"></Address>
      
      <div class="cart-goods" v-for="goods in cartGoodsList" :key="goods.ID">
        <img :src="goods.IMAGE1">
        <div class="goods-info">
          <div class="goods-name">{{goods.NAME}}</div>
          <!-- <span class="goods-msg">230g×10瓶</span> -->
          <div class="goods-computer">
            <span class="goods-num">￥{{goods.ORI_PRICE}} x {{goods.NUM?goods.NUM:'1'}}</span>
          </div>
        </div>
      </div>
    </div>

    <van-image-preview v-model="show" :images="imagesPay"></van-image-preview>

    <div class="order-bar">
      <div></div>
      <div class="order-right">
        <div class="last-price">合计：<span>￥{{allNum}}</span></div>
        <div class="price-btn" @click="goOrderPage">提交订单</div>
      </div>
    </div>
  </div>
</template>

<script>
import SortCard from '@/components/sortCard'
import Address from './address'
import {goodsListByIdList} from '@/api/goods'
export default {
  name: 'order',
  components: {
    SortCard,
    Address
  },
  data(){
    return {
      show:false,
      disabled:true,
      ids:'',
      allNum:0,
      address:{},
      cartGoodsList:[],
      imagesPay:[require('../../assets/images/pay.jpg'),require('../../assets/images/zhiPay.jpg')]
    }
  },
  computed:{

  },
  methods:{
    goOrderPage(){
      if(!this.address.id){
        this.$toast.fail('请选择收货地址');
      }else{
        this.show = true
      }
    },
    getGoodsListBylocal(){
      this.cartGoodsList = this.$store.state.orderGoodsList
    },
    getGoodsListByIdList(){
      let ids = this.ids.split(',')
      goodsListByIdList(ids).then(res=>{
        console.log(res)
        if(res.code == 200){
          this.cartGoodsList = res.data
        }
      })
    }
  },
  mounted(){

    let addressJson = localStorage.getItem('addressList')
    let addressList = addressJson?JSON.parse(addressJson):[]
    let index = addressList.findIndex(v=>{
      return v.isDefault === true
    })
    if(index>=0) this.address = addressList[index]

    this.ids = this.$route.query.ids
    this.allNum = this.$route.query.price
    if(!this.allNum) return
    if(this.ids){
      this.getGoodsListByIdList()
    }else{
      this.getGoodsListBylocal()
    }
  }
  
}
</script>

<style lang="less" scope>
.order-content{
  width: 95%;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 90px;
  overflow: scroll;
}
.order-bar{
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  border-top: 1px solid #eee;
  background: #fff;
  .last-price{
    font-size: 28px;
    color: #666;
    &>span{
      font-size: 32px;
      color: #FF0036;
    }
  }
  .order-right{
    display: flex;
    align-items: center;
    margin-right: 30px;
  }
  .price-btn{
    width: 200px;
    height: 60px;
    margin-left: 20px;
    border-radius: 40px;
    background: #1acb95;
    font-size: 30px;
    line-height: 60px;
    color: #fff;
  }
}
.cart-goods{
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  text-align: left;
  background: #fff;
 
  &>img{
    flex: none;
    width: 150px;
    height: 150px;
    margin:0 20px;
  }

  .goods-info{
    width: 100%;
    height: 100%;
  }
  .goods-name{
    color: #323233;
    font-size: 28px;
    line-height: 40px;
    padding: 10px 0;
  }
  .goods-msg{
    color: #7d7e80;
    font-size: 22px;
  }
  .goods-computer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    color: #323233;
    font-size: 26px;
    .goods-num{
      color: #FF0036;
    }
  }
}
</style>
