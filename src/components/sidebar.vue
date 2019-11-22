<template>
  <van-sidebar v-model="activeKey">
    <van-sidebar-item v-for="item in classify" :key="item.type" :title="item.title" />
  </van-sidebar>
</template>

<script>
export default {
  props:{
    classify:{
      type:Array,
      default:[]
    }
  },
  data(){
    return {
      activeKey: 0
    }
  },
  methods:{
    setActiveKey(val){
      this.activeKey = val
    }
  },
  mounted(){
  }
}
</script>

<style lang="less">
</style>
