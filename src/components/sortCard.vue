<template>
  <div>
    <van-card
      @click="goToDetail"
      :price="goods.ORI_PRICE"
      desc=""  
      :title="goods.NAME"
      :thumb="goods.IMAGE1">
      <div slot="footer" class="card-footer">
        <div class="card-icon">
          <van-icon name="cart-o" @click.stop="addToCart"/>
        </div>
      </div>
    </van-card>
    <transition appear
      @before-appear="beforeEnter"
      @after-appear='afterEnter'
      v-for="(item,index) in showMoveDot"
      :key="index.id">
      <div class="move_dot" ref="ball" v-if="item">
        <img :src="dropImage" class="move-img">
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props:['goods'],
  data(){
    return {
      showMoveDot: [], //控制下落的小圆点显示隐藏
      elLeft: 0, //当前点击购物车按钮在网页中的绝对top值
      elTop: 0, //当前点击购物车按钮在网页中的绝对left值
      dropImage:'' // 小球图片
    }
  },
  methods:{
    goToDetail(){
      this.$router.push({path:'/detail',query:{id:this.goods.ID}})
    },
    addToCart (){
      let jsonDataGoods = localStorage.getItem('cartGoods')
      let cartGoodsList = jsonDataGoods?JSON.parse(jsonDataGoods):[]
      let index = cartGoodsList.findIndex(value=>{
        return value.ID == this.goods.ID
      })
      if(index<0){
        cartGoodsList.push({
          ID:this.goods.ID,
          NAME:this.goods.NAME,
          ORI_PRICE:this.goods.ORI_PRICE,
          IMAGE1:this.goods.IMAGE1,
          NUM:1
        })
        localStorage.setItem('cartGoods',JSON.stringify(cartGoodsList))
        this.dropImage = this.goods.IMAGE1;
        this.showMoveDot = [...this.showMoveDot, true];
        this.elLeft = event.target.getBoundingClientRect().left;
        this.elTop = event.target.getBoundingClientRect().top;
      }else{
        this.$toast.fail('您已添加过该商品');
      }
    },
    beforeEnter (el) {
      // 设置transform值
      el.style.transform = `translate3d(${this.elLeft - 290}px,${this.elTop - 55}px , 0)`;
      // 设置透明度
      el.style.opacity = 0;
    },
    afterEnter (el) {
      // 获取底部购物车徽标
      const badgePosition = document
        .getElementsByClassName("van-icon van-icon-cart-o bottom-cart")[0]
        .getBoundingClientRect();
      // 设置小球移动的位移
      el.style.transform = `translate3d(${badgePosition.left - 110}px,${badgePosition.top - 15}px,0)`
      // // 增加贝塞尔曲线  
      el.style.transition = 'transform .88s cubic-bezier(0.3, -0.25, 0.7, -0.15)';
      el.style.transition = 'transform .88s linear';
      this.showMoveDot = this.showMoveDot.map(item => false);
      // 设置透明度
      el.style.opacity = 1;
    }
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
.move_dot{
  position: fixed;
  z-index: 100;
  top: 30px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.move-img{
  animation: 0.88s mymove ease-in-out;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

@keyframes mymove {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(0.6);
  }
  75% {
    transform: scale(0.4);
  }
  100% {
    transform: scale(0.2);
  }
}
</style>
