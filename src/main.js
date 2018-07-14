// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueSelect from 'vue-select';
import App from './App';
import router from './router';
import store from './store';
import logger, { options } from './logger';

Vue.config.productionTip = false;
Vue.use(logger, options);
Vue.component('v-select', VueSelect);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
