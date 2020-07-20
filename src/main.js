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
  GoodsActionIcon,GoodsActionButton,Sku,Stepper,List,Image,Checkbox,Cell,CellGroup,Field,CheckboxGroup,Toast,SwipeCell,SubmitBar,ImagePreview,AddressList,AddressEdit } from 'vant'
Vue.use(Button).use(Swipe).use(SwipeItem).use(Tabbar).use(TabbarItem).use(Tab).use(Cell).use(CellGroup)
.use(Tabs).use(Sidebar).use(SidebarItem).use(Row).use(Col).use(Card).use(Icon).use(Field)
.use(Lazyload).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(Sku)
.use(Stepper).use(List).use(Image).use(Checkbox).use(CheckboxGroup).use(Toast).use(SwipeCell).use(SubmitBar)
.use(ImagePreview).use(AddressList).use(AddressEdit);

Vue.config.productionTip = false

// import Vconsole from 'vconsole'
// let vConsole = new Vconsole()
// Vue.use(vConsole)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
