import VueRouter from 'vue-router'
import Index from '../view/main.vue'
import Table from '../view/index/table.vue'
import Step from '../view/index/step.vue'
import Tabs from '../view/index/tabs.vue'

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
      },
      {
        path: 'tabs',
        name: 'tabs',
        component: Tabs,
        redirect: '/tabs/sub1',
        children: [
          {
            path: 'sub1',
            name: 'stabstep',
            component: Table
          },
          {
            path: 'sub2',
            name: 'tabs',
            component: Step
          }
        ]
      }]
    }
  ]
})

export default router
