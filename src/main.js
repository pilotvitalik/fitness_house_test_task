import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;

Vue.use(VueResource);

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
}).$mount('#app');
