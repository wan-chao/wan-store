<template>
  <div class="recommend-card" @click="goToDetail">
    <div class="card-header">
      <span>今日疯抢</span>
      <a>查看更多 ></a>
    </div>
    <ul class="card-content">
      <li v-for="item in goodsList" :key="item.title" class="goods-item">
        <img v-lazy="item.img" width="100%">
        <span class="one-line goods-detail">{{item.title}}</span>
        <div class="goods-price">￥ <span>{{item.price}}</span> </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {
  },
  data(){
    return {
      goodsList:[
        {title:'光明纯奶24盒苗条装',price:'54.9',img:require('../../assets/images/goods01.png')},
        {title:'楼兰蜜语甜甜枣500g',price:'6.9',img:require('../../assets/images/goods02.png')},
        {title:'新边界五色葡萄干250g',price:'6.9',img:require('../../assets/images/goods03.png')}
      ]
    }
  },
  methods:{
    goToDetail(){
      this.$router.push('/detail')
    }
  }
}
</script>

<style lang="less">
.recommend-card{
  width: 95%;
  margin: 0px auto;
  padding-bottom: 25px;
  text-align: left;
  border-radius: 20px;
  background: #fff;
}
.card-header{
  display: flex;
  justify-content: space-between;
  padding: 24px;
  font-size: 32px;
  color: #FF0036;
  font-weight: 700;
  &>a{
    font-size: 24px;
    line-height: 32px;
    font-weight: normal;
  }
}
.card-content{
  display: flex;
  justify-content: space-around;
  width: 100%;
  text-align: center;
}
.goods-item{
  width: 30%;
  font-size: 24px;
}
.goods-detail{
  padding: 10px 0;
  font-weight: 700;
}
.goods-price{
  font-weight: 700;
  &>span{
    font-size: 28px;
  }
}
</style>
