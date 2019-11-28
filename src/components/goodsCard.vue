<template>
  <div class="goods-card">
    <img :src="goods.img" width="100%">
    <ul class="goods-info">
      <li class="goods-title">{{goods.title}}</li>
      <li class="goods-msg">{{goods.msg}}</li>
      <li class="goods-price">
        ￥<span>{{goods.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['goods'],
  data(){
    return {
    }
  }
}
</script>

<style lang="less">
.goods-card{
  padding: 20px;
  color: #2A3145;
  margin-bottom: 20px;
  border-radius: 15px;
  background: #fff;
}
.goods-info{
  padding: 20px 0;
  .goods-title{
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .goods-msg{
    font-size: 24px;
    color: #aaa;
    padding: 10px 0;
  }
  .goods-price{
    font-size: 24px;
    color: #2A3145;
    padding-top: 20px;
    &>span{
      font-size: 40px;
    }
  }
}
</style>
