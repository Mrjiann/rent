//src/main.js
import Vue from 'vue'
import App from './App'

// 导入路由

Vue.config.productionTip = false
// 导入路由
import router from './router'

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})