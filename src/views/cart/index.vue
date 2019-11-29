<template>
  <div class="container">
    <div class="cart-content">
    <div class="cart-goods">
      <img src="../../assets/images/goods03.png">
      <div class="goods-info">
        <div class="goods-name">蒙牛纯甄红西柚小蛮腰</div>
        <span class="goods-msg">230g×10瓶</span>
        <div class="goods-computer">
          <span class="goods-num">￥{{price*num}}</span>
          <van-stepper v-model="num" integer  input-width="40px" button-size="24px"/>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cart',
  components: {
  },
  data(){
    return {
      num:1,
      price:54.9
    }
  }
}
</script>

<style lang="less">
.cart-content{
  width: 95%;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 90px;
}
.cart-goods{
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  text-align: left;
  &>img{
    flex: none;
    width: 180px;
    height: 180px;
    margin-right: 20px;
  }
  .goods-info{
    width: 100%;
    height: 100%;
  }
  .goods-name{
    color: #323233;
    font-size: 28px;
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
