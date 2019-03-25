import VueRouter from 'vue-router';
import Index from '../view/index/index.vue';

const router = new VueRouter({
    routes: [
      {
        path: '/',
        name: 'index',
        component: Index
      }
    ]
});

export default router;