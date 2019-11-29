<template>
  <div class="container">
    <keep-alive>
      <router-view/>
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
