<template>
  <div class="swiper-area">
    <van-swipe :autoplay="autoplay?3000:0" :style="autoHeight?{}:{height: '220px'}">
      <van-swipe-item v-for="(pic,index) in picArray" :key="index">
        <img v-lazy="pic" class="swiper-img"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props:{
    picArray:{
      type:Array,
      default:()=>[]
    },
    autoplay:{
      type:Boolean,
      default:true
    },
    autoHeight:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return {
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
