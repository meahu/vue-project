import VueRouter from 'vue-router';
import Index from '../view/main.vue';
import Table from '../view/index/table.vue';
import Step from '../view/index/step.vue';

const router = new VueRouter({
    routes: [
      {
        path: '/',
        name: 'index',
        component: Index,
        children: [{
            path: 'table',
            name: 'table',
            component: Table
        },
        {
            path: 'step',
            name: 'step',
            component: Step
        }]
      }
    ]
});

export default router;