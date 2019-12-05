import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderGoodsList:[]
  },
  mutations: {
    SET_ORDER_GOODS_LIST(state,data){
      state.orderGoodsList=data
    },
  },
  actions: {
    setOrderGoodsList:({commit},data)=>{
      commit('SET_ORDER_GOODS_LIST',data)
    },
  }
})
