<template>
  <van-card
    price="2.00"
    desc="描述信息"  
    title="商品标题"
    thumb="https://img.yzcdn.cn/vant/t-thirt.jpg">
    <div slot="footer" class="card-footer">
      <div class="card-icon">
        <van-icon name="cart-o" />
      </div>
    </div>
  </van-card>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  methods:{
  },
  mounted(){
  }
}
</script>

<style lang="less">
.card-footer{
  position: relative;
  &>.card-icon{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 30px;
    color: #fff;
    bottom: 0px;
    right: -10px;
    background: #1acb95;
  }
}
</style>
