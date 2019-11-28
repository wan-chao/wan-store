<template>
  <div class="container">
    <van-tabs v-model="active" color="#1acb95" @click="tabsClick">
      <van-tab :title="item.title" v-for="item in sortList" :key="item.type"></van-tab>
    </van-tabs>
    <van-row class="tab-content">
      <van-col span="6">
        <Sidebar :classify="classList" ref="siderbar"></Sidebar>
      </van-col>
      <van-col span="18">
        <div class="sort-content">
          <CartCard></CartCard>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import Sidebar from '../components/sidebar'
import CartCard from '../components/cartCard'
import {classifyJson} from '../config/config'
export default {
  data() {
    return {
      active: 0,
      sortList:classifyJson
    }
  },
  components:{
    Sidebar,
    CartCard
  },
  computed:{
    classList(){
      return this.sortList[this.active].children
    }
  },
  methods:{
    tabsClick(index){
      this.$refs.siderbar.setActiveKey(0)
    }
  },
  mounted() {
  },
}
</script>

<style scoped lang="less">
.tab-content{
  padding: 0 20px;
  margin-top: 20px;
}
.sort-content{
  text-align: left;
  font-size: 28px;
}
</style>
