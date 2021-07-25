import Vue from 'vue'
import VueRouter from 'vue-router'
import VueTypedJs from 'vue-typed-js'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import router from './router/router'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueTypedJs)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
