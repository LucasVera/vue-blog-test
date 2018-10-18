import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex';
import { getStore } from './store';


Vue.config.productionTip = false

Vue.use(Vuex);

new Vue({
  router,
  store: getStore(),
  render: h => h(App)
}).$mount('#app')
