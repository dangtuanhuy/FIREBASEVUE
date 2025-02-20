import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router';
import { routes } from './routers/index.js';
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'history'
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
