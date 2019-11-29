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
          <SortCard v-for="(goods,index) in goodsList" :key="index" :goods="goods"></SortCard>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import Sidebar from '../components/sidebar'
import SortCard from '../components/sortCard'
import {classifyJson} from '../config/config'
export default {
  data() {
    return {
      active: 0,
      sortList:classifyJson,
      goodsList:[
        {title:'蒙牛纯甄红西柚小蛮腰',msg:'230g×10瓶',price:'71.9',img:require('../assets/images/goods04.png')},
        {title:'蓝月亮亮白洗衣液6kg',msg:'500g×1瓶',price:'89.9',img:require('../assets/images/goods05.png')},
        {title:'新边界五色葡萄干250g',msg:'80g×1袋',price:'6.9',img:require('../assets/images/goods03.png')}
      ]
    }
  },
  components:{
    Sidebar,
    SortCard
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
