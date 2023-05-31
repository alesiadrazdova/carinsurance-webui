import { createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import UserPage from '@/views/UserDetails.vue'
import Home from '@/views/Home.vue'
import InsuranceCasesList from '@/components/InsuranceCasesList.vue'
import { Component } from 'vue'

const CaseInsurance: Component = InsuranceCasesList as any


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Home,
      },
    ],
  },
  {
    path: '/user',
    name: 'UserPage',
    component: UserPage,
    children: [
      {
        path: 'cases',
        name: 'InsuranceCasesList',
        component: CaseInsurance
      },
      // {
      //   path: 'cases/new',
      //   name: 'NewCase',
      //   component:
      // }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
