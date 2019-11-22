<template>
  <div class="container">
    <Swiper></Swiper>
    <div class="content">
      <div class="home-content">
        <Recommend></Recommend>
      </div>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Swiper from '../../components/swiper'
import Tabbar from '../../components/tabbar'
import Recommend from './recommend'
export default {
  name: 'home',
  components: {
    Swiper,
    Tabbar,
    Recommend
  },
  data(){
    return {
    }
  }
}
</script>

<style lang="less">
.content{
  position: relative;
  width: 100%;
}
.home-content{
  position: absolute;
  top: -36px;
  width: 100%;
  padding-top: 36px;
  border-top-left-radius: 36px;
  border-top-right-radius: 36px;
  background: #f6f6f6;
}
</style>
