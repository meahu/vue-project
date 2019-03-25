import Vue from 'vue';
import App from './view/App.vue';
import router from './router/index.js';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

new Vue({
    el: '#app',
    template: '<App/>',
    router: router,
    components: {App}
});