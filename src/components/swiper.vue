<template>
  <div class="swiper-area">
    <van-swipe :autoplay="3000" style="height: 220px;">
      <van-swipe-item v-for="(pic,index) in picArray" :key="index">
        <img :src="pic.imageUrl" class="swiper-img"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data(){
    return {
      picArray:[
        {imageUrl:require('../assets/images/img06.jpg')},
        {imageUrl:require('../assets/images/img07.jpg')},
        {imageUrl:require('../assets/images/img08.jpg')},
        {imageUrl:require('../assets/images/img09.jpg')},
        {imageUrl:require('../assets/images/img10.jpg')},
        {imageUrl:require('../assets/images/img11.jpg')},
      ]
    }
  }
}
</script>

<style lang="less">
.swiper-area{
  width:100%;
}
.swiper-img{
  width: 100%;
  height: 100%;
}
</style>
