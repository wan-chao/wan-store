<template>
  <div class="goods-card">
    <img :src="goods.img" width="100%">
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
  height: 509px;
  margin-bottom: 20px;
  border-radius: 15px;
  background: #fff;
}
</style>
