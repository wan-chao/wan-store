<template>
  <div class="container">
    <Swiper :autoplay="false" :autoHeight="true" :picArray="detailInfo.picArray"></Swiper>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车"/>
      <van-goods-action-button  type="warning" text="加入购物车" />
      <van-goods-action-button  type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import Swiper from '../components/swiper'
export default {
  data() {
    return {
      detailInfo:{title:'新边界五色葡萄干250g',msg:'80g×1袋',price:'6.9',picArray:[require('../assets/images/goods03.png')]}
    }
  },
  components:{
    Swiper
  },
  computed:{
  },
  methods:{
  },
  mounted() {
  },
}
</script>

<style scoped lang="less">
</style>
