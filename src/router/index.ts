import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import UserPage from '@/views/UserDetails.vue'
import InsuranceAgencyDetails from '@/views/InsuranceAgencyDetails.vue'
import Estimator from '@/views/EstimatorDetails.vue'
import Home from '@/views/Home.vue'
import InsuranceAgencyCase from '@/components/InsuranceAgencyCase.vue'

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
        meta: { requiresAuth: true, role: 'ROLE_Client' }
      },
      {
        path: 'insurance_agency',
        name: 'InsuranceAgencyPage',
        component: InsuranceAgencyDetails,
        meta: { requiresAuth: true, role: 'ROLE_Insurance agency' },
      },
      {
        path: 'insurance_agency/user_case/:id',
        name: 'InsuranceAgencyCase',
        component: InsuranceAgencyCase,
        meta: { requiresAuth: true, role: 'ROLE_Insurance agency' },
      },
      {
        path: 'estimator',
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
  const currentUserRole = localStorage.getItem('role')
  let isAuthenticated = false
  if(currentUserRole) {
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
