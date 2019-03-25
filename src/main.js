import Vue from 'vue';
import App from './view/App.vue';
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index.js';
import VueRouter from 'vue-router';

Vue.use(Element);
Vue.use(VueRouter);

new Vue({
    el: '#app',
    template: '<App/>',
    router: router,
    components: {App}
});