<template>

  <div class="address-item" @click="goEditorAdd">
    <img src="../../assets/images/local.png">
    <div class="address-right" v-if="address.id">
      <ul class="address-info">
        <li class="info-top">
          <span>{{address.name}}</span>
          <a>{{address.tel}}</a>
        </li>
        <li class="info-txt">{{address.address}}</li>
      </ul>
    </div>
    <div class="address-none" v-else>
      请选择收货地址
    </div>
  </div>

</template>

<script>
export default {
  props:['address'],
  components: {
  },
  data(){
    return {
    }
  },
  computed:{

  },
  methods:{
    goEditorAdd(){
      this.$router.push('/editorAddress')
    }
  },
  mounted(){
  }
  
}
</script>

<style lang="less" scope>
.address-item{
  display: flex;
  align-items: center;
  width: 100%;
  height: 180px;
  margin-bottom: 20px;
  text-align: left;
  background: #fff;
  border-radius: 15px;
  &>img{
    flex: none;
    width: 64px;
    margin: 0 20px;
  }
  .address-right{
    padding: 20px;
  }
  .address-none{
    padding: 20px;
    font-size: 32px;
    color: #333
  }
  .address-info{
    .info-top{
      font-size: 30px;
      color: rgb(51, 51, 51);
      padding: 15px 0;
      &>a{
        font-size: 26px;
        margin-left: 15px;
        color: rgb(153, 153, 153);
      }
    }
    .info-txt{
      font-size: 24px;
      line-height: 35px;
      color: rgb(51, 51, 51);
    }
  }
}
</style>
