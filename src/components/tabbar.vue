<template>
  <van-tabbar v-model="active" active-color="#1acb95">
    <van-tabbar-item 
      v-for="item in routers" 
      :key="item.name" 
      :icon="item.icon"
      :to="item.url">
      {{item.name}}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data(){
    return {
      active: 0,
      routers:[
        {name:'首页',icon:"home-o",url:'/'},
        {name:'分类',icon:"search",url:'/sort'},
        {name:'我的',icon:"setting-o",url:'/my'},
      ]
    }
  },
  methods:{
    changeActive(){
      let index =this.routers.findIndex(v=>{
        return v.url === this.$route.path
      })
      this.active = index
    }
  },
  mounted(){
    this.changeActive()
  }
}
</script>

<style lang="less">
</style>
