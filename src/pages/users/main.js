// TOP main.js
import Vue from 'vue';
import Top from './Users.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(Top),
}).$mount('#users');