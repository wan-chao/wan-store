<template>
  <div class="container">
    <keep-alive exclude="cart">
      <transition name="fade">
        <router-view/>
      </transition>
    </keep-alive> 
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '../components/tabbar'
export default {
  components: {
    Tabbar
  },
  data(){
    return {
    }
  }
}
</script>

<style lang="less">

</style>
