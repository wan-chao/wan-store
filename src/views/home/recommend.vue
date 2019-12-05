<template>
  <div class="recommend-card">
    <div class="card-header">
      <span>今日疯抢</span>
      <a>查看更多 ></a>
    </div>
    <ul class="card-content">
      <li v-for="item in goodsList" :key="item.title" @click="goToDetail(item)" class="goods-item">
        <img v-lazy="item.IMAGE1" :onerror="errorImg" width="100%" >
        <span class="one-line goods-detail">{{item.NAME}}</span>
        <div class="goods-price">￥ <span>{{item.ORI_PRICE}}</span> </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    goodsList:{
      type:Array,
      default:()=>[]
    }
  },
  components: {
  },
  data(){
    return {
      errorImg:require('../../assets/images/errorimg.png')
    }
  },
  methods:{
    goToDetail(item){
      this.$router.push({path:'/detail',query:{id:item.ID}})
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
