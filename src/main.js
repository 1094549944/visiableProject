import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import Echarts from 'echarts'
import VueEcharts from 'vue-echarts'
import "./plugins/element.js"
import './plugins/vcharts.js'
import './style/index.css'
Vue.config.productionTip = false;
// 全局注册echarts
Vue.prototype.$echarts = Echarts
// 使用v-chart
Vue.component('v-chart', VueEcharts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
