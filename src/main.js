import Vue from 'vue';
import App from './view/App.vue';
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index.js';
import VueRouter from 'vue-router';
import service from './utils/sevice.js'

process.env.NODE_ENV === 'mock' && require('./utils/mockjs/index.js');

Vue.use(Element);
Vue.use(VueRouter);
Vue.use(service);

new Vue({
    el: '#app',
    template: '<App/>',
    router: router,
    components: {App}
});