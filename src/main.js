import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入全局样式
import './assets/style/comm.less'
import './assets/style/reset.less'
//适配移动端
import 'lib-flexible'

import { Button,Swipe, SwipeItem,Tabbar, TabbarItem,Tab, Tabs,Sidebar, SidebarItem, Row, Col,Card,Icon,Lazyload,GoodsAction,
  GoodsActionIcon,GoodsActionButton,Sku,Stepper } from 'vant'
Vue.use(Button).use(Swipe).use(SwipeItem).use(Tabbar).use(TabbarItem).use(Tab)
.use(Tabs).use(Sidebar).use(SidebarItem).use(Row).use(Col).use(Card).use(Icon)
.use(Lazyload).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(Sku)
.use(Stepper);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
