<template>
  <div class="container">
    <van-tabs v-model="active" color="#1acb95" @click="tabsClick" sticky>
      <van-tab :title="item.MALL_CATEGORY_NAME" v-for="item in sortList" :key="item.ID"></van-tab>
    </van-tabs>
    <van-row class="tab-content">
      <van-col span="6">
        <div id="siderBar" class="sider-bar">
          <Sidebar :classify="classList" ref="siderbar" @change="siderChange"></Sidebar>
        </div>
      </van-col>
      <van-col span="18">
        <div class="sort-content" id="sortContent">
          <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          >
            <SortCard v-for="(goods,index) in goodsList" :key="index" :goods="goods"></SortCard>
          </van-list>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import Sidebar from '../components/sidebar'
import SortCard from '../components/sortCard'
import {categoryList,categorySubList,goodsListByCategorySubId} from '@/api/goods'
export default {
  data() {
    return {
      active: 0,
      page:1, 
      loading: false,
      finished: false,
      sortList:[], //大类列表
      classList:[], //小类列表
      goodsList:[], //商品列表
    }
  },
  components:{
    Sidebar,
    SortCard
  },
  computed:{
  },
  methods:{
    //获取大分类
    getCategoryList(){
      categoryList().then(res=>{
        // console.log(res)
        if(res.code == 200){
          this.sortList = res.data
          this.getCategorySubList()
        }
      })
    },
    //获取小分类
    getCategorySubList(){
      categorySubList(this.sortList[this.active].ID).then(res=>{
        console.log('小类',res)
        if(res.code == 200){
          this.classList = res.data
          this.typeId = this.classList[0].ID
        }
      })
    },
    //获取类别下的商品
    getGoodsListByCategorySubId(){
      goodsListByCategorySubId(this.typeId,this.page).then(res=>{
        console.log('类别商品',res)
        if(res.code == 200 && res.data.length){
          this.page++
          this.goodsList = this.goodsList.concat(res.data)
        }else{
          this.finished = true
        }
        this.loading = false
      })
    },
    //大类tab切换时触发的事件
    tabsClick(index){
      this.active = index
      this.goodsList = []
      this.finished = false
      this.page = 1
      this.$refs.siderbar.setActiveKey(0)
      this.getCategorySubList()
      this.onLoad()
    },
    //小类tab切换时触发的事件
    siderChange(id){
      this.typeId = id
      this.goodsList = []
      this.page = 1
      this.finished = false
      this.onLoad()
    },
    //上拉加载事件
    onLoad(){
      setTimeout(() => {
        this.typeId=this.typeId?this.typeId:this.classList[0].ID
        this.getGoodsListByCategorySubId()
      }, 500);
    }
  },
  mounted() {
    let winHeight = document.documentElement.clientHeight
    document.getElementById("sortContent").style.height = winHeight - 120 + 'px'
    document.getElementById("siderBar").style.height = winHeight - 120 + 'px'
    this.getCategoryList()
  },
}
</script>

<style scoped lang="less">
.tab-content{
  padding: 0 20px;
  margin-top: 20px;
}
.sider-bar{
  overflow: scroll;
}
.sort-content{
  text-align: left;
  font-size: 28px;
  padding-bottom: 20px;
  overflow: scroll;
}
</style>
