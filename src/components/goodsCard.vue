<template>
  <div class="goods-card" @click="goToDetail">
    <van-image  lazy-load :src="goods.IMAGE1" class="goods-img">
      <template v-slot:error >
        <img :src="errorImg" class="goods-img">
      </template>
    </van-image>
    <ul class="goods-info">
      <li class="goods-title one-line">{{goods.NAME}}</li>
      <!-- <li class="goods-msg">{{goods.msg}}</li> -->
      <li class="goods-price">
        ￥<span>{{goods.ORI_PRICE}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['goods'],
  data(){
    return {
      errorImg: require('../assets/images/errorimg.png')
    }
  },
  methods:{
    goToDetail(){
      this.$router.push({path:'/detail',query:{id:this.goods.ID}})
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
  .goods-img{
    width: 300px;
    height: 300px;
  }
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
