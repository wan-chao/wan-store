<template>
  <van-swipe-cell class="cart-cell" :disabled="disabled">
    <div class="cart-goods">
      <div class="cart-left">
        <slot></slot>
        <img :src="goods.IMAGE1">
      </div>
      <div class="goods-info">
        <div class="goods-name">{{goods.NAME}}</div>
        <!-- <span class="goods-msg">230g×10瓶</span> -->
        <div class="goods-computer">
          <span class="goods-num">￥{{goods.ORI_PRICE*num | initPrice}}</span>
          <van-stepper v-model="num" integer @change="onChange"  input-width="40px" button-size="24px"/>
        </div>
      </div>
    </div>

    <template slot="right">
      <van-button square type="danger" class="cart-cell" text="删除" @click="deleteBtn"/>
    </template>
  </van-swipe-cell>
</template>

<script>
export default {
  props:{
    goods:{
      type:Object,
      default:{}
    },
    disabled:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return {
      num:1,
    }
  },
  filters:{
    initPrice(val){
      return val.toFixed(2)
    }
  },
  methods:{
    onChange(value){
      let jsonDataGoods = localStorage.getItem('cartGoods')
      let cartGoodsList = jsonDataGoods?JSON.parse(jsonDataGoods):[]
      let newGoods = Object.assign(this.goods,{NUM:value})
      let index = cartGoodsList.findIndex(value=>{
        return value.ID == newGoods.ID
      })
      cartGoodsList[index] = newGoods
      localStorage.setItem('cartGoods',JSON.stringify(cartGoodsList))
    },
    deleteBtn(){
      this.$emit('delete',this.goods)
    }
  },
  mounted(){
    this.num = this.goods.NUM
  }
}
</script>

<style lang="less">
.cart-cell{
  height: 100%;
}
.cart-goods{
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  text-align: left;
  background: #fff;
  .cart-left{
    display: flex;
    &>img{
      flex: none;
      width: 180px;
      height: 180px;
      margin:0 20px;
    }
  }
  .goods-info{
    width: 100%;
    height: 100%;
  }
  .goods-name{
    color: #323233;
    font-size: 28px;
    line-height: 40px;
    padding: 10px 0;
  }
  .goods-msg{
    color: #7d7e80;
    font-size: 22px;
  }
  .goods-computer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    color: #323233;
    font-size: 26px;
    .goods-num{
      color: #FF0036;
    }
  }
}

</style>
