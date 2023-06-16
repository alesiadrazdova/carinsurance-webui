import { createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import UserPage from '@/views/UserDetails.vue'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/auth/login'
  },
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: 'auth/login',
        name: 'Home',
        component: Home,
      },
      {
        path: 'client',
        name: 'UserPage',
        component: UserPage,
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
