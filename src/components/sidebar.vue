<template>
  <van-sidebar v-model="activeKey" @change="siderbarChange">
    <van-sidebar-item v-for="item in classify" :key="item.ID" :title="item.MALL_SUB_NAME" />
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
    },
    siderbarChange(index){
      this.$emit('change',this.classify[index].ID)
    }
  },
  mounted(){
  }
}
</script>

<style lang="less">
</style>
