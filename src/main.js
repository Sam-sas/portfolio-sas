import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue } from 'bootstrap-vue';
import App from './App.vue';

require('./scss/portfolio.scss');

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
