<template>
  <div class="container">
    <div class="cart-content" id="cartContent">
      <van-checkbox-group v-model="result" ref="checkboxGroup" @change="onSelectChange">
        <CartGoods v-for="goods in cartGoodsList" :key="goods.ID" :goods="goods" @delete="onCartGoodsDelete">
          <van-checkbox :name="goods" checked-color="#1acb95"></van-checkbox>
        </CartGoods>
      </van-checkbox-group>
    </div>
    <div class="bottom-bar">
      <van-checkbox class="check-all" v-model="allchecked" checked-color="#1acb95" @click="checkAll">全选</van-checkbox>
      <div class="bottom-right">
        <div class="last-price">合计：<span>￥{{allNum}}</span></div>
        <div class="price-btn" @click="goOrderPage">结算</div>
      </div>
    </div>
  </div>
</template>

<script>
import CartGoods from '@/components/cartGoods'
export default {
  name: 'cart',
  components: {
    CartGoods
  },
  data(){
    return {
      allchecked:false,
      cartGoodsList:[],
      result: []
    }
  },
  computed:{
    allNum(){
      let price = 0
      this.result.forEach(value=>{
        price+=value.ORI_PRICE*value.NUM
      })
      return price.toFixed(2)
    }
  },
  methods:{
    goOrderPage(){
      let array = []
      if(this.result.length){
        this.result.forEach(v=>{
          array.push(v.ID)
        })
        let ids = array.join(',')
        this.$store.dispatch('setOrderGoodsList',this.result)
        this.$router.push({path:'/order',query:{price:this.allNum}})
      }
    },
    checkAll(){
      this.$refs.checkboxGroup.toggleAll(!this.allchecked);
    },
    onSelectChange(data){
      if(data.length===this.cartGoodsList.length){
        this.allchecked = true
      }else{
        this.allchecked = false
      }
    },
    onCartGoodsDelete(data){
      let resultIndex = this.result.findIndex(v=>{
        return v.ID === data.ID
      })
      if(resultIndex>=0){
        this.result.splice(resultIndex, 1);
      }
      let cartIndex = this.cartGoodsList.findIndex(v=>{
        return v.ID === data.ID
      })
      this.cartGoodsList.splice(cartIndex, 1);
      localStorage.setItem('cartGoods',JSON.stringify(this.cartGoodsList))
    }
  },
  mounted(){
    let winHeight = document.documentElement.clientHeight
    document.getElementById("cartContent").style.height = winHeight - 100 + 'px'
    let jsonDataGoods = localStorage.getItem('cartGoods')
    this.cartGoodsList = jsonDataGoods?JSON.parse(jsonDataGoods):[]
  }
  
}
</script>

<style lang="less" scope>
.cart-content{
  width: 95%;
  margin: 0 auto;
  padding-top: 20px;
  overflow: scroll;
}
.bottom-bar{
  position: fixed;
  left: 0;
  bottom: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  background: #fff;
  .check-all{
    margin-left: 30px;
    font-size: 24px;
    color: #666;
  }
  .last-price{
    font-size: 28px;
    color: #666;
    &>span{
      font-size: 32px;
      color: #FF0036;
    }
  }
  .bottom-right{
    display: flex;
    align-items: center;
    margin-right: 30px;
  }
  .price-btn{
    width: 170px;
    height: 60px;
    margin-left: 20px;
    border-radius: 40px;
    background: #1acb95;
    font-size: 32px;
    line-height: 60px;
    color: #fff;
  }
}
</style>
