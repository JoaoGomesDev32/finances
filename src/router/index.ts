import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Expenses from '../views/Expenses.vue'
import Reports from '../views/Reports.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Dashboard', component: Dashboard },
    { path: '/expenses', name: 'Expenses', component: Expenses },
    { path: '/reports', name: 'Reports', component: Reports },
  ]
})

export default router