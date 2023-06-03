import { createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import UserPage from '@/views/UserDetails.vue'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
    path: '/user',
    name: 'UserPage',
    component: UserPage,
    children: [
      // {
      //   path: 'new',
      //   name: 'NewCase',
      //   component:
      // }
    ]
  }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
