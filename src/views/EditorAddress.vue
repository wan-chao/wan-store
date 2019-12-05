<template>
  <div class="container">
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @select="onSelect"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
export default {
  components: {
  },
  data(){
    return {
      chosenAddressId: '1',      
      list: [],
    }
  },
  methods:{
    onSelect(item, index){
      this.list.forEach(v=>{
        v.isDefault = false
      })
      this.list[index].isDefault = true
      localStorage.setItem('addressList',JSON.stringify(this.list))
    },
    onAdd() {
      this.$router.push('/createAddress')
    },
    onEdit(item, index) {
      this.$router.push({path:'/createAddress',query:{num:index}})
    }
  },
  mounted(){
    let userAdd = localStorage.getItem('addressList')
    this.list = userAdd?JSON.parse(userAdd):[]
    let index = this.list.findIndex(v=>{
      return v.isDefault === true
    })
    this.chosenAddressId=index>=0?this.list[index].id:'-1'
  }
}
</script>

<style scoped lang="less">

</style>
