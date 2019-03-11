import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import iView from 'iview';
import axios from 'axios';
import '../node_modules/iview/dist/styles/iview.css';
import store from './store';


Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://localhost:8899';
Vue.use(VueRouter);
Vue.use(iView, {
  transfer: true,
  size: 'large'
});

const routes = [];

const router = new VueRouter({routes});
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')