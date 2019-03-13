import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import iView from 'iview';
import axios from 'axios';
import '../node_modules/iview/dist/styles/iview.css';
import store from './store';

// 导入组件
import Admin from "./pages/Admin";
import OrderList from "./pages/order/OrderList";


Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://localhost:8899';
Vue.use(VueRouter);
Vue.use(iView, {
  transfer: true,
  size: 'large'
});


// 配置路由
const routes = [
  // 首页路由重定向
  {path:"/", redirect:"admin"},
  {path:"/admin",component:Admin,meta:"首页",children:[
    {path:"order-list",component:OrderList,meta:"订单管理"}
  ]}
];

const router = new VueRouter({routes});
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')