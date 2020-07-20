<template>
  <div class="container">
    <div class="other-content">

      <div class="other-top">
        <van-field v-model="name" class="other-field" placeholder="请输入文件名" />
        <div class="add-btn" @click="onAddNewData">新增</div>
      </div>
      
      <van-swipe-cell v-for="(item,index) in list" :key="index">
        <van-cell :title="item.name" title-class="other-title" is-link  :url="setFilesUrl(item.src)" />
        <template #right>
          <van-button square type="danger" @click="onDeleteData(index)" text="删除" />
        </template>
      </van-swipe-cell>

    </div>
  </div>
</template>

<script>
const url = 'http://192.168.0.233:8088/files/'
import { Dialog } from 'vant';
export default {
  name: 'other',
  components: {
  },
  data(){
    return {
      name:'',
      list:[]
    }
  },
  computed:{
  },
  methods:{
    setFilesUrl(item){
      return `${url}${item}`
    },
    onAddNewData(){
      if(this.name){
        let obj = {name:this.name,src:this.name}
        let index = this.list.findIndex(v=>{
          return v.name === this.name
        })
        if(index>=0) return
        this.list.push(obj)
        localStorage.setItem('other_list',JSON.stringify(this.list))
      }
    },
    onDeleteData(index){
      Dialog.confirm({
        title: '标题',
        message: '弹窗内容',
      }).then(() => {
        this.list.splice(index,1)
        localStorage.setItem('other_list',JSON.stringify(this.list))
      }).catch(() => {});
    }
  },
  mounted(){
    this.list = localStorage.getItem('other_list')?JSON.parse(localStorage.getItem('other_list')):[]
  }
  
}
</script>

<style lang="less" scope>
.other-content{
  width: 95%;
  margin: 0 auto;
  padding-top: 20px;
  overflow: scroll;
}
.other-title{
  text-align: left;
}
.other-field{
  width: 500px;
}
.other-top{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.add-btn{
  width: 160px;
  height: 60px;
  line-height: 60px;
  font-size: 24px;
  color: #fff;
  margin-right: 20px;
  border-radius: 8px;
  background: #1989fa;
}
</style>
