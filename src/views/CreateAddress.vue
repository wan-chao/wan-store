<template>
  <div class="container">
    <div class="create-add">
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :address-info="addressInfo"
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
      />
     </div>
  </div>
</template>

<script>
import areaList from '@/config/area.js'
export default {
  components: {
  },
  data(){
    return {
      areaList,
      addressInfo:{},
      searchResult: []
    }
  },
  methods:{
    setAddressInfo(){
      let index = this.$route.query.num
      let addressJson = localStorage.getItem('addressList')
      let addressList = addressJson?JSON.parse(addressJson):[]
      this.addressInfo = addressList[index]
    },
    onSave(content) {
      let addressJson = localStorage.getItem('addressList')
      let addressList = addressJson?JSON.parse(addressJson):[]
      let len = addressList.length
      if(content.isDefault && len){
        addressList.forEach(v=>{
          v.isDefault = false
        })
      }
      content.address = `${content.province}${content.city}${content.county}${content.addressDetail}`
      if(this.addressInfo.id){
        content.id = this.addressInfo.id
        let index = addressList.findIndex(v=>{
          return v.id === content.id
        })
        addressList[index] = content
      }else{
        content.id = len?`${len+1}`:'1'
        addressList.push(content)
      }
      new Promise((resolve,reject)=>{
        localStorage.setItem('addressList',JSON.stringify(addressList))
        setTimeout(()=>{
          resolve()
        },500)
      }).then(()=>{
        this.$toast.success('添加成功');
        this.$router.push('/editorAddress')
      })
    },
    onDelete() {
      let num = this.$route.query.num
      if(num>=0){
        let id = this.addressInfo.id
        let addressJson = localStorage.getItem('addressList')
        let addressList = addressJson?JSON.parse(addressJson):[]
        let index = addressList.findIndex(v=>{
          return v.id === id
        })
        if(index>=0) addressList.splice(index,1)
        new Promise((resolve,reject)=>{
          localStorage.setItem('addressList',JSON.stringify(addressList))
          setTimeout(()=>{
            resolve()
          },500)
        }).then(()=>{
          this.$toast.success('删除成功');
          this.$router.push('/editorAddress')
        })
      }
    },
  },
  mounted(){
    let index = this.$route.query.num
    index>=0 && this.setAddressInfo()
  }
}
</script>

<style scoped lang="less">
.create-add{
  text-align: left;
}
</style>
