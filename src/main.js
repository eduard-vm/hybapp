import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './plugins';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  beforeCreate() {
    this.$ons.disableAutoStyling();
  },
  render: h => h(App),
}).$mount('#app');
