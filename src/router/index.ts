import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import UserPage from '@/views/UserDetails.vue'
import InsuranceAgency from '@/views/InsuranceAgencyPage.vue'
import Estimator from '@/views/EstimatorPage.vue'
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
        path: 'api/client',
        name: 'UserPage',
        component: UserPage,
        meta: { requiresAuth: true, role: 'ROLE_Client' }
      },
      {
        path: 'api/insurance_agency',
        name: 'InsuranceAgencyPage',
        component: InsuranceAgency,
        meta: { requiresAuth: true, role: 'ROLE_Insurance agency' }
      },
      {
        path: 'api/estimator',
        name: 'EstimatorPage',
        component: Estimator,
        meta: { requiresAuth: true, role: 'ROLE_Estimator' }
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const authenticated = localStorage.getItem('message')
  const currentUserRole = localStorage.getItem('role')
  let isAuthenticated = false
  if(authenticated === 'Login successful') {
    isAuthenticated = true
  }
  const requiredAuth = to.matched.some(record => record.meta.requiresAuth)
  const role = to.matched[to.matched.length - 1]?.meta.role

  if (requiredAuth && !isAuthenticated) {
    next('/auth/login')
  } else if (requiredAuth && isAuthenticated && role) {
      if (currentUserRole !== role) {
        next(from.path)
      } else {
        next()
      }
    } else {
      next()
  }
})

export default router
